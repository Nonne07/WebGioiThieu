"use client"
import { useTranslations } from 'next-intl'
import { testimonials } from '../../data/testimonials'

export default function TestimonialsSection() {
  const t = useTranslations()

  return (
    <section className="bg-brand-black py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-brand-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            {t('testimonials.eyebrow')}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-white uppercase tracking-tight leading-tight">
            {t('testimonials.title1')}<br />{t('testimonials.title2')}
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {testimonials.map((tItem) => (
            <div key={tItem.id} className="bg-brand-black p-8 flex flex-col gap-6 hover:bg-white/5 transition-colors duration-200">

              {/* Quote mark */}
              <span className="text-brand-primary text-5xl font-black leading-none select-none">"</span>

              {/* Quote */}
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {t(`testimonials.quotes.${tItem.id}.quote`, { defaultValue: tItem.quote })}
              </p>

              {/* Attribution */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-brand-white text-sm font-bold">{tItem.name}</p>
                <p className="text-white/40 text-xs mt-1">{tItem.title} · {tItem.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
