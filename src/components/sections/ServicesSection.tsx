"use client"
import { Globe, Zap, ThumbsUp } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { services } from '../../data/services'
import { serviceDetails } from '../../data/serviceDetails'

const icons = [Globe, Zap, ThumbsUp]

export default function ServicesSection() {
  const t = useTranslations()

  return (
    <section id="services" className="bg-brand-black py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-brand-blue text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            {t('servicesSection.eyebrow')}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-white uppercase leading-tight tracking-tight max-w-xl">
            {t('servicesSection.title')}
          </h2>
        </motion.div>

        {/* Icon grid — Jamstack style */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {services.map((service, i) => {
            const Icon = icons[i]
            const slug = serviceDetails.find(d => d.id === service.id)?.slug ?? '#'
            const tags = t.raw(`services.${service.id}.tags`) as string[]
            
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <Link href={`/services/${slug}`} className="group flex flex-col gap-5 p-8 bg-brand-black hover:bg-white/5 transition-colors duration-200 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-brand-blue transition-colors duration-200">
                    <Icon size={20} className="text-white/40 group-hover:text-brand-blue transition-colors duration-200" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-black text-brand-white uppercase tracking-tight leading-snug">
                    {t(`services.${service.id}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed flex-1">
                    {t(`services.${service.id}.description`)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5 mt-auto">
                    {tags.map((tag: string) => (
                      <span key={tag} className="text-white/25 text-xs">
                        {tag} ·
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
