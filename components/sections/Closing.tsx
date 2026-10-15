import { GetTheApp } from '../ui/GetTheApp'
import { RoomBackdrop } from '../ui/RoomBackdrop'

export function Closing({
  title = 'Tomorrow’s question is already waiting.',
  body = 'Start a circle today and invite the people you love. It’s $6.99 a month for your whole circle.',
}: {
  title?: string
  body?: string
}) {
  return (
    <section id="join" className="relative bg-lamp text-night-text px-4 sm:px-8 py-28 md:py-40 overflow-hidden">
      <RoomBackdrop position="0% 30%" strength={0.55} />
      <div className="relative max-w-content mx-auto">
        <h2
          className="font-cormorant font-normal max-w-[16ch] mb-8"
          style={{ fontSize: 'clamp(2.75rem, 6.4vw, 5.5rem)', lineHeight: 0.98, letterSpacing: '-0.015em' }}
        >
          {title}
        </h2>
        <p className="font-dm-sans font-light text-[17px] leading-[1.7] text-night-text/75 max-w-[46ch] mb-10">{body}</p>
        <div className="max-w-[460px]">
          <GetTheApp dark />
        </div>
      </div>
    </section>
  )
}
