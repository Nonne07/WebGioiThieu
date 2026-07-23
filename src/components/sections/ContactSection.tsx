"use client"
import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const t = useTranslations()
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const interests = ['Website', 'Automation', 'Social Media', 'Other']

  const toggleInterest = (item: string) => {
    setSelectedInterests(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate sending form data
    setTimeout(() => {
      setIsSubmitted(true)
    }, 600)
  }

  return (
    <section id="contact" className="bg-[#f8f8f8] py-24 sm:py-32 px-6 relative border-t border-brand-border" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column */}
          <motion.div 
            className="flex flex-col bg-[#f8f8f8]/80 backdrop-blur-sm p-4 -m-4 rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-brand-primary text-[11px] font-bold tracking-[0.25em] uppercase mb-6">
              {t('contactSection.eyebrow')}
            </p>
            
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-brand-black uppercase leading-[0.9] tracking-tighter mb-8">
              {t('contactSection.title1')}<br/>
              <span className="text-brand-primary">{t('contactSection.title2')}</span>
            </h2>
            
            <p className="text-brand-black/60 text-sm leading-relaxed max-w-md mb-12 font-medium">
              {t('contactSection.description')}
            </p>

            {/* Information Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 mt-auto pt-12 border-t border-brand-black/10">
              <div>
                <span className="text-[10px] font-bold text-brand-black uppercase tracking-widest block mb-4">{t('contactSection.info.hq')}</span>
                <p className="font-bold text-sm text-brand-black mb-1">{t('contactSection.info.addressTitle')}</p>
                <p className="text-[12px] text-brand-black/60 leading-relaxed max-w-[200px]">
                  {t('contactSection.info.address')}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-brand-black uppercase tracking-widest block mb-4">{t('contactSection.info.hotlineTitle')}</span>
                <p className="font-bold text-sm text-brand-black mb-1">{t('contactSection.info.inquiriesTitle')}</p>
                <a href="mailto:hello@sern.vn" className="text-[12px] text-brand-black hover:text-brand-primary transition-colors">hello@sern.vn</a>
              </div>

              <div>
                <span className="text-[10px] font-bold text-brand-black uppercase tracking-widest block mb-4">{t('contactSection.info.followTitle')}</span>
                <div className="flex gap-4">
                  <a href="#" className="w-8 h-8 rounded-full border border-brand-black/10 flex items-center justify-center text-brand-black hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full border border-brand-black/10 flex items-center justify-center text-brand-black hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full border border-brand-black/10 flex items-center justify-center text-brand-black hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            className="relative p-[1px] rounded-2xl shadow-[0_0_30px_rgba(255,90,0,0.15)] hover:shadow-[0_0_40px_rgba(255,90,0,0.3)] transition-shadow duration-500"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Glowing border background wrapper */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary/20 to-transparent rounded-2xl blur-[1px]" />
            
            <div className="bg-[#1c1d22] p-8 sm:p-12 rounded-2xl relative overflow-hidden h-full z-10 flex flex-col justify-center">
              {/* Diagonal accent inside the form */}
              <div className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-r from-brand-primary/20 to-transparent -translate-x-[40%] -translate-y-[10%] rotate-[20deg] origin-top-left pointer-events-none mix-blend-screen" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              
              {isSubmitted ? (
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-brand-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                    Gửi thành công!
                  </h3>
                  <p className="text-white/60 text-sm max-w-xs mb-8 leading-relaxed font-medium">
                    Cảm ơn bạn đã để lại thông tin. Đội ngũ chuyên gia của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/10 transition-all rounded-full"
                  >
                    Gửi yêu cầu mới
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-8 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{t('contactSection.form.name')}</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        className="border-b border-white/10 pb-2 bg-transparent text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-primary transition-colors rounded-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{t('contactSection.form.email')}</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        className="border-b border-white/10 pb-2 bg-transparent text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-primary transition-colors rounded-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{t('contactSection.form.phone')}</label>
                      <input 
                        type="tel" 
                        id="phone"
                        required
                        className="border-b border-white/10 pb-2 bg-transparent text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-primary transition-colors rounded-none"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{t('contactSection.form.company')}</label>
                      <input 
                        type="text" 
                        id="company"
                        className="border-b border-white/10 pb-2 bg-transparent text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-primary transition-colors rounded-none"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{t('contactSection.form.interestedIn')}</label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((item) => (
                        <label key={item} className="cursor-pointer">
                          <input type="checkbox" className="peer sr-only" name="interest" value={item} onChange={() => toggleInterest(item)} checked={selectedInterests.includes(item)} />
                          <div className="px-4 py-2 border border-white/10 rounded-full text-[11px] font-bold text-white/50 hover:border-white/30 peer-checked:bg-brand-primary peer-checked:text-white peer-checked:border-brand-primary peer-checked:shadow-[0_0_15px_rgba(255,90,0,0.3)] transition-all">
                            {item}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{t('contactSection.form.message')}</label>
                    <textarea 
                      id="message"
                      rows={4}
                      required
                      className="border-b border-white/10 pb-2 bg-transparent text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-primary transition-colors resize-none rounded-none"
                      placeholder="..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="group flex items-center justify-center w-full bg-gradient-to-r from-brand-primary to-[#ff8c42] text-white py-4 px-6 rounded-full hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_20px_rgba(255,90,0,0.3)] hover:shadow-[0_10px_25px_rgba(255,90,0,0.5)] transition-all mt-4"
                  >
                    <span className="text-sm font-bold tracking-widest uppercase">{t('contactSection.form.submit')}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-24 pt-8 border-t border-brand-black/10 text-center flex flex-col gap-1 items-center bg-[#f8f8f8]/80 backdrop-blur-sm p-4 rounded-xl">
          <p className="text-[9px] font-bold text-brand-black/60 tracking-widest uppercase">
            {t('contactSection.footerText.copyright')}
          </p>
          <p className="text-[9px] font-bold text-brand-black/60 tracking-widest uppercase">
            {t('contactSection.footerText.address')}
          </p>
        </div>

      </div>
    </section>
  )
}
