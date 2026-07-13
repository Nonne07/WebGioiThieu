"use client"
import { projects } from '../../data/projects'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function ProjectsSection() {
  const t = useTranslations()
  const displayProjects = projects.slice(0, 4)

  return (
    <section id="projects" className="bg-brand-white py-28 px-6">
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
            <p className="text-brand-blue text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              {t('projectsSection.eyebrow')}
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand-black uppercase tracking-tight leading-none">
              {t('projectsSection.title1')}<br />{t('projectsSection.title2')}
            </h2>
          </div>
          <Link
            href="/projects"
            className="self-start sm:self-auto text-sm font-semibold text-brand-muted hover:text-brand-blue transition-colors"
          >
            {t('projectsSection.cta')}
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {displayProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="h-full"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group bg-brand-white flex flex-col h-full hover:bg-brand-off-white transition-colors duration-200"
              >
                {/* Thumbnail placeholder */}
                <div className="aspect-[4/3] bg-brand-off-white overflow-hidden relative">
                  {project.coverImage ? (
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-500">
                      <span className="text-brand-border text-xs uppercase tracking-widest font-semibold">
                        {project.title} Thumbnail
                      </span>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                </div>

              {/* Info */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-base font-black text-brand-black uppercase tracking-tight group-hover:text-brand-blue transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-brand-muted border border-brand-border px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
