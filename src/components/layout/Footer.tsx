"use client"
import { useTranslations } from 'next-intl'
import { Link } from '../../i18n/routing'

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="bg-brand-black text-white/40">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-brand-white font-black text-xl tracking-tight">
              SERN<span className="text-brand-blue">.</span>
            </span>
            <p className="text-xs leading-relaxed mt-4 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex gap-4 mt-6">
              {['Facebook', 'Behance', 'LinkedIn'].map(s => (
                <a key={s} href="#" className="text-xs font-semibold uppercase tracking-widest hover:text-brand-white transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-brand-white text-xs font-bold uppercase tracking-widest mb-5">{t('footer.services')}</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services/website-design" className="text-xs hover:text-brand-white transition-colors">{t('services.website.title')}</Link></li>
              <li><Link href="/services/automation-tools" className="text-xs hover:text-brand-white transition-colors">{t('services.automation.title')}</Link></li>
              <li><Link href="/services/facebook-management" className="text-xs hover:text-brand-white transition-colors">{t('services.social.title')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-brand-white text-xs font-bold uppercase tracking-widest mb-5">{t('footer.quickLinks')}</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-xs hover:text-brand-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/projects" className="text-xs hover:text-brand-white transition-colors">{t('nav.projects')}</Link></li>
              <li><a href="#contact" className="text-xs hover:text-brand-white transition-colors">{t('nav.requestConsultation')}</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>{t('footer.copyright')}</p>
          <p>{t('footer.location')}</p>
        </div>
      </div>
    </footer>
  )
}
