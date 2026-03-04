const testimonials = [
  {
    quote: 'We used to sit in silence at dinner. Now our son asks what the question is going to be before we even sit down.',
    name: 'Sarah M.',
    role: 'mother of three',
    location: 'Portland, Oregon',
  },
  {
    quote: "I travel constantly for work. The fifteen minutes we spend on Kinely's question every night is the only time I feel like I'm actually home.",
    name: 'David K.',
    role: 'father',
    location: 'Chicago, Illinois',
  },
  {
    quote: "My mother answered a question about her childhood last month. I printed it out. I've never heard that story before and she's 78.",
    name: 'Jennifer R.',
    role: 'daughter and mother',
    location: 'Nashville, Tennessee',
  },
]

export function Testimonials() {
  return (
    <section
      style={{
        background: '#F7F2EA',
        padding: '80px 56px',
        borderTop: '1px solid rgba(44,36,22,0.07)',
      }}
    >
      <div className="max-w-[960px] mx-auto">
        <h2
          className="font-cormorant font-normal italic text-charcoal text-center mb-12"
          style={{ fontSize: 36 }}
        >
          What families say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, role, location }) => (
            <div
              key={name}
              style={{ borderTop: '2px solid rgba(196,84,26,0.2)', paddingTop: 28 }}
            >
              <p
                className="font-cormorant font-normal italic text-charcoal mb-4"
                style={{ fontSize: 20, lineHeight: 1.5 }}
              >
                &ldquo;{quote}&rdquo;
              </p>
              <p
                className="font-dm-sans font-normal text-charcoal-lt"
                style={{ fontSize: 13, marginBottom: 4 }}
              >
                — {name}, {role}
              </p>
              <p
                className="font-dm-sans font-light text-charcoal-lt tracking-[0.04em]"
                style={{ fontSize: 12 }}
              >
                {location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
