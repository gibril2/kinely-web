interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  muted?: boolean
}

const sizes = {
  sm: 'text-[22px]',
  md: 'text-[26px]',
  lg: 'text-[32px]',
}

export function KinelyLogo({ size = 'md', muted = false }: LogoProps) {
  return (
    <span
      className={`font-cormorant font-medium ${sizes[size]} tracking-[0.02em] ${
        muted ? 'text-white/35' : 'text-charcoal'
      }`}
    >
      kin<span className="text-ember">e</span>ly
    </span>
  )
}
