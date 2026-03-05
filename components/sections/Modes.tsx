'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { SectionKicker } from '../ui/SectionKicker'
import Link from 'next/link'
import { Flame, Plane, Star, Heart, Sparkles, UserPlus } from 'lucide-react'
import { GrandparentsModeCard } from '../ui/GrandparentsModeCard'
import { useModeTransition } from '@/lib/mode-transition'

const CARD_BG = '#F7F2EA'
const GUEST_BG = '#2C2416'

const topModes = [
  {
    slug: 'gathered',
    icon: <Flame size={28} className="text-ember" />,
    iconBg: <Flame size={80} className="text-ember opacity-[0.04] absolute top-4 right-4" />,
    title: 'Gathered Mode',
    body: "Open Kinely at dinner. The question fills the screen — big enough to read across the table. Your family answers out loud, you log them. Three minutes. Then you put the phone down and get back to dinner. Kinely knows when to disappear.",
    chip: 'For dinner together',
  },
  {
    slug: 'connected',
    icon: <Plane size={28} className="text-charcoal-mid" />,
    iconBg: <Plane size={80} className="text-charcoal opacity-[0.04] absolute top-4 right-4" />,
    title: 'Connected Mode',
    body: "The question arrives on every phone at exactly the same moment. Dad answers from his hotel. The kids answer from the couch. Everyone sees each other's answers trickle in. For twenty minutes, you're in the same room across 800 miles.",
    chip: 'For families apart',
  },
]

const bottomModes = [
  {
    slug: 'spotlight',
    icon: <Star size={24} className="text-ember" />,
    iconBg: <Star size={72} className="text-ember opacity-[0.04] absolute top-4 right-4" />,
    title: 'Spotlight Mode',
    body: "It's her birthday. Every question today is about her — her favorite memories, her best year, what the family loves most about her. At the end of the day, she has a page full of love letters from the people who matter most.",
    chip: 'For special days',
  },
  {
    slug: 'grandparents',
    icon: <Heart size={24} className="text-rose-400" />,
    iconBg: <Heart size={72} className="text-rose-400 opacity-[0.04] absolute top-4 right-4" />,
    title: 'Grandparents Mode',
    body: "Grandma gets the question in extra-large text with a single big button to record her voice. The grandkids hear it played back in her actual voice. The stories she's never told — her childhood, her wedding day, her biggest adventure — finally get asked.",
    chip: 'For every generation',
  },
  {
    slug: 'big-events',
    icon: <Sparkles size={24} className="text-amber-500" />,
    iconBg: <Sparkles size={72} className="text-amber-500 opacity-[0.04] absolute top-4 right-4" />,
    title: 'Big Events',
    body: "First day of school. Thanksgiving. The last day of summer. Kinely knows when the big moments are coming and prepares a special question set — curated for the day. Every milestone gets its own chapter in your family's story.",
    chip: 'For milestones',
  },
]

function ModeCard({
  slug,
  icon,
  iconBg,
  title,
  body,
  chip,
}: {
  slug: string
  icon: React.ReactNode
  iconBg: React.ReactNode
  title: string
  body: string
  chip: string
}) {
  const router = useRouter()
  const cardRef = useRef<HTMLDivElement>(null)
  const { startTransition } = useModeTransition()

  function handleClick() {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    startTransition(rect, CARD_BG)
    router.push(`/modes/${slug}`)
  }

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className="group relative overflow-hidden flex flex-col cursor-pointer"
      style={{
        background: CARD_BG,
        borderRadius: 24,
        padding: '40px 36px',
        boxShadow: '0 2px 20px rgba(44,36,22,0.06)',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        userSelect: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(44,36,22,0.10)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 20px rgba(44,36,22,0.06)'
      }}
    >
      {iconBg}
      <div className="mb-5">{icon}</div>
      <h3 className="font-cormorant font-medium text-charcoal mb-4" style={{ fontSize: 28 }}>
        {title}
      </h3>
      <p className="font-dm-sans font-light text-charcoal-lt mb-6 flex-1" style={{ fontSize: 14, lineHeight: 1.75 }}>
        {body}
      </p>
      <div className="flex items-center justify-between">
        <span
          className="inline-block font-dm-sans font-medium text-ember text-[11px] uppercase tracking-[0.06em] px-4 py-2 rounded-chip"
          style={{ background: '#F5E6DC' }}
        >
          {chip}
        </span>
        <span className="font-dm-sans font-medium text-[12px] text-charcoal-lt group-hover:text-ember transition-colors">
          See how it works →
        </span>
      </div>
    </div>
  )
}

function GuestModeCard() {
  const router = useRouter()
  const cardRef = useRef<HTMLDivElement>(null)
  const { startTransition } = useModeTransition()

  function handleClick() {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    startTransition(rect, GUEST_BG)
    router.push('/modes/guest')
  }

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className="group relative overflow-hidden flex flex-col md:flex-row md:items-center gap-8 cursor-pointer"
      style={{
        background: GUEST_BG,
        borderRadius: 24,
        padding: '40px 44px',
        boxShadow: '0 2px 20px rgba(44,36,22,0.12)',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        userSelect: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(44,36,22,0.20)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 20px rgba(44,36,22,0.12)'
      }}
    >
      <UserPlus size={100} className="absolute top-4 right-8 text-white opacity-[0.03]" />
      <div className="flex-shrink-0">
        <UserPlus size={28} className="text-ember-light mb-5" />
        <h3
          className="font-cormorant font-medium text-warm-white mb-4"
          style={{ fontSize: 28 }}
        >
          Guest Mode
        </h3>
        <span
          className="inline-block font-dm-sans font-medium text-ember-light text-[11px] uppercase tracking-[0.06em] px-4 py-2 rounded-chip"
          style={{ background: 'rgba(196,84,26,0.2)' }}
        >
          For guests &amp; gatherings
        </span>
      </div>
      <p
        className="font-dm-sans font-light flex-1"
        style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', maxWidth: 600 }}
      >
        Someone&apos;s joining you for the holidays. Send them a guest link — they answer tonight&apos;s question right alongside your family. Their answer is saved in your archive, marked as{' '}
        <em style={{ color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
          &ldquo;Guest · Sarah · Thanksgiving 2025.&rdquo;
        </em>{' '}
        No account needed. Just connection.
      </p>
      <span className="font-dm-sans font-medium text-[13px] text-ember-light group-hover:text-ember transition-colors flex-shrink-0">
        See how it works →
      </span>
    </div>
  )
}

export function Modes() {
  return (
    <section id="modes" style={{ background: '#EDE6D6', padding: '100px 56px' }}>
      <div className="max-w-content mx-auto">
        <SectionKicker label="Every way your family connects" />

        <h2
          className="font-cormorant font-normal text-charcoal mb-14"
          style={{
            fontSize: 'clamp(36px, 4vw, 54px)',
            lineHeight: 1.1,
            maxWidth: 600,
          }}
        >
          At the table. Across the world.
          <br />
          <em className="italic text-ember">Built to disappear when it matters most.</em>
        </h2>

        {/* Top row: 2 cols */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {topModes.map((mode) => (
            <ModeCard key={mode.slug} {...mode} />
          ))}
        </div>

        {/* Bottom row: 3 cols */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {bottomModes.map((mode) =>
            mode.slug === 'grandparents' ? (
              <GrandparentsModeCard key="grandparents" />
            ) : (
              <ModeCard key={mode.slug} {...mode} />
            )
          )}
        </div>

        {/* Guest Mode: full-width featured card */}
        <GuestModeCard />

        {/* Mid-section CTA */}
        <div className="flex justify-end mt-8">
          <Link
            href="/pricing"
            className="font-dm-sans font-medium text-ember hover:text-ember-light transition-colors"
            style={{ fontSize: 14 }}
          >
            See pricing →
          </Link>
        </div>
      </div>
    </section>
  )
}
