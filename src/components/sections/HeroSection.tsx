"use client"
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import ParticleSphere from '../ui/ParticleSphere'
import HeroVisual from '../ui/HeroVisual'

export default function HeroSection() {
  const t = useTranslations()

  return (
    <section className="relative bg-[#fafafa] min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-brand-border">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* 3D Particle Sphere (might need color adjustment in its own component) */}
      <div className="opacity-40">
        <ParticleSphere />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full z-10 pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <div>
            {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand-primary/20 bg-brand-primary/5 mb-8 backdrop-blur-sm relative overflow-hidden rounded-full shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
          <span className="w-2 h-2 rounded-full bg-[#FF5A00] shadow-[0_0_8px_rgba(255,90,0,0.8)] animate-pulse" />
          <p className="text-brand-primary text-[10px] sm:text-xs font-bold tracking-widest uppercase relative z-10">
            {t('hero.eyebrow')}
          </p>
        </div>

        {/* ALL CAPS headline */}
        <motion.h1 
          className="group cursor-default flex flex-col gap-1 sm:gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Row 1 */}
          <motion.div 
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] uppercase flex items-end"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <span className="text-brand-primary">{t('hero.title1').charAt(0)}</span>
            <span className="text-brand-black/20 transition-colors duration-700 ease-out group-hover:text-brand-black">
              {t('hero.title1').slice(1)}
            </span>
          </motion.div>
          
          {/* Row 2 */}
          <motion.div 
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] uppercase flex items-end"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <span className="text-brand-primary">{t('hero.title2').charAt(0)}</span>
            <span className="text-brand-black/20 transition-colors duration-700 delay-75 ease-out group-hover:text-brand-black">
              {t('hero.title2').slice(1)}
            </span>
            <span className="text-2xl sm:text-3xl lg:text-4xl text-brand-black/20 ml-3 mb-1 font-bold transition-opacity duration-700 group-hover:text-brand-primary">
              {t('hero.title2_sub', { defaultValue: 'FOR' })}
            </span>
          </motion.div>
          
          {/* Row 3 */}
          <motion.div 
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] uppercase flex items-end"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <span className="text-brand-primary">{t('hero.title3').charAt(0)}</span>
            <span className="text-brand-black/20 transition-colors duration-700 delay-150 ease-out group-hover:text-brand-black">
              {t('hero.title3').slice(1)}
            </span>
          </motion.div>
          
          {/* Row 4 */}
          <motion.div 
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] uppercase flex items-end"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <span className="text-brand-primary">{t('hero.title4').charAt(0)}</span>
            <span className="text-brand-black/20 transition-colors duration-700 delay-200 ease-out group-hover:text-brand-black">
              {t('hero.title4').slice(1)}
            </span>
          </motion.div>
        </motion.h1>

        {/* Value prop */}
        <motion.p 
          className="text-brand-muted text-base sm:text-lg mt-8 max-w-xl leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('hero.valueProp')}
        </motion.p>

        {/* CTAs */}
        <motion.div 
          className="flex flex-wrap items-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF5A00] to-[#ff7b00] text-white text-sm font-bold tracking-wide uppercase hover:shadow-[0_4px_25px_rgba(255,90,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 rounded-full"
          >
            {t('hero.cta1')}
          </a>
          <a
            href="#projects"
            className="inline-block px-8 py-4 border-2 border-brand-border text-brand-black text-sm font-bold tracking-wide uppercase hover:border-brand-primary hover:text-brand-primary bg-white hover:bg-[#FFF4ED] hover:-translate-y-0.5 transition-all duration-300 rounded-full shadow-sm"
          >
            {t('hero.cta2')}
          </a>
          </motion.div>
          </div>

          {/* Right Column - Hero Visual */}
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
          
        </div>
      </div>
    </section>
  )
}
