import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F2EA',
        'cream-dark': '#EDE6D6',
        'cream-mid': '#F2EBE0',
        ember: '#C4541A',
        'ember-light': '#E8784A',
        'ember-pale': '#F5E6DC',
        sage: '#5C7A5F',
        charcoal: '#2C2416',
        'charcoal-mid': '#4A3F2F',
        'charcoal-lt': '#7A6E5E',
        gold: '#C4962A',
        'warm-white': '#FDFAF5',
        // The app's dark Today screen (apps/mobile/constants/colors-palette.ts darkColors).
        // Used where the site shows the product itself, so it matches the phone.
        night: '#1A1A1A',
        'night-surface': '#242424',
        'night-text': '#F5EDE0',
        'night-muted': '#8C8884',
        'app-accent': '#B5622A',
        // Warm surfaces pulled from the hero photo (lamp-lit room, linen, terracotta),
        // so sections below the fold feel like the same room rather than a blank page.
        lamp: '#17120E',
        linen: '#EEE3D2',
        paper: '#FBF6EE',
        'ember-deep': '#86381A',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        'dm-sans': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '24px',
        pill: '100px',
        chip: '14px',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
