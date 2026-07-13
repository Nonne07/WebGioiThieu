"use client"

import { useEffect } from 'react'
import { ArrowUpRight, Crosshair, Lightbulb, ShieldCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import ContactSection from '@/components/sections/ContactSection'

export default function AboutPage() {
  const t = useTranslations()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <main className="pt-32 pb-24">
        {/* ── Header Section ────────────────────────────────────────────── */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            
            {/* Left */}
            <div className="lg:col-span-5 flex flex-col pt-4 relative">
              {/* Decorative Geometric Elements */}
              <div className="hidden sm:block absolute -top-8 -left-6 w-56 h-40 border-2 border-brand-blue/40 z-0 pointer-events-none backdrop-blur-[2px]" />
              <div className="hidden sm:block absolute top-12 left-12 w-64 h-48 border border-white/20 z-0 pointer-events-none bg-white/[0.01]" />
              
              <h1 className="relative z-10 text-4xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[0.9]">
                {t('aboutPage.title1')} <br />
                <span className="text-white/20">{t('aboutPage.title2')}</span>
              </h1>
            </div>

            {/* Right */}
            <div className="lg:col-span-7 flex flex-col gap-6 relative z-10 pt-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white/80 uppercase tracking-tight leading-snug max-w-xl">
                {t('aboutPage.subtitle')}
              </h2>
              <p className="text-sm text-white/50 leading-relaxed max-w-lg">
                {t('aboutPage.description')}
              </p>
            </div>

          </div>
        </section>

        {/* ── Image Banner Section ────────────────────────────────────── */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <div className="relative bg-white/5 aspect-[21/9] flex items-end p-8 sm:p-12 border border-white/10 rounded-sm overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <img 
                src="/handshake.png" 
                alt="Corporate Collaboration" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent z-10" />
            <h2 className="relative z-20 text-3xl sm:text-5xl md:text-6xl font-black text-white/90 uppercase tracking-tight leading-[1] max-w-3xl">
              {t('aboutPage.banner.title')}
            </h2>
          </div>
          
          <div className="flex justify-end mt-8">
            <p className="text-xs text-white/50 leading-relaxed max-w-sm text-right">
              {t('aboutPage.banner.description')}
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="px-6 max-w-7xl mx-auto">
          <div className="w-full h-px bg-white/20 mb-32" />
        </div>

        {/* ── Core Value Section ──────────────────────────────────────── */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                  {t('aboutPage.coreValue.title')}
                </h2>
                <p className="text-xs font-bold text-white/60 leading-relaxed max-w-sm uppercase tracking-wide">
                  {t('aboutPage.coreValue.subtitle')}
                </p>
              </div>

              <div className="w-full aspect-[4/5] bg-white/5 border border-white/10 mt-8 relative overflow-hidden flex items-center justify-center group">
                <img 
                  src="/handshake.png" 
                  alt="Partnership" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay z-10 pointer-events-none" />
              </div>
            </div>

            {/* Right: Values List */}
            <div className="lg:col-span-7 flex flex-col gap-16 pt-2">
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <ArrowUpRight size={16} className="text-brand-blue" />
                  <h3 className="text-sm font-black text-white uppercase tracking-tight">{t('aboutPage.coreValue.values.v1.title')}</h3>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-7 max-w-md">
                  {t('aboutPage.coreValue.values.v1.desc')}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Crosshair size={16} className="text-brand-blue" />
                  <h3 className="text-sm font-black text-white uppercase tracking-tight">{t('aboutPage.coreValue.values.v2.title')}</h3>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-7 max-w-md">
                  {t('aboutPage.coreValue.values.v2.desc')}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Lightbulb size={16} className="text-brand-blue" />
                  <h3 className="text-sm font-black text-white uppercase tracking-tight">{t('aboutPage.coreValue.values.v3.title')}</h3>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-7 max-w-md">
                  {t('aboutPage.coreValue.values.v3.desc')}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} className="text-brand-blue" />
                  <h3 className="text-sm font-black text-white uppercase tracking-tight">{t('aboutPage.coreValue.values.v4.title')}</h3>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-7 max-w-md">
                  {t('aboutPage.coreValue.values.v4.desc')}
                </p>
              </div>

            </div>

          </div>
        </section>
      </main>

      <ContactSection />
    </>
  )
}
