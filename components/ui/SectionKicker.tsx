interface SectionKickerProps {
  label: string
  light?: boolean
}

export function SectionKicker({ label, light = false }: SectionKickerProps) {
  return (
    <div
      className={`flex items-center gap-3 mb-12 ${
        light ? 'text-ember-light' : 'text-ember'
      }`}
    >
      <div
        className={`w-[18px] h-px ${light ? 'bg-ember-light' : 'bg-ember'}`}
      />
      <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">
        {label}
      </span>
    </div>
  )
}
