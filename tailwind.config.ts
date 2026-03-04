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
