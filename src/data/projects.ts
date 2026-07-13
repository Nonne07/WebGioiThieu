import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'brand-a-store',
    title: 'Brand A Store',
    tags: ['B2B', 'Tools', 'Industry'],
    url: '#',
    clientName: 'Brand A Corp',
    description: 'We developed a comprehensive B2B eCommerce platform for Brand A, modernizing their legacy systems and creating a seamless ordering experience for their wholesale partners.',
    coverImage: '/handshake.png',
    servicesProvided: ['Web Development', 'UI/UX Design', 'System Integration'],
    metrics: [
      { label: 'Increase in Sales', value: '+45%' },
      { label: 'Order Process Time', value: '-60%' }
    ],
    gallery: ['/handshake.png', '/handshake.png']
  },
  {
    id: '2',
    slug: 'brand-b-kitchen',
    title: 'Brand B Kitchen',
    tags: ['B2C', 'Website', 'Retail'],
    url: '#',
    clientName: 'Brand B Retails',
    description: 'A vibrant, highly-converting D2C website for a premium kitchenware brand. Focused on high-quality visuals and a frictionless checkout process.',
    coverImage: '/handshake.png',
    servicesProvided: ['Shopify Development', 'Brand Identity', 'Conversion Rate Optimization'],
    metrics: [
      { label: 'Conversion Rate', value: '3.2%' },
      { label: 'Mobile Traffic', value: '+85%' }
    ]
  },
  {
    id: '3',
    slug: 'brand-c-logistics',
    title: 'Brand C Logistics',
    tags: ['B2B', 'Tools', 'Industry'],
    url: '#',
    clientName: 'Brand C Logistics LLC',
    description: 'A custom fleet management and tracking dashboard built from the ground up to handle real-time data for over 500 active vehicles.',
    coverImage: '/handshake.png',
    servicesProvided: ['Custom Web App', 'API Development', 'Real-time Analytics'],
    metrics: [
      { label: 'Efficiency Gain', value: '+30%' }
    ]
  },
  {
    id: '4',
    slug: 'brand-d-construction',
    title: 'Brand D Construction',
    tags: ['B2C', 'Website', 'Construction'],
    url: '#',
    clientName: 'Brand D Builders',
    description: 'Corporate website redesign focusing on showcasing massive infrastructure projects through immersive 3D web experiences.',
    coverImage: '/handshake.png',
    servicesProvided: ['Web Development', '3D Modeling']
  },
  {
    id: '5',
    slug: 'brand-e-hospital',
    title: 'Brand E Hospital',
    tags: ['B2C', 'Tools', 'Hospital'],
    url: '#'
  },
  {
    id: '6',
    slug: 'brand-f-media',
    title: 'Brand F Media',
    tags: ['B2B', 'Fan Pages', 'Social Media'],
    url: '#'
  },
  {
    id: '7',
    slug: 'brand-g-tech',
    title: 'Brand G Tech',
    tags: ['B2C', 'Website', 'Technology'],
    url: '#'
  },
  {
    id: '8',
    slug: 'brand-h-bakery',
    title: 'Brand H Bakery',
    tags: ['B2C', 'Fan Pages', 'F&B'],
    url: '#'
  }
]

