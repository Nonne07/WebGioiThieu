"use client"

import { useState, useEffect } from 'react'
import { Link, usePathname, useRouter } from '../../i18n/routing'
import { Menu, X, Globe, Zap, ThumbsUp, ChevronDown } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'

const links = [
  { key: 'projects', href: '/projects' },
  { key: 'about', href: '/about' },
  { key: 'blog', href: '/blog' },
]

const servicesMegaMenu = [
  { id: 'website', slug: 'website-design', icon: Globe },
  { id: 'automation', slug: 'automation-tools', icon: Zap },
  { id: 'social', slug: 'facebook-management', icon: ThumbsUp },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const toggleLanguage = () => {
    const nextLocale = locale === 'vi' ? 'en' : 'vi'
    router.replace(pathname, { locale: nextLocale })
  }

  const isDarkText = scrolled

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-white border-b border-brand-border' : 'bg-transparent'}`}
      onMouseLeave={() => setIsServicesHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-10">
        
        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => {
            if (pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className={`text-xl font-black tracking-tight z-50 relative transition-colors ${isDarkText ? 'text-brand-black' : 'text-brand-white'}`}
        >
          SERN<span className="text-brand-blue">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Services Link with Hover for Mega Menu */}
          <div 
            className="h-full flex items-center py-8 cursor-pointer"
            onMouseEnter={() => setIsServicesHovered(true)}
          >
            <span className={`text-[13px] font-bold tracking-widest uppercase transition-colors flex items-center gap-1 ${isServicesHovered ? 'text-brand-blue' : (isDarkText ? 'text-brand-muted hover:text-brand-black' : 'text-brand-white hover:text-brand-blue')}`}>
              {t('nav.services')}
              <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} />
            </span>
          </div>

          {links.map(l => (
            l.href.startsWith('/') ? (
              <Link
                key={l.key}
                href={l.href}
                className={`text-[13px] font-bold tracking-widest uppercase transition-colors ${isDarkText ? 'text-brand-muted hover:text-brand-black' : 'text-brand-white hover:text-brand-blue'}`}
              >
                {t(`nav.${l.key}`)}
              </Link>
            ) : (
              <a
                key={l.key}
                href={l.href}
                className={`text-[13px] font-bold tracking-widest uppercase transition-colors ${isDarkText ? 'text-brand-muted hover:text-brand-black' : 'text-brand-white hover:text-brand-blue'}`}
              >
                {t(`nav.${l.key}`)}
              </a>
            )
          ))}
        </nav>

        {/* Actions (CTA, Search, Lang) */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="#contact"
            className="inline-block px-5 py-2.5 bg-brand-blue text-brand-white text-[13px] font-bold tracking-wide uppercase hover:bg-brand-blue-hover transition-colors duration-200"
          >
            {t('nav.requestConsultation')}
          </a>
          

          <button 
            onClick={toggleLanguage}
            className={`hidden text-[13px] font-bold uppercase transition-colors ${isDarkText ? 'text-brand-black hover:text-brand-blue' : 'text-brand-white hover:text-brand-blue'}`}
          >
            {locale === 'vi' ? 'EN' : 'VI'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(p => !p)}
          className="lg:hidden flex items-center justify-center w-10 h-10 bg-brand-blue text-brand-white hover:bg-brand-blue-hover transition-colors shadow-sm"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mega Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-brand-black border-t border-white/5 transition-all duration-300 origin-top overflow-hidden ${isServicesHovered ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesMegaMenu.map(svc => {
              const Icon = svc.icon
              return (
                <Link href={`/services/${svc.slug}`} key={svc.id} className="group flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Icon size={24} className="text-brand-white group-hover:text-brand-blue transition-colors" strokeWidth={1.5} />
                    <h3 className="text-[15px] font-bold text-brand-white group-hover:text-brand-blue transition-colors leading-tight">
                      {t(`megaMenu.${svc.id}.title`)}
                    </h3>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed pr-4">
                    {t(`megaMenu.${svc.id}.desc`)}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-brand-white border-t border-brand-border absolute top-full w-full shadow-lg">
          <nav className="flex flex-col px-6 py-6 gap-6">
            <a href="#services" className="text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-blue transition-colors">
              {t('nav.services')}
            </a>
            {links.map(l => (
              l.href.startsWith('/') ? (
                <Link
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-blue transition-colors"
                >
                  {t(`nav.${l.key}`)}
                </Link>
              ) : (
                <a
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-blue transition-colors"
                >
                  {t(`nav.${l.key}`)}
                </a>
              )
            ))}
            <div className="hidden items-center justify-between pt-4 border-t border-brand-border">
              <button 
                onClick={toggleLanguage}
                className="text-brand-black text-sm font-bold hover:text-brand-blue transition-colors uppercase"
              >
                Ngôn ngữ: {locale === 'vi' ? 'EN' : 'VI'}
              </button>
            </div>
            <a
              href="#contact"
              className="inline-block px-5 py-3 bg-brand-blue text-brand-white text-sm font-bold uppercase tracking-widest text-center hover:bg-brand-blue-hover transition-colors"
            >
              {t('nav.requestConsultation')}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
