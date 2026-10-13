import Image from 'next/image'
import onDarkSrc from '@/public/brand/wordmark-on-dark.png'
import onLightSrc from '@/public/brand/wordmark-on-light.png'

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  // Dark backgrounds get the cream speech bubble (brand "dark mode" mark);
  // light backgrounds need the ember bubble or it disappears into the cream.
  onDark?: boolean
}

// Rendered height in px; width follows the artwork's aspect ratio.
const heights = {
  xs: 18, // phone-mockup top bars
  sm: 28,
  md: 34,
  lg: 48,
}

export function KinelyLogo({ size = 'md', onDark = false }: LogoProps) {
  const src = onDark ? onDarkSrc : onLightSrc
  const height = heights[size]
  return (
    <Image
      src={src}
      alt="Kinely"
      height={height}
      width={Math.round((height * src.width) / src.height)}
      priority={size === 'md' || size === 'lg'}
    />
  )
}
