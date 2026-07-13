"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { topFeaturedNews, sideFeaturedNews, gridNews } from '@/data/newsData'
import ContactSection from '@/components/sections/ContactSection'

export default function NewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <main className="pt-20 pb-24">
        <motion.div 
          className="max-w-7xl mx-auto px-6 pt-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          
          {/* Top Featured Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Main Featured (Left, 8 cols) */}
            <motion.div 
              className="lg:col-span-8 group cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <div className="aspect-[16/9] w-full overflow-hidden bg-white/5 relative">
                <img 
                  src={topFeaturedNews.image} 
                  alt={topFeaturedNews.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-6">
                <span className="inline-block px-2 py-1 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                  {topFeaturedNews.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-brand-blue transition-colors">
                  {topFeaturedNews.title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-3xl">
                  {topFeaturedNews.description}
                </p>
              </div>
            </motion.div>

            {/* Side Featured (Right, 4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {sideFeaturedNews.map((news) => (
                <motion.div 
                  key={news.id} 
                  className="flex gap-4 group cursor-pointer border-b border-white/10 pb-6 last:border-0 last:pb-0"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                >
                  <div className="w-32 h-20 flex-shrink-0 overflow-hidden bg-white/5">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="inline-block px-1.5 py-0.5 bg-brand-blue text-white text-[9px] font-bold uppercase tracking-widest mb-2 w-fit">
                      {news.category}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-tight group-hover:text-brand-blue transition-colors line-clamp-3">
                      {news.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          <div className="w-full h-px bg-white/10 mb-12" />

          {/* Grid News Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-12 lg:gap-y-16">
            {gridNews.map((news) => (
              <motion.div 
                key={news.id} 
                className="group cursor-pointer flex flex-col"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-white/5 mb-6 relative">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>
                
                {news.category !== 'SERN SEO' && (
                   <span className="inline-block px-1.5 py-0.5 bg-brand-blue text-white text-[9px] font-bold uppercase tracking-widest mb-3 w-fit">
                     {news.category}
                   </span>
                )}
                {news.category === 'SERN SEO' && (
                  <div className="h-6 mb-1" /> /* Spacer if no tag */
                )}

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                  {news.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <ContactSection />
    </>
  )
}
