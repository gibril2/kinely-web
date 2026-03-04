import { Flame, BookOpen } from 'lucide-react'

interface FloatingPillProps {
  position: 'top-right' | 'bottom-left'
  icon: 'flame' | 'book'
  main: string
  sub: string
}

const icons = {
  flame: <Flame size={14} className="text-ember" />,
  book: <BookOpen size={14} className="text-charcoal-mid" />,
}

const positions = {
  'top-right': 'top-[60px] -right-[90px]',
  'bottom-left': 'bottom-[80px] -left-[90px]',
}

export function FloatingPill({ position, icon, main, sub }: FloatingPillProps) {
  return (
    <div
      className={`absolute ${positions[position]} bg-warm-white rounded-chip shadow-[0_8px_32px_rgba(44,36,22,0.16)] px-3 py-2.5 flex items-center gap-2.5 z-10 min-w-[160px]`}
    >
      <div className="w-[30px] h-[30px] rounded-[8px] bg-ember-pale flex items-center justify-center flex-shrink-0">
        {icons[icon]}
      </div>
      <div>
        <div className="font-dm-sans font-medium text-[12px] text-charcoal leading-none mb-0.5">
          {main}
        </div>
        <div className="font-dm-sans font-light text-[11px] text-charcoal-lt leading-none">
          {sub}
        </div>
      </div>
    </div>
  )
}
