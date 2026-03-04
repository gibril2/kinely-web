export function PhotographyBreak() {
  return (
    <section
      className="flex items-center justify-center text-center px-8 py-24"
      style={{
        background: '#EDE6D6',
        backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(196,84,26,0.06) 0%, transparent 70%)`,
        borderTop: '1px solid rgba(44,36,22,0.07)',
        borderBottom: '1px solid rgba(44,36,22,0.07)',
      }}
    >
      <div style={{ maxWidth: 680 }}>
        <p className="font-dm-sans font-light text-charcoal-lt uppercase tracking-[0.08em] mb-6" style={{ fontSize: 11 }}>
          For the parent 800 miles from home
        </p>
        <blockquote
          className="font-cormorant font-normal italic text-charcoal"
          style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.2 }}
        >
          &ldquo;I travel constantly for work. The fifteen minutes we spend on Kinely&apos;s question every night is the only time I feel like I&apos;m actually home.&rdquo;
        </blockquote>
        <p className="font-dm-sans font-light text-charcoal-lt mt-6" style={{ fontSize: 13 }}>
          — David K., father · Chicago, Illinois
        </p>
      </div>
    </section>
  )
}
