export function Photography() {
  const stats = [
    { num: '4,200+', label: 'families on the waitlist' },
    { num: '365', label: 'questions curated each year' },
    { num: '3 min', label: 'average daily time to answer' },
    { num: '1', label: 'question that changes everything' },
  ]

  return (
    <section style={{ background: '#2C2416', padding: '56px 56px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map(({ num, label }, i) => (
            <div
              key={num}
              className="text-center"
              style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingLeft: i > 0 ? 32 : 0 }}
            >
              <div className="font-cormorant font-normal text-warm-white" style={{ fontSize: 44, lineHeight: 1 }}>{num}</div>
              <div className="font-dm-sans font-light mt-2" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
