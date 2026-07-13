"use client"
import { useTranslations } from 'next-intl'

function MarqueeRow({ items, reverse = false }: { items: string[], reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-3">
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `marquee ${reverse ? '40s' : '30s'} linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 px-5 py-2 border border-brand-border text-brand-muted text-xs font-semibold uppercase tracking-[0.15em] hover:border-brand-blue hover:text-brand-blue transition-colors duration-200 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function MarqueeTags() {
  const t = useTranslations()
  const row1 = t.raw('marquee.row1') as string[]
  const row2 = t.raw('marquee.row2') as string[]

  return (
    <section className="bg-brand-white border-y border-brand-border py-8 overflow-hidden">
      <MarqueeRow items={row1} />
      <MarqueeRow items={row2} reverse />
    </section>
  )
}
