import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'nav'
  children: React.ReactNode
  className?: string
  size?: 'default' | 'lg'
}

export function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  size = 'default',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-dm-sans font-medium rounded-pill transition-all duration-200 cursor-pointer border-none'

  const variants = {
    primary:
      'bg-ember text-warm-white hover:bg-ember-light hover:-translate-y-px',
    secondary:
      'bg-cream-dark text-charcoal hover:bg-ember-pale hover:text-ember',
    nav: 'bg-charcoal text-warm-white hover:bg-ember',
  }

  const sizes = {
    default: 'px-8 py-3.5 text-[14px]',
    lg: 'px-10 py-4 text-[16px]',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
