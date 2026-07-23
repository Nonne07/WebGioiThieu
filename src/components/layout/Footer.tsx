"use client"
import { useTranslations } from 'next-intl'
import { Link } from '../../i18n/routing'

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="bg-brand-black text-white/50">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-white font-black text-2xl tracking-tight">
              SERN<span className="text-brand-primary">.</span>
            </span>
            <p className="text-sm font-medium leading-relaxed mt-4 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex gap-4 mt-6">
              {['Facebook', 'Behance', 'LinkedIn'].map(s => (
                <a key={s} href="#" className="text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-brand-primary"></span>
              {t('footer.services')}
            </h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/services/website-design" className="text-sm font-medium hover:text-brand-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">{t('services.website.title')}</Link></li>
              <li><Link href="/services/automation-tools" className="text-sm font-medium hover:text-brand-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">{t('services.automation.title')}</Link></li>
              <li><Link href="/services/facebook-management" className="text-sm font-medium hover:text-brand-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">{t('services.social.title')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
               <span className="w-4 h-px bg-brand-primary"></span>
               {t('footer.quickLinks')}
            </h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-sm font-medium hover:text-brand-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">{t('nav.about')}</Link></li>
              <li><Link href="/projects" className="text-sm font-medium hover:text-brand-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">{t('nav.projects')}</Link></li>
              <li><a href="#contact" className="text-sm font-medium hover:text-brand-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">{t('nav.requestConsultation')}</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>{t('footer.copyright')}</p>
          <p>{t('footer.location')}</p>
        </div>
      </div>
    </footer>
  )
}
