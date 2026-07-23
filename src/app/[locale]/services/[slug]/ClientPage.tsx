"use client"

import { useState, useEffect, use } from 'react'
import { Link } from '@/i18n/routing'
import {
  Layers, Zap, Smartphone, Settings, RefreshCw, Database,
  Link as LinkIcon, BarChart2, PenTool, Calendar,
  MessageCircle, TrendingUp, ChevronDown, ChevronUp, ChevronRight
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { serviceDetails } from '@/data/serviceDetails'
import ContactSection from '@/components/sections/ContactSection'

type IconName = 'Layers'|'Zap'|'Smartphone'|'Settings'|'RefreshCw'|'Database'|'Link'|'BarChart2'|'PenTool'|'Calendar'|'MessageCircle'|'TrendingUp'

const iconMap: Record<IconName, React.ElementType> = {
  Layers, Zap, Smartphone, Settings, RefreshCw,
  Database, Link: LinkIcon, BarChart2, PenTool,
  Calendar, MessageCircle, TrendingUp,
}

function FAQ({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-brand-border">
      <button
        onClick={() => setOpen(p => !p)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-sm font-bold text-brand-black uppercase tracking-tight">{question}</span>
        {open ? <ChevronUp size={16} className="text-brand-primary flex-shrink-0" /> : <ChevronDown size={16} className="text-brand-muted flex-shrink-0" />}
      </button>
      {open && (
        <p className="text-sm text-brand-muted leading-relaxed pb-5">{answer}</p>
      )}
    </div>
  )
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const t = useTranslations()
  const service = serviceDetails.find(s => s.slug === slug)
  const [activeStep, setActiveStep] = useState('01')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-brand-muted mb-4">{t('servicePage.notFound')}</p>
          <Link href="/" className="text-brand-primary text-sm font-semibold hover:underline">{t('servicePage.backHome')}</Link>
        </div>
      </div>
    )
  }

  const activeProcess = service.process.find(p => p.number === activeStep) ?? service.process[0]

  return (
    <>
      {/* ── Hero (Dark, Left Aligned) ─────────────────────────────────────── */}
      <section className="bg-brand-black pt-40 pb-32 px-6 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-primary/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-brand-muted text-[11px] font-bold tracking-[0.25em] uppercase mb-4">
            {t('servicePage.eyebrow')} {t(`services.${service.id}.title`, { defaultValue: service.id })}
          </p>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-brand-primary uppercase leading-[0.9] tracking-tighter mb-8 max-w-4xl">
            {service.headline}
          </h1>
          
          <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed font-medium mb-12">
            {t(`services.${service.id}.description`, { defaultValue: service.subheadline })}
          </p>
          
          <a href="#contact" className="group inline-flex items-center gap-3 text-brand-primary text-[13px] font-bold tracking-widest uppercase hover:text-brand-white transition-colors">
            <span className="w-8 h-8 border border-brand-primary group-hover:border-brand-white flex items-center justify-center transition-colors">
              <ChevronRight size={14} />
            </span>
            {t('servicePage.contactCta')}
          </a>
        </div>
      </section>

      {/* ── Capabilities (Split Screen White) ─────────────────────────────── */}
      <section className="bg-brand-white py-32 px-6 border-b border-brand-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left: Sticky Title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-primary uppercase leading-[0.95] tracking-tight">
              {t('servicePage.capabilities')} <br/>
              <span className="text-brand-black">{t('servicePage.capabilitiesSub')}</span>
            </h2>
          </div>

          {/* Right: List */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {service.capabilities.map((cap) => {
              const Icon = iconMap[cap.icon as IconName] ?? Zap
              return (
                <div key={cap.title} className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Icon size={28} strokeWidth={1.5} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-brand-black uppercase tracking-tight mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed max-w-md">
                      {cap.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Sub-services (Table Layout Dark) ─────────────────────────────── */}
      <section className="bg-brand-black py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl sm:text-5xl font-black text-brand-white uppercase leading-tight tracking-tight mb-20 max-w-3xl">
            {service.whyTitle.replace(service.id.toUpperCase(), '')} <br/>
            <span className="text-brand-primary">{t(`services.${service.id}.title`, { defaultValue: service.id }).toUpperCase()} {t('servicePage.solutions')}</span>
          </h2>

          <div className="flex flex-col border-t border-white/10">
            {service.subServices.map((sub) => (
              <div key={sub.number} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 border-b border-white/10 group hover:bg-white/[0.02] transition-colors -mx-6 px-6">
                <div className="w-48 flex-shrink-0">
                  <h3 className="text-base font-black text-brand-white uppercase tracking-tight group-hover:text-brand-primary transition-colors">
                    {sub.category}
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-white/50 text-sm leading-relaxed">
                    {sub.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────── */}
      <section className="bg-[#111] py-24 px-6 border-y border-white/5 relative overflow-hidden">
        {/* Abstract decorative shape */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-white uppercase tracking-tight leading-snug mb-2">
              {t('servicePage.banner.title1')} <br/>
              {t('servicePage.banner.title2')} <br/>
              <span className="text-brand-primary">{t('servicePage.banner.title3')}</span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <a href="#contact" className="inline-block px-8 py-4 bg-brand-primary text-brand-white text-[13px] font-black uppercase tracking-widest hover:bg-brand-primary-hover transition-colors">
              {t('servicePage.banner.cta')}
            </a>
          </div>
        </div>
      </section>

      {/* ── Process (Split Screen White) ──────────────────────────────────── */}
      <section className="bg-brand-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-4xl sm:text-5xl font-black text-brand-black uppercase tracking-tight mb-20">
            {t('servicePage.process')} <br/>
            <span className="text-brand-primary">{t('servicePage.processSub')}</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            
            {/* Left: Step list */}
            <div className="lg:col-span-4 flex flex-col divide-y divide-brand-border border-t border-brand-border">
              {service.process.map((step) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className={`flex items-center gap-4 py-5 text-left transition-colors group ${activeStep === step.number ? 'text-brand-black' : 'text-brand-muted hover:text-brand-black'}`}
                >
                  <span className={`text-[11px] font-bold tracking-widest uppercase transition-colors ${activeStep === step.number ? 'text-brand-primary' : ''}`}>
                    {step.number}.
                  </span>
                  <span className="text-[13px] font-bold uppercase tracking-tight">{step.title}</span>
                </button>
              ))}
            </div>

            {/* Right: Active step detail */}
            <div className="lg:col-span-8 lg:pl-12 flex flex-col justify-center">
              <h3 className="text-3xl font-black text-brand-primary uppercase tracking-tight mb-6 leading-tight max-w-2xl">
                {activeProcess.description}
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="bg-brand-off-white py-32 px-6 border-t border-brand-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-brand-black uppercase tracking-tight mb-12">
            {t('servicePage.faq')}
          </h2>
          <div className="flex flex-col border-t border-brand-border">
            {service.faqs.map((faq) => (
              <FAQ key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────── */}
      <ContactSection />
    </>
  )
}
