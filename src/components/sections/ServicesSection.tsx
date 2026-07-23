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
    <section id="services" className="bg-[#f5f5f7] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-brand-primary text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-brand-primary"></span>
            {t('servicesSection.eyebrow')}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-black uppercase leading-tight tracking-tight max-w-xl">
            {t('servicesSection.title')}
          </h2>
        </motion.div>

        {/* Icon grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
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
                className="h-full"
              >
                <Link href={`/services/${slug}`} className="group flex flex-col gap-6 p-10 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-border hover:border-brand-primary hover:shadow-[0_8px_30px_rgba(255,90,0,0.12)] hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#FFF4ED] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-primary transition-all duration-300 shadow-sm">
                    <Icon size={26} className="text-brand-primary group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-brand-black uppercase tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                    {t(`services.${service.id}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-muted text-sm leading-relaxed flex-1 font-medium">
                    {t(`services.${service.id}.description`)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-border mt-auto">
                    {tags.map((tag: string) => (
                      <span key={tag} className="text-brand-muted/70 text-xs font-semibold bg-[#f5f5f7] px-3 py-1 rounded-full group-hover:bg-[#FFF4ED] group-hover:text-brand-primary transition-colors">
                        {tag}
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
