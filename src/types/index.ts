export interface StatItem {
  value: string
  label: string
}

export interface Service {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
  image?: string
}

export interface EcosystemProduct {
  id: string
  name: string
  tagline: string
  vertical: string
  url: string
  accentColor: string
}

export interface NewsItem {
  id: string
  date: string
  category: 'news' | 'compliance' | 'regulatory'
  title: string
  excerpt: string
  url: string
}

export interface Project {
  id: string
  slug: string
  title: string
  tags: string[]
  url: string
  coverImage?: string
  description?: string
  clientName?: string
  servicesProvided?: string[]
  metrics?: { label: string; value: string }[]
  gallery?: string[]
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  title: string
  company: string
}
