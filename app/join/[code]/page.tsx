import { Metadata } from 'next'
import { cache } from 'react'
import { createClient } from '@supabase/supabase-js'
import { JoinPageClient } from './JoinPageClient'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

interface Props {
  params: Promise<{ code: string }>
}

// Only these fields cross into the client component / RSC payload — the RPC
// also returns family_id, invite row id, status, and invitee name, which a
// forwarded link holder has no business seeing.
const getInvitePreview = cache(async (code: string) => {
  if (!supabaseUrl || !supabaseAnonKey) return null
  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  const { data, error } = await supabase.rpc('get_invite_preview', {
    p_invite_code: code,
  })
  if (error || !data) return null
  const raw = data as {
    valid?: boolean
    status?: string
    expires_at?: string | null
    family_name?: string
    inviter_name?: string
  }
  // The RPC reports valid=true whenever the row exists; pending + unexpired
  // is what actually counts (mirrors mobile's useInviteLookup).
  const valid =
    raw.valid === true &&
    raw.status === 'pending' &&
    (!raw.expires_at || new Date(raw.expires_at) > new Date())
  return {
    valid,
    family_name: raw.family_name,
    inviter_name: raw.inviter_name,
  }
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params
  const preview = await getInvitePreview(code)
  const familyName = preview?.valid ? preview.family_name : null

  const title = familyName
    ? `Join ${familyName} on Kinely`
    : 'Join your family on Kinely'

  return {
    title,
    description: 'Answer one question a day with your family. Build memories that last forever.',
    openGraph: {
      title,
      description: 'Answer one question a day with your family. Build memories that last forever.',
      type: 'website',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function JoinPage({ params }: Props) {
  const { code } = await params
  const preview = await getInvitePreview(code)

  return <JoinPageClient code={code} preview={preview} />
}
