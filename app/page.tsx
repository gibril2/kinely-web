/* Hallmark · macrostructure: Marquee Hero (hero = the app's Today screen) · genre: editorial
 * theme: custom (existing kinely tokens + app night palette) · paper: cream #F7F2EA · accent: ember
 * display: Cormorant Garamond (keepsake voice) + DM Sans 600 (app voice) · body: DM Sans
 * sections: Today hero · Answer-first demo (tap to reveal) · Reveal · Voices · Archive · Fair questions · Close (C2 form)
 * nav: N10-style dark→cream on scroll · footer: existing minimal · enrichment: real-UI fragments, no phone chrome
 * motion: none added (site spec forbids scroll/intersection animation)
 */
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { AnswerFirst } from '@/components/sections/AnswerFirst'
import { DemoAnswerProvider } from '@/components/ui/DemoAnswer'
import { Reveal } from '@/components/sections/Reveal'
import { Voices } from '@/components/sections/Voices'
import { Archive } from '@/components/sections/Archive'
import { Objections } from '@/components/sections/Objections'
import { Closing } from '@/components/sections/Closing'

export default function HomePage() {
  return (
    <>
      <Navbar overDark clearOverDark />
      <main>
        <Hero />
        <DemoAnswerProvider>
          <AnswerFirst />
          <Reveal />
        </DemoAnswerProvider>
        <Voices />
        <Archive />
        <Objections />
        <Closing />
      </main>
      <Footer />
    </>
  )
}
