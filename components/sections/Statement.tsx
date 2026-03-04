export function Statement() {
  return (
    <section
      className="grid md:grid-cols-2 max-w-content mx-auto"
      style={{
        gap: 80,
        padding: '100px 56px',
        borderTop: '1px solid rgba(44,36,22,0.07)',
      }}
    >
      {/* Left: pull quote */}
      <div className="flex items-center">
        <h2
          className="font-cormorant font-normal text-charcoal"
          style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', lineHeight: 1.2 }}
        >
          The apps designed to connect us
          <br />
          were built to{' '}
          <em className="italic text-ember">distract</em> us.
          <br />
          Kinely was built to do one thing.
        </h2>
      </div>

      {/* Right: body text */}
      <div className="flex flex-col justify-center gap-[18px]">
        {[
          'Every day, a single question lands on every family member\'s phone at the same moment. You answer. They answer. Thirty seconds later you know something new about each other — or remembered something you\'d forgotten.',
          'Every answer is saved. Every voice memo transcribed. Every moment archived. At the end of the year, it becomes a hardcover book delivered to your door. Your family\'s year, in full.',
          'No likes. No followers. No feed. No algorithm. Just your family.',
        ].map((text, i) => (
          <p
            key={i}
            className={`font-dm-sans text-charcoal-lt ${i === 2 ? 'font-normal' : 'font-light'}`}
            style={{ fontSize: 16, lineHeight: 1.75 }}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}
