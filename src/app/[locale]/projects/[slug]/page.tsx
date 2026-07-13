import { setRequestLocale } from 'next-intl/server'
import ClientPage from './ClientPage'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

export default async function ProjectPage({
  params
}: {
  params: Promise<{ locale: string, slug: string }>
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale)

  let project = projects.find(p => p.slug === slug)

  if (!project) {
    project = {
      id: slug,
      slug: slug,
      title: 'Unknown Project',
      tags: [],
      url: '#'
    }
  }

  return <ClientPage project={project} />
}
