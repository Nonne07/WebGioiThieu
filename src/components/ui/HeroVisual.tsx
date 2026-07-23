"use client"
import { motion } from 'framer-motion'

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center lg:justify-end">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Code Window (Back) */}
      <motion.div 
        className="absolute lg:right-12 xl:right-24 w-[280px] sm:w-[340px] bg-[#0d1117] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-10"
        initial={{ opacity: 0, x: 50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: -20 }}
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-hidden">
          <p className="text-white/40 mb-2">// building digital excellence</p>
          <p><span className="text-pink-400">const</span> <span className="text-blue-400">agency</span> = <span className="text-yellow-300">new</span> <span className="text-green-300">SERN</span>();</p>
          <br/>
          <p><span className="text-blue-400">agency</span>.<span className="text-yellow-200">buildWebsite</span>({'{'}</p>
          <p className="pl-4"><span className="text-white/80">performance:</span> <span className="text-orange-400">100</span>,</p>
          <p className="pl-4"><span className="text-white/80">design:</span> <span className="text-green-300">'premium'</span>,</p>
          <p className="pl-4"><span className="text-white/80">conversionRate:</span> <span className="text-orange-400">MAX</span></p>
          <p>{'}'});</p>
        </div>
      </motion.div>

      {/* UI Mockup Card (Front) */}
      <motion.div 
        className="absolute right-[40%] sm:right-[15%] lg:right-[15%] xl:right-1/3 top-1/2 translate-x-1/4 sm:translate-x-0 w-[240px] sm:w-[280px] bg-[#1a1f2e]/80 border border-white/10 rounded-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 backdrop-blur-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="w-16 h-4 bg-brand-primary/30 rounded-full" />
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-white/10" />
            <div className="w-4 h-4 rounded-full bg-white/10" />
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="w-full h-24 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center p-3">
            {/* Playful mini chart */}
            <div className="flex items-end gap-2 w-full h-full">
              <motion.div className="w-full bg-brand-primary/40 rounded-sm" initial={{ height: '30%' }} animate={{ height: '50%' }} transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1.5 }} />
              <motion.div className="w-full bg-brand-primary/60 rounded-sm" initial={{ height: '50%' }} animate={{ height: '70%' }} transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1.2, delay: 0.2 }} />
              <motion.div className="w-full bg-brand-primary rounded-sm relative overflow-hidden" initial={{ height: '70%' }} animate={{ height: '100%' }} transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1.8, delay: 0.4 }}>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="w-full h-3 bg-white/10 rounded-full" />
          <div className="w-2/3 h-3 bg-white/5 rounded-full" />
        </div>
      </motion.div>

    </div>
  )
}
