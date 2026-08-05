"use client"

import { useState, useEffect, useRef } from 'react'
import { Link, usePathname, useRouter } from '../../i18n/routing'
import { Menu, X, Globe, Zap, ThumbsUp, ChevronDown } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'

const links = [
  { key: 'projects', href: '/projects' },
  { key: 'about', href: '/about' },
]

const servicesMegaMenu = [
  { id: 'website', slug: 'website-design', icon: Globe },
  { id: 'automation', slug: 'automation-tools', icon: Zap },
  { id: 'social', slug: 'facebook-management', icon: ThumbsUp },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnterDesktop = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsServicesHovered(true)
  }

  const handleMouseLeaveDesktop = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false)
    }, 150)
  }

  const toggleLanguage = () => {
    const nextLocale = locale === 'vi' ? 'en' : 'vi'
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <>
      {/* ── Premium Top Accents ────────────────────────────────────────── */}
      {/* 1. Gradient Line */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF5A00] via-[#ff8c42] to-[#FF5A00] z-[60] shadow-[0_0_15px_rgba(255,90,0,0.6)]" />
      
      {/* 2. Soft Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[150px] bg-brand-primary/10 blur-[120px] pointer-events-none z-[40]" />

      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'pt-4 px-4 sm:px-6' : 'pt-0 px-0'}`}
      >
        <div 
          className={`mx-auto transition-all duration-500 ${
            scrolled 
              ? 'max-w-6xl bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 rounded-full' 
              : 'max-w-7xl bg-transparent border-b border-brand-border/30'
          }`}
        >
          <div className={`flex items-center justify-between relative z-10 transition-all duration-500 ${scrolled ? 'h-16 px-6 sm:px-8' : 'h-24 px-6'}`}>
            
            {/* Logo */}
            <Link 
              href="/" 
              onClick={(e) => {
                if (pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="text-xl font-black tracking-tight z-50 relative transition-colors text-brand-black flex items-center gap-2 group"
            >
              <img 
                src="/sern-icon.png" 
                alt="SERN Logo" 
                className="w-8 h-8 rounded-lg shadow-sm group-hover:shadow-[0_0_15px_rgba(255,90,0,0.4)] transition-all"
              />
              <span>SERN<span className="text-brand-primary">.</span></span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Services Link */}
              <div 
                className="h-full flex items-center py-8 relative"
                onMouseEnter={handleMouseEnterDesktop}
                onMouseLeave={handleMouseLeaveDesktop}
              >
                <Link 
                  href="/services"
                  className={`text-[13px] font-bold tracking-widest uppercase transition-colors flex items-center gap-1 ${isServicesHovered ? 'text-brand-primary' : 'text-brand-muted hover:text-brand-black'}`}
                >
                  {t('nav.services')}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} />
                </Link>
              </div>

              {links.map(l => (
                l.href.startsWith('/') ? (
                  <Link
                    key={l.key}
                    href={l.href}
                    className="text-[13px] font-bold tracking-widest uppercase transition-colors text-brand-muted hover:text-brand-black"
                  >
                    {t(`nav.${l.key}`)}
                  </Link>
                ) : (
                  <a
                    key={l.key}
                    href={l.href}
                    className="text-[13px] font-bold tracking-widest uppercase transition-colors text-brand-muted hover:text-brand-black"
                  >
                    {t(`nav.${l.key}`)}
                  </a>
                )
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="#contact"
                className="inline-block px-6 py-2.5 bg-gradient-to-r from-[#FF5A00] to-[#ff7b00] text-white text-[13px] font-bold tracking-wide uppercase hover:shadow-[0_4px_20px_rgba(255,90,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 rounded-full"
              >
                {t('nav.requestConsultation')}
              </a>

              <button 
                onClick={toggleLanguage}
                className="hidden text-[13px] font-bold uppercase transition-colors text-brand-black hover:text-brand-primary"
              >
                {locale === 'vi' ? 'EN' : 'VI'}
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(p => !p)}
              className="lg:hidden flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#FF5A00] to-[#ff7b00] text-white transition-all shadow-[0_4px_15px_rgba(255,90,0,0.3)] rounded-full"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mega Menu Dropdown (Desktop) */}
          <div 
            onMouseEnter={handleMouseEnterDesktop}
            onMouseLeave={handleMouseLeaveDesktop}
            className={`hidden lg:block absolute top-full left-0 w-full bg-white/90 backdrop-blur-2xl border border-white/60 transition-all duration-300 origin-top overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl mt-4 ${isServicesHovered ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
          >
            <div className="px-8 py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {servicesMegaMenu.map(svc => {
                  const Icon = svc.icon
                  return (
                    <Link href={`/services/${svc.slug}`} key={svc.id} onClick={() => setIsServicesHovered(false)} className="group flex flex-col gap-4 p-6 rounded-2xl bg-[#fafafa] hover:bg-white transition-all duration-300 border border-transparent hover:border-brand-primary/20 hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-primary transition-all duration-300 shadow-sm">
                          <Icon size={24} className="text-brand-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[15px] font-bold text-brand-black group-hover:text-brand-primary transition-colors leading-tight">
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
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl overflow-hidden max-h-[calc(100vh-120px)] overflow-y-auto">
            <nav className="flex flex-col p-6 gap-6">
              
              {/* Mobile Services Accordion */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between w-full">
                  <Link 
                    href="/services"
                    onClick={() => setOpen(false)}
                    className="text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-primary transition-colors flex-1"
                  >
                    {t('nav.services')}
                  </Link>
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="p-1 -mr-1 text-brand-black hover:text-brand-primary transition-colors"
                  >
                    <ChevronDown size={20} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                {/* Mobile Submenu */}
                {isServicesOpen && (
                  <div className="flex flex-col gap-2 pl-4 border-l-2 border-brand-primary/20 mt-2">
                    {servicesMegaMenu.map(svc => (
                      <Link 
                        key={svc.id}
                        href={`/services/${svc.slug}`} 
                        onClick={() => { setOpen(false); setIsServicesOpen(false) }}
                        className="text-sm text-brand-muted hover:text-brand-primary transition-colors font-medium py-3 px-4 rounded-xl hover:bg-[#FFF4ED]"
                      >
                        {t(`megaMenu.${svc.id}.title`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {links.map(l => (
                l.href.startsWith('/') ? (
                  <Link
                    key={l.key}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-primary transition-colors"
                  >
                    {t(`nav.${l.key}`)}
                  </Link>
                ) : (
                  <a
                    key={l.key}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-primary transition-colors"
                  >
                    {t(`nav.${l.key}`)}
                  </a>
                )
              ))}
              
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block px-5 py-4 bg-gradient-to-r from-[#FF5A00] to-[#ff7b00] text-white text-sm font-bold uppercase tracking-widest text-center transition-all rounded-2xl mt-4 shadow-[0_8px_20px_rgba(255,90,0,0.3)]"
              >
                {t('nav.requestConsultation')}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
