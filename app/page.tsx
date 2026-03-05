import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Statement } from '@/components/sections/Statement'
import { Photography } from '@/components/sections/Photography'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { GrandparentsFeature } from '@/components/sections/GrandparentsFeature'
import { DailyEntry } from '@/components/sections/DailyEntry'
import { Modes } from '@/components/sections/Modes'
import { PhotographyBreak } from '@/components/sections/PhotographyBreak'
import { Archive } from '@/components/sections/Archive'
import { AnnualBook } from '@/components/sections/AnnualBook'
import { Testimonials } from '@/components/sections/Testimonials'
import { Closing } from '@/components/sections/Closing'
import { Objections } from '@/components/sections/Objections'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <Photography />
        <HowItWorks />
        <GrandparentsFeature />
        <DailyEntry />
        <Modes />
        <PhotographyBreak />
        <Archive />
        <AnnualBook />
        <Testimonials />
        <Closing />
        <Objections />
      </main>
      <Footer />
    </>
  )
}
