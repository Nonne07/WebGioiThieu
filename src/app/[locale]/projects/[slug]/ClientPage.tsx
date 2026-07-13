"use client"
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/types'
import { ArrowLeft, Bot, Wrench } from 'lucide-react'
import { Link } from '@/i18n/routing'
import ContactSection from '@/components/sections/ContactSection'

export default function ClientPage({ project }: { project: Project }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <main className="pt-20 bg-brand-black min-h-screen text-white flex flex-col">
        {/* Back Button */}
        <div className="max-w-7xl w-full mx-auto px-6 py-6 flex-shrink-0">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/50 hover:text-brand-blue transition-colors text-sm font-bold tracking-widest uppercase">
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>

        {/* 404 Error State */}
        <div className="flex-1 flex items-center justify-center py-20 px-6">
          <motion.div 
            className="flex flex-col items-center text-center max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Robot Icon */}
            <div className="relative mb-8 text-brand-blue">
              <Bot size={120} strokeWidth={1} className="opacity-80" />
              <div className="absolute top-0 right-0 p-2 bg-brand-black rounded-full border border-white/10 animate-bounce">
                <Wrench size={32} className="text-sky-400" />
              </div>
            </div>

            <h1 className="text-5xl font-black text-brand-white uppercase tracking-tight mb-4">
              Error 404
            </h1>
            <p className="text-sky-400 font-bold tracking-[0.25em] uppercase text-sm mb-6">
              Page Under Construction
            </p>
            <p className="text-white/50 leading-relaxed">
              We are currently building the case study for <strong className="text-white">{project.title}</strong>. 
              Our robots are working hard to put the finishing touches on this page. Please check back later!
            </p>

            <a
              href="#contact"
              className="mt-10 inline-block px-8 py-3 bg-white/5 border border-white/10 hover:bg-brand-blue hover:border-brand-blue transition-colors font-bold uppercase tracking-widest text-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </main>
      
      <ContactSection />
    </>
  )
}
