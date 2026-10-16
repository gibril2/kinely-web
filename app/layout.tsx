import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '../styles/globals.css'
import { ModeTransitionProvider } from '@/lib/mode-transition'
import { BookTransitionProvider } from '@/lib/book-transition'
import { ModeTransitionOverlay } from '@/components/ui/ModeTransitionOverlay'
import { BookTransitionOverlay } from '@/components/ui/BookTransitionOverlay'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kinely.app'),
  title: 'Kinely - A little closer, every day.',
  description: 'Kinely is a private app that asks the people closest to you one question a day. Everyone answers in words, voice, or photos, and every answer is kept.',
  openGraph: {
    title: 'Kinely - A little closer, every day.',
    description: 'One question a day for the people closest to you. Everyone answers, and every answer is kept.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kinely - A little closer, every day.',
    description: 'One question a day for the people closest to you. Everyone answers, and every answer is kept.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} font-dm-sans`}>
        <ModeTransitionProvider>
          <BookTransitionProvider>
            {children}
            <ModeTransitionOverlay />
            <BookTransitionOverlay />
          </BookTransitionProvider>
        </ModeTransitionProvider>
      </body>
    </html>
  )
}
