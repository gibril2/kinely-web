import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <article className="max-w-content mx-auto px-6 sm:px-12 lg:px-20 pt-32 pb-24">

          {/* Page title */}
          <p className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.15em] text-charcoal-lt mb-20">
            About Kinely
          </p>

          {/* ── Why this exists ── */}
          <section className="mb-24">
            <p className="font-dm-sans font-medium text-[10px] uppercase tracking-[0.18em] text-charcoal-lt/50 mb-10">
              Why this exists
            </p>

            <div className="max-w-[62ch]">
              {/* Lede — larger Cormorant */}
              <p className="font-cormorant text-charcoal text-[22px] sm:text-[26px] leading-[1.55] mb-5">
                You probably don&rsquo;t know your father&rsquo;s version of his twenties. Or what your mother was afraid of before she had kids. Or what your closest friend actually thought about the year you both just lived through.
              </p>
              <p className="font-cormorant text-charcoal text-[22px] sm:text-[26px] leading-[1.55] mb-5">
                Not because you don&rsquo;t care. Because you never asked. Because there was always more time.
              </p>
              <p className="font-cormorant text-charcoal text-[22px] sm:text-[26px] leading-[1.55] mt-10">
                Until there wasn&rsquo;t.
              </p>
            </div>
          </section>

          <hr className="border-charcoal/10 mb-24" />

          {/* ── The problem ── */}
          <section className="mb-24">
            <p className="font-dm-sans font-medium text-[10px] uppercase tracking-[0.18em] text-charcoal-lt/50 mb-10">
              The problem
            </p>

            <div className="max-w-[62ch]">
              <p className="font-dm-sans font-light text-charcoal-lt text-[16px] leading-[1.85] mb-5">
                Ordinary life is loud. Dinner, group chats, the thousand small things. Real conversations need someone to start them, and nobody does.
              </p>
              <p className="font-dm-sans font-light text-charcoal-lt text-[16px] leading-[1.85]">
                So the years pass. The questions stay unasked. And the people you love most stay, in some ways, unknown.
              </p>
            </div>
          </section>

          <hr className="border-charcoal/10 mb-24" />

          {/* ── What it does ── */}
          <section className="mb-24">
            <p className="font-dm-sans font-medium text-[10px] uppercase tracking-[0.18em] text-charcoal-lt/50 mb-10">
              What it does
            </p>

            <div className="max-w-[62ch]">
              <p className="font-dm-sans font-light text-charcoal-lt text-[16px] leading-[1.85] mb-5">
                One question a day. Sent to everyone at once. You answer on your own, then see what your family said.
              </p>
              <p className="font-dm-sans font-light text-charcoal-lt text-[16px] leading-[1.85]">
                Two minutes. An archive that builds itself.
              </p>
            </div>
          </section>

          <hr className="border-charcoal/10 mb-24" />

          {/* ── The Annual Book ── */}
          <section className="mb-24">
            <p className="font-dm-sans font-medium text-[10px] uppercase tracking-[0.18em] text-charcoal-lt/50 mb-10">
              The Annual Book
            </p>

            <div className="max-w-[62ch]">
              <p className="font-dm-sans font-light text-charcoal-lt text-[16px] leading-[1.85] mb-5">
                At the end of each year, every answer becomes a hardcover book. Your family&rsquo;s name on the cover. Your actual words inside.
              </p>
              <p className="font-dm-sans font-light text-charcoal-lt text-[16px] leading-[1.85]">
                Not a highlight reel. The real thing&nbsp;&mdash; what everyone thought, in the year you actually lived it.
              </p>
            </div>
          </section>

          <hr className="border-charcoal/10 mb-24" />

          {/* ── Who's building this ── */}
          <section className="mb-8">
            <p className="font-dm-sans font-medium text-[10px] uppercase tracking-[0.18em] text-charcoal-lt/50 mb-10">
              Who&rsquo;s building this
            </p>

            <div className="max-w-[62ch]">
              <p className="font-dm-sans font-light text-charcoal-lt text-[16px] leading-[1.85] mb-5">
                One founder. People who have lost people and thought about this longer than we&rsquo;d like to admit.
              </p>
              <p className="font-dm-sans font-light text-charcoal-lt text-[16px] leading-[1.85] mb-10">
                We read every message. We respond to every email.
              </p>
              <p className="font-cormorant italic text-charcoal-mid text-[20px] leading-[1.5]">
                If this resonates, we&rsquo;d be glad to have your family.
              </p>
            </div>
          </section>

        </article>
      </main>
      <Footer />
    </>
  )
}
