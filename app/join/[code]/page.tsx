import { Metadata } from 'next'
import { createClient } from '@supabase/supabase-js'
import { JoinPageClient } from './JoinPageClient'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

interface Props {
  params: Promise<{ code: string }>
}

async function getInvitePreview(code: string) {
  if (!supabaseUrl || !supabaseAnonKey) return null
  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  const { data, error } = await supabase.rpc('get_invite_preview', {
    p_invite_code: code,
  })
  if (error || !data) return null
  return data as { family_name?: string; family_photo_url?: string; inviter_name?: string; valid: boolean }
}

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
