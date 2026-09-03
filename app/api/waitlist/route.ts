import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, clientIp } from '@/lib/rate-limit'

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/

export async function POST(req: NextRequest) {
  try {
    if (!rateLimit(`waitlist:${clientIp(req)}`, 5, 10 * 60 * 1000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    let body: unknown
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    const { email } = (body ?? {}) as Record<string, unknown>

    if (typeof email !== 'string' || email.length > 254 || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const audienceId = process.env.RESEND_AUDIENCE_ID

    if (!apiKey || !audienceId) {
      // Dev mode: acknowledge without logging the address (PII).
      console.log('Waitlist signup received (no Resend configured)')
      return NextResponse.json({ ok: true })
    }

    const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
