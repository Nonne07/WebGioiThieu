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
      <main className="bg-white">
        {/* ── Light Hero Section ─────────────────────────────────────────── */}
        <section className="bg-[#fafafa] pt-40 pb-20 px-6 border-b border-brand-border">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-black uppercase tracking-tight mb-8">
              {t('projectsPage.title')}
            </h1>
            <p className="text-sm font-medium text-brand-muted leading-relaxed max-w-2xl">
              {t('projectsPage.desc')}
            </p>
          </div>
        </section>

        {/* ── Projects Content Section ──────────────────────────────────── */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16 border-b border-brand-border pb-6">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-all px-4 py-2 rounded-full ${
                    activeFilter === filter.id 
                      ? 'bg-gradient-to-r from-brand-primary to-[#ff7b00] text-white shadow-[0_4px_15px_rgba(255,90,0,0.3)]' 
                      : 'bg-[#f5f5f7] text-brand-muted hover:bg-brand-primary hover:text-white'
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
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-primary z-10">
                    <Lightbulb size={80} strokeWidth={1.5} fill="#ff5a00" className="opacity-90" />
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProjects.map((project) => {
                  const isExternal = project.url && project.url !== '#';
                  const cardContent = (
                    <>
                      {/* Image Placeholder Container */}
                      <div className="aspect-[4/3] bg-white overflow-hidden relative border-b border-brand-border/30">
                        {project.coverImage ? (
                          <img 
                            src={project.coverImage} 
                            alt={project.title}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out">
                            <span className="text-brand-muted text-xs uppercase tracking-widest font-bold">
                              {project.title} Thumbnail
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-8 flex flex-col gap-4 flex-1">
                        <h3 className="text-lg font-black text-brand-black transition-colors group-hover:text-brand-primary uppercase">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span
                              key={tag}
                              className="text-xs font-semibold text-brand-muted/70 bg-[#f5f5f7] px-3 py-1 rounded-full group-hover:bg-[#FFF4ED] group-hover:text-brand-primary transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  );

                  if (isExternal) {
                    return (
                      <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-border hover:border-brand-primary hover:shadow-[0_8px_30px_rgba(255,90,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                      >
                        {cardContent}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={project.id}
                      href={`/projects/${project.slug}`}
                      className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-border hover:border-brand-primary hover:shadow-[0_8px_30px_rgba(255,90,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                    >
                      {cardContent}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-20">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentPage(i + 1)
                      window.scrollTo({ top: 300, behavior: 'smooth' })
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-sm ${
                      currentPage === i + 1
                        ? 'bg-gradient-to-r from-brand-primary to-[#ff7b00] text-white shadow-[0_4px_15px_rgba(255,90,0,0.3)]'
                        : 'bg-white text-brand-muted border border-brand-border hover:border-brand-primary hover:text-brand-primary'
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
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-brand-black border border-brand-border text-xs font-bold hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm"
                  >
                    <ChevronRight size={16} />
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
