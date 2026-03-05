import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '../styles/globals.css'
import { ModeTransitionProvider } from '@/lib/mode-transition'
import { ModeTransitionOverlay } from '@/components/ui/ModeTransitionOverlay'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kinely.com'),
  title: 'Kinely — Your Family\'s Story, Every Day',
  description: 'One question. Every day. Every answer saved forever. Kinely keeps your family connected across every distance and every season of life. Join our founding families.',
  openGraph: {
    title: 'Kinely — Your Family\'s Story, Every Day',
    description: 'One question. Every day. Every answer saved forever.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kinely — Your Family\'s Story, Every Day',
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
          {children}
          <ModeTransitionOverlay />
        </ModeTransitionProvider>
      </body>
    </html>
  )
}
