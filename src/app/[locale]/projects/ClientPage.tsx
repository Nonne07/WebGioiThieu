"use client"

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronRight, Lightbulb, Settings } from 'lucide-react'
import ContactSection from '@/components/sections/ContactSection'
import { projects } from '@/data/projects'
import { Link } from '@/i18n/routing'

export default function ProjectsPage() {
  const t = useTranslations()
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 6

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [activeFilter])

  const filters = [
    { id: 'all', label: t('projectsPage.filters.all') },
    { id: 'website', label: t('projectsPage.filters.website') },
    { id: 'tools', label: t('projectsPage.filters.tools') },
    { id: 'fanpages', label: t('projectsPage.filters.fanpages') },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => {
        if (activeFilter === 'website') return p.tags.includes('Website');
        if (activeFilter === 'tools') return p.tags.includes('Tools');
        if (activeFilter === 'fanpages') return p.tags.includes('Fan Pages');
        return true;
      });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  const displayedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <>
      <main>
        {/* ── Dark Hero Section ─────────────────────────────────────────── */}
        <section className="bg-brand-black pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">
              {t('projectsPage.title')}
            </h1>
            <p className="text-sm text-white/60 leading-relaxed max-w-2xl">
              {t('projectsPage.desc')}
            </p>
          </div>
        </section>

        {/* ── Projects Content Section ──────────────────────────────────── */}
        <section className="bg-brand-white py-12 px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-16 border-b border-brand-border pb-4">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                    activeFilter === filter.id 
                      ? 'text-brand-blue border-b-2 border-brand-blue pb-1' 
                      : 'text-brand-muted hover:text-brand-black'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Projects Grid or Empty State */}
            {filteredProjects.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="relative mb-8 w-40 h-40 flex items-center justify-center">
                  <div className="absolute top-2 left-0 text-brand-muted/20 animate-pulse">
                    <Settings size={48} />
                  </div>
                  <div className="absolute bottom-4 right-4 text-brand-muted/10">
                    <Settings size={64} />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500 z-10">
                    <Lightbulb size={80} strokeWidth={1.5} fill="#ff7f00" className="opacity-90" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-muted/20 -z-10 ml-12 mt-4">
                    <Lightbulb size={60} strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-3">
                  {t('projectsPage.emptyState.title')}
                </h3>
                <p className="text-sm font-medium text-brand-muted max-w-sm">
                  {t('projectsPage.emptyState.desc')}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {displayedProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.slug}`}
                    className="group flex flex-col"
                  >
                    {/* Image Placeholder Container */}
                    <div className="aspect-[4/3] bg-brand-off-white mb-6 overflow-hidden relative border border-brand-border/50">
                      {project.coverImage ? (
                        <img 
                          src={project.coverImage} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-500">
                          <span className="text-brand-muted text-xs uppercase tracking-widest font-semibold">
                            {project.title} Thumbnail
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-black text-brand-black transition-colors group-hover:text-brand-blue">
                        {project.title}
                      </h3>
                      <p className="text-[10px] font-semibold text-brand-muted uppercase tracking-widest">
                        {project.tags.join(' | ')}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-20">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentPage(i + 1)
                      window.scrollTo({ top: 300, behavior: 'smooth' })
                    }}
                    className={`w-8 h-8 flex items-center justify-center text-xs font-bold transition-colors ${
                      currentPage === i + 1
                        ? 'bg-brand-blue text-brand-white'
                        : 'bg-brand-muted text-brand-white hover:bg-brand-black'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                {currentPage < totalPages && (
                  <button 
                    onClick={() => {
                      setCurrentPage(prev => Math.min(prev + 1, totalPages))
                      window.scrollTo({ top: 300, behavior: 'smooth' })
                    }}
                    className="w-8 h-8 flex items-center justify-center bg-brand-muted text-brand-white text-xs font-bold hover:bg-brand-black transition-colors"
                  >
                    <ChevronRight size={14} />
                  </button>
                )}
              </div>
            )}

          </div>
        </section>
      </main>

      <ContactSection />
    </>
  )
}
