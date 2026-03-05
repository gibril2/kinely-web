import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ModePhoneMockup } from '@/components/ui/ModePhoneMockup'
import Link from 'next/link'

const modes = {
  gathered: {
    slug: 'gathered',
    chip: 'For dinner together',
    name: 'Gathered Mode',
    headline: 'One screen. Every voice in the room.',
    subhead: 'Open Kinely at dinner. The question fills the screen — big enough to read across the table. Your family answers out loud, you log them. Three minutes. Then you put the phone down and get back to dinner.',
    steps: [
      { num: '01', title: 'Open Kinely at dinnertime', body: 'Switch to Gathered Mode and the question expands to fill the whole screen — readable from across a dinner table without anyone squinting.' },
      { num: '02', title: 'Read the question aloud', body: 'One person reads it out. Everyone answers in their own words. No typing required — the whole point is conversation, not screens.' },
      { num: '03', title: 'Log the answers', body: 'Tap each family member and type (or voice-note) their answer while they\'re talking. Takes under two minutes.' },
      { num: '04', title: 'Put the phone down', body: 'Kinely saves everything. You\'re done. Get back to dinner. The conversation it started will keep going on its own.' },
    ],
    accent: '#C4541A',
  },
  connected: {
    slug: 'connected',
    chip: 'For families apart',
    name: 'Connected Mode',
    headline: 'Your family answers — from wherever they are.',
    subhead: 'The question arrives on every phone at exactly the same moment. Dad answers from his hotel. The kids answer from the couch. Everyone sees each other\'s answers trickle in. For twenty minutes, you\'re in the same room across 800 miles.',
    steps: [
      { num: '01', title: 'One question, every phone, same moment', body: 'At the scheduled time, a notification goes to every family member simultaneously — no matter where in the world they are.' },
      { num: '02', title: 'Everyone answers in their own way', body: 'Text, voice note, or photo. It takes under two minutes. There\'s no pressure and no deadline — answers appear when they\'re ready.' },
      { num: '03', title: 'Watch the answers arrive in real-time', body: 'As each person submits, their answer appears in everyone else\'s app. You know when Dad answered from Chicago before he calls.' },
      { num: '04', title: 'Everything is saved, forever', body: 'Every answer is timestamped, attributed, and stored. In ten years, you\'ll read what your daughter said her favourite song was when she was fourteen.' },
    ],
    accent: '#5C7A5F',
  },
  spotlight: {
    slug: 'spotlight',
    chip: 'For special days',
    name: 'Spotlight Mode',
    headline: 'Today, every question is about her.',
    subhead: 'It\'s her birthday. Every question today is about her — her favourite memories, her best year, what the family loves most about her. At the end of the day, she has a page full of love letters from the people who matter most.',
    steps: [
      { num: '01', title: 'Choose who the day is for', body: 'Activate Spotlight Mode and select a family member. Their birthday, a graduation, a leaving day — any day worth celebrating.' },
      { num: '02', title: 'Every question is about them', body: 'Kinely switches to a curated set of questions all focused on the person being spotlighted: their best qualities, favourite memories, biggest achievements.' },
      { num: '03', title: 'The family answers openly', body: 'Everyone else in the family answers about them — what they admire, what they\'ll never forget, what they love most. The spotlight person sees it all.' },
      { num: '04', title: 'They end the day with love letters', body: 'Every answer is saved in their profile. Their Spotlight day becomes a dedicated page in the Annual Book — a permanent record of how much they\'re loved.' },
    ],
    accent: '#C4962A',
  },
  grandparents: {
    slug: 'grandparents',
    chip: 'For every generation',
    name: 'Grandparents Mode',
    headline: 'Built so no one gets left behind.',
    subhead: 'Grandma gets the question in extra-large text with a single big button to record her voice. The grandkids hear it played back in her actual voice. The stories she\'s never told — her childhood, her wedding day, her biggest adventure — finally get asked.',
    steps: [
      { num: '01', title: 'Extra-large text, simplified interface', body: 'Grandparents Mode strips back every non-essential element. One question, very large. Two buttons: record or type. Nothing to figure out.' },
      { num: '02', title: 'Voice-first answers', body: 'One tap starts recording. They speak their answer in their own voice, at their own pace. No typing, no autocorrect, no frustration.' },
      { num: '03', title: 'The family hears them', body: 'Voice answers play back in their actual voice — not transcribed text, not a summary. The grandkids hear Grandma\'s laugh when she tells the story about her first job.' },
      { num: '04', title: 'Stories that were almost lost, saved forever', body: 'The questions Kinely asks are the ones no one thought to ask before. Her childhood home. The year everything changed. The person who shaped her most.' },
    ],
    accent: '#7B5230',
  },
  'big-events': {
    slug: 'big-events',
    chip: 'For milestones',
    name: 'Big Events',
    headline: 'Every milestone gets its own chapter.',
    subhead: 'First day of school. Thanksgiving. The last day of summer. Kinely knows when the big moments are coming and prepares a special question set — curated for the day. Every milestone gets its own chapter in your family\'s story.',
    steps: [
      { num: '01', title: 'Kinely knows the big days are coming', body: 'Holidays, school milestones, seasons — Kinely automatically prepares a special question set in advance, no setup required.' },
      { num: '02', title: 'Curated questions for the moment', body: 'Not generic prompts — specific questions designed for the day. Thanksgiving questions about gratitude and family. Last-day-of-school questions about the year just finished.' },
      { num: '03', title: 'The whole family participates', body: 'Big Events questions go to every family member, including grandparents, cousins, and guests joining via Guest Mode. The more voices, the richer the memory.' },
      { num: '04', title: 'A dedicated chapter in your Annual Book', body: 'Each Big Event gets its own titled chapter in your book: "Thanksgiving 2025", "Emma\'s Last Day of Middle School", "The Summer We Got the Dog."' },
    ],
    accent: '#C4962A',
  },
  guest: {
    slug: 'guest',
    chip: 'For guests & gatherings',
    name: 'Guest Mode',
    headline: 'No account needed. Just connection.',
    subhead: 'Someone\'s joining you for the holidays. Send them a guest link — they answer tonight\'s question right alongside your family. Their answer is saved in your archive, marked as "Guest · Sarah · Thanksgiving 2025." No account needed. Just connection.',
    steps: [
      { num: '01', title: 'Generate a guest link in seconds', body: 'From your family\'s app, tap "Invite a guest" and share the link however you like — a text message, a QR code on the table, or just reading it aloud.' },
      { num: '02', title: 'Your guest opens it on their phone', body: 'No download required. The link opens in their browser. They enter their first name — that\'s it. They\'re in.' },
      { num: '03', title: 'They answer alongside your family', body: 'Tonight\'s question appears. They answer it the same way your family does — text or voice. They can see everyone else\'s answers too.' },
      { num: '04', title: 'Their answer is saved in your archive', body: 'Tagged "Guest · Sarah · Thanksgiving 2025" in your archive forever. They can also try Kinely for themselves — their first experience of what it feels like.' },
    ],
    accent: '#4A7FA5',
  },
}

export function generateStaticParams() {
  return Object.keys(modes).map((slug) => ({ slug }))
}

export default async function ModePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const mode = modes[slug as keyof typeof modes]
  if (!mode) notFound()

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="grid md:grid-cols-2"
          style={{ borderBottom: '1px solid rgba(44,36,22,0.07)', minHeight: 600 }}
        >
          {/* Left: text */}
          <div
            className="flex flex-col justify-center px-14 py-20 order-last md:order-first"
            style={{ background: '#F7F2EA', borderRight: '1px solid rgba(44,36,22,0.07)' }}
          >
            <Link
              href="/#modes"
              className="inline-flex items-center gap-2 font-dm-sans font-medium text-[11px] text-charcoal-lt hover:text-charcoal transition-colors mb-10 self-start"
            >
              ← All modes
            </Link>

            <div className="flex items-center gap-3 mb-6 text-ember">
              <div className="w-[18px] h-px bg-ember" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">{mode.chip}</span>
            </div>

            <h1
              className="font-cormorant font-normal text-charcoal mb-6"
              style={{ fontSize: 'clamp(38px, 4vw, 58px)', lineHeight: 1.05, maxWidth: 480 }}
            >
              {mode.headline}
            </h1>

            <p
              className="font-dm-sans font-light text-charcoal-lt mb-10"
              style={{ fontSize: 16, lineHeight: 1.8, maxWidth: 460 }}
            >
              {mode.subhead}
            </p>

            <Link
              href="/pricing"
              className="font-dm-sans font-medium text-[14px] text-warm-white bg-ember hover:bg-ember-light rounded-pill px-8 py-3.5 transition-all duration-200 self-start"
            >
              Start your family&apos;s story →
            </Link>
          </div>

          {/* Right: phone */}
          <div
            className="flex items-center justify-center py-20 px-8 order-first md:order-last"
            style={{
              background: '#2C2416',
              backgroundImage: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(196,84,26,0.12) 0%, transparent 70%)`,
            }}
          >
            <ModePhoneMockup mode={mode.slug} />
          </div>
        </section>

        {/* How it works */}
        <section style={{ background: '#F7F2EA', padding: '100px 56px' }}>
          <div className="max-w-content mx-auto">
            <div className="flex items-center gap-3 mb-12 text-ember">
              <div className="w-[18px] h-px bg-ember" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">How {mode.name} works</span>
            </div>

            <div className="flex flex-col">
              {mode.steps.map(({ num, title, body }) => (
                <div
                  key={num}
                  className="grid md:grid-cols-[100px_1fr] gap-6 md:gap-14"
                  style={{ borderTop: '1px solid rgba(44,36,22,0.08)', paddingTop: 48, paddingBottom: 48 }}
                >
                  <div className="font-cormorant font-normal text-ember" style={{ fontSize: 56, lineHeight: 1, opacity: 0.45 }}>{num}</div>
                  <div>
                    <h2 className="font-cormorant font-medium text-charcoal mb-3" style={{ fontSize: 28 }}>{title}</h2>
                    <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 15, lineHeight: 1.8 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="text-center"
          style={{ background: '#2C2416', padding: '80px 56px', backgroundImage: 'radial-gradient(ellipse 600px 300px at 50% 50%, rgba(196,84,26,0.10) 0%, transparent 65%)' }}
        >
          <p className="font-dm-sans font-light uppercase tracking-[0.08em] mb-6" style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
            {mode.name}
          </p>
          <h2 className="font-cormorant font-normal text-white mb-8" style={{ fontSize: 'clamp(36px, 4vw, 54px)', lineHeight: 1.1, maxWidth: 520, margin: '0 auto 32px' }}>
            Ready to try it with your family?
          </h2>
          <div className="flex flex-col items-center gap-4 mt-8">
            <Link
              href="/pricing"
              className="font-dm-sans font-medium text-[14px] text-warm-white bg-ember hover:bg-ember-light rounded-pill px-10 py-4 transition-all duration-200 hover:-translate-y-px"
            >
              Become a Founding Family →
            </Link>
            <Link
              href="/#modes"
              className="font-dm-sans font-light text-[13px] transition-colors"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              ← Explore all modes
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
