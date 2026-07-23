"use client"
import { projects } from '../../data/projects'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function ProjectsSection() {
  const t = useTranslations()
  const displayProjects = projects.slice(0, 4)

  return (
    <section id="projects" className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16 border-b border-brand-border pb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="text-brand-primary text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-primary"></span>
              {t('projectsSection.eyebrow')}
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand-black uppercase tracking-tight leading-none">
              {t('projectsSection.title1')}<br />{t('projectsSection.title2')}
            </h2>
          </div>
          <Link
            href="/projects"
            className="self-start sm:self-auto text-sm font-bold text-brand-black hover:text-brand-primary bg-[#f5f5f7] hover:bg-[#FFF4ED] px-6 py-3 rounded-full transition-colors shadow-sm"
          >
            {t('projectsSection.cta')}
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {displayProjects.map((project) => {
            const isExternal = project.url && project.url !== '#';
            const cardContent = (
              <>
                {/* Thumbnail placeholder */}
                <div className="aspect-[4/3] bg-[#f5f5f7] overflow-hidden relative">
                  {project.coverImage ? (
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out">
                      <span className="text-brand-muted text-xs uppercase tracking-widest font-bold">
                        {project.title} Thumbnail
                      </span>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Info */}
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <h3 className="text-lg font-black text-brand-black uppercase tracking-tight group-hover:text-brand-primary transition-colors">
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

            return (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="h-full"
              >
                {isExternal ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-border hover:border-brand-primary hover:shadow-[0_8px_30px_rgba(255,90,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-border hover:border-brand-primary hover:shadow-[0_8px_30px_rgba(255,90,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                  >
                    {cardContent}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}
