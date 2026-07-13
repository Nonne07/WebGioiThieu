"use client"
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import ParticleSphere from '../ui/ParticleSphere'
import HeroVisual from '../ui/HeroVisual'



export default function HeroSection() {
  const t = useTranslations()

  return (
    <section className="relative bg-brand-black min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-white/5">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* 3D Particle Sphere */}
      <ParticleSphere />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full z-10 pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <div>
            {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand-blue/30 bg-brand-blue/5 mb-8 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
          <p className="text-brand-blue text-[10px] sm:text-xs font-bold tracking-widest uppercase relative z-10">
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
            <span className="text-brand-blue">{t('hero.title1').charAt(0)}</span>
            <span className="text-brand-white/30 transition-colors duration-700 ease-out group-hover:text-brand-white">
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
            <span className="text-brand-blue">{t('hero.title2').charAt(0)}</span>
            <span className="text-brand-white/30 transition-colors duration-700 delay-75 ease-out group-hover:text-brand-white">
              {t('hero.title2').slice(1)}
            </span>
            <span className="text-2xl sm:text-3xl lg:text-4xl text-brand-white/30 ml-3 mb-1 font-bold transition-opacity duration-700 group-hover:text-brand-white/70">
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
            <span className="text-brand-blue">{t('hero.title3').charAt(0)}</span>
            <span className="text-brand-white/30 transition-colors duration-700 delay-150 ease-out group-hover:text-brand-white">
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
            <span className="text-brand-blue">{t('hero.title4').charAt(0)}</span>
            <span className="text-brand-white/30 transition-colors duration-700 delay-200 ease-out group-hover:text-brand-white">
              {t('hero.title4').slice(1)}
            </span>
          </motion.div>
        </motion.h1>

        {/* Value prop */}
        <motion.p 
          className="text-white/50 text-base sm:text-lg mt-8 max-w-xl leading-relaxed"
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
            className="inline-block px-7 py-3.5 bg-brand-blue text-brand-white text-sm font-semibold tracking-wide hover:bg-brand-blue-hover transition-colors duration-200"
          >
            {t('hero.cta1')}
          </a>
          <a
            href="#projects"
            className="inline-block px-7 py-3.5 border border-white/20 text-white/70 text-sm font-semibold tracking-wide hover:border-white/50 hover:text-white transition-colors duration-200"
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
