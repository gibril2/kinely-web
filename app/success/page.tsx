'use client'

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 py-10 font-dm-sans text-center"
      style={{ backgroundColor: '#0D0D0D' }}>

      <div className="text-[64px] mb-6">&#10022;</div>

      <h1 className="font-cormorant text-[28px] font-semibold mb-3"
        style={{ color: '#F5F0E8' }}>
        Welcome to Kinely
      </h1>

      <p className="text-[16px] max-w-[320px] leading-relaxed mb-10"
        style={{ color: 'rgba(245,240,232,0.55)' }}>
        Your family circle is now active.
        Open the Kinely app to start answering
        today&apos;s question together.
      </p>

      <a
        href="kinely://today"
        className="inline-block rounded-xl px-8 py-3.5 text-[16px] font-semibold no-underline"
        style={{
          backgroundColor: '#C4541A',
          color: 'white',
        }}
      >
        Open Kinely
      </a>

      <p className="text-[13px] mt-6" style={{ color: 'rgba(245,240,232,0.25)' }}>
        A confirmation email is on its way to you.
      </p>
    </main>
  )
}
