import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new Error('STRIPE_SECRET_KEY is not set')
  return new Stripe(key)
}

// The client sends a plan slug, never a Stripe price ID. Price IDs are
// resolved exclusively server-side so a tampered request can't check out at
// an arbitrary (cheaper/legacy/$0) price on the account.
const PLAN_PRICES: Record<string, string | undefined> = {
  founding: process.env.NEXT_PUBLIC_PRICE_FOUNDING,
  monthly: process.env.NEXT_PUBLIC_PRICE_MONTHLY,
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/

// NOTE (known residual gap, deliberate): the subscribe page runs in an
// external browser with no Supabase session, so this route cannot verify the
// caller is an admin of familyId. Anyone who knows a family's UUID can still
// start a paid checkout that attaches a subscription to it. Closing this needs
// an app-initiated authenticated checkout (edge function + JWT) — tracked for
// when the mobile repo unfreezes.
export async function POST(req: NextRequest) {
  try {
    let body: unknown
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    const { plan, familyId, email } = (body ?? {}) as Record<string, unknown>

    if (typeof plan !== 'string' || !(plan in PLAN_PRICES)) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    if (typeof familyId !== 'string' || !UUID_RE.test(familyId)) {
      return NextResponse.json({ error: 'Missing familyId' }, { status: 400 })
    }

    const customerEmail =
      typeof email === 'string' && email.length <= 254 && EMAIL_RE.test(email)
        ? email
        : undefined

    const priceId = PLAN_PRICES[plan]
    if (!priceId) {
      return NextResponse.json(
        { error: 'Subscription plans not configured. Please try again shortly.' },
        { status: 500 }
      )
    }

    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      // plan lands in metadata so the webhook can derive the plan from a
      // server-controlled value instead of parsing opaque price IDs.
      metadata: {
        family_id: familyId,
        plan,
      },
      customer_email: customerEmail,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/subscribe`,
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
    })

    return NextResponse.json({ url: session.url })
  } catch (err: unknown) {
    console.error('Checkout error:', err instanceof Error ? err.message : err)
    return NextResponse.json(
      { error: 'Checkout failed. Please try again.' },
      { status: 500 }
    )
  }
}
