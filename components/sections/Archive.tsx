import { SectionKicker } from '../ui/SectionKicker'

const avatarColors: Record<string, string> = {
  M: '#7B5230',
  E: '#C4541A',
  J: '#C4962A',
}

function ArchiveAvatar({ initial }: { initial: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center text-warm-white rounded-full"
      style={{
        width: 22,
        height: 22,
        background: avatarColors[initial],
        fontSize: 9,
        fontFamily: 'var(--font-dm-sans)',
        fontWeight: 500,
      }}
    >
      {initial}
    </div>
  )
}

export function Archive() {
  return (
    <section
      id="archive"
      className="max-w-content mx-auto"
      style={{
        padding: '100px 56px',
        borderTop: '1px solid rgba(44,36,22,0.07)',
      }}
    >
      <div className="grid md:grid-cols-2 items-center" style={{ gap: 80 }}>
        {/* Left */}
        <div>
          <SectionKicker label="The archive" />

          <div className="relative">
            {/* Decorative quote mark */}
            <span
              className="absolute font-cormorant select-none"
              style={{
                fontSize: 120,
                color: 'rgba(196,84,26,0.12)',
                top: -40,
                left: -20,
                lineHeight: 1,
                fontFamily: 'var(--font-cormorant)',
              }}
            >
              &ldquo;
            </span>
            <blockquote
              className="relative font-cormorant font-normal italic text-charcoal"
              style={{
                fontSize: 'clamp(28px, 3vw, 42px)',
                lineHeight: 1.25,
                paddingLeft: 12,
              }}
            >
              We forget who we were.
              <br />
              Kinely makes sure your
              <br />
              family never does.
            </blockquote>
          </div>

          <p
            className="font-dm-sans font-light text-charcoal-lt mt-7"
            style={{ fontSize: 15, lineHeight: 1.65, maxWidth: 380 }}
          >
            Every answer is saved forever — searchable, filterable, beautifully
            organized. Type &ldquo;embarrassing&rdquo; and surface every answer your family
            ever gave to that topic. Open the archive in five years and hear your
            child&apos;s voice at age nine. The Annual Book is built from everything
            you share all year.
          </p>
        </div>

        {/* Right: Archive preview card */}
        <div
          style={{
            background: '#2C2416',
            borderRadius: 24,
            padding: 36,
          }}
        >
          {/* Entry 1 */}
          <div className="mb-6">
            <p
              className="font-dm-sans uppercase tracking-[0.08em] mb-3"
              style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)' }}
            >
              March 4, 2024 · One year ago
            </p>
            <p
              className="font-cormorant italic mb-4"
              style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}
            >
              &ldquo;What&apos;s something you&apos;re secretly really good at?&rdquo;
            </p>
            <div className="flex flex-col gap-2">
              {[
                { initial: 'M', name: 'Mom', text: 'Parallel parking. Nobody in this family knows how good I am.' },
                { initial: 'E', name: 'Emma · was 13', text: 'Memorizing song lyrics after one listen' },
              ].map(({ initial, name, text }) => (
                <div
                  key={name}
                  className="flex items-start gap-3"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: 10,
                    padding: '9px 12px',
                  }}
                >
                  <ArchiveAvatar initial={initial} />
                  <div>
                    <p className="font-dm-sans font-medium text-white/60" style={{ fontSize: 10, marginBottom: 2 }}>
                      {name}
                    </p>
                    <p className="font-dm-sans font-light text-white/45" style={{ fontSize: 12, lineHeight: 1.5 }}>
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 24 }} />

          {/* Entry 2 */}
          <div>
            <p
              className="font-dm-sans uppercase tracking-[0.08em] mb-3"
              style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)' }}
            >
              December 25, 2023
            </p>
            <p
              className="font-cormorant italic mb-4"
              style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}
            >
              &ldquo;What was the best part of this year?&rdquo;
            </p>
            <div
              className="flex items-start gap-3"
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderRadius: 10,
                padding: '9px 12px',
              }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center text-warm-white rounded-full"
                style={{
                  width: 22,
                  height: 22,
                  background: '#C4962A',
                  fontSize: 9,
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 500,
                }}
              >
                J
              </div>
              <div>
                <p className="font-dm-sans font-medium text-white/60" style={{ fontSize: 10, marginBottom: 2 }}>
                  Jake · was 8
                </p>
                <p className="font-dm-sans font-light text-white/45" style={{ fontSize: 12, lineHeight: 1.5 }}>
                  When dad came home early and we watched movies all day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
