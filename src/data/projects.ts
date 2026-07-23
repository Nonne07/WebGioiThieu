import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ictc-e-learning',
    title: 'ICTC E-learning',
    tags: ['Website', 'Tools', 'Education'],
    url: 'https://elearning.ictc.edu.vn',
    clientName: 'ICTC',
    description: 'Nền tảng học trực tuyến E-learning của ICTC, mang lại trải nghiệm học tập hiện đại và liền mạch.',
    coverImage: '/ictc-elearning.png',
    servicesProvided: ['Web Development', 'UI/UX Design', 'System Integration'],
    metrics: [
      { label: 'Active Users', value: '+45%' }
    ],
    gallery: ['/ictc-elearning.png']
  },
  {
    id: '2',
    slug: 'ictc-homepage',
    title: 'ICTC Trang chủ',
    tags: ['Website', 'Education'],
    url: 'https://ictc.edu.vn/',
    clientName: 'ICTC',
    description: 'Website trang chủ chính thức của trung tâm ICTC, giới thiệu thông tin đào tạo và tuyển sinh.',
    coverImage: '/ictc-logo.png',
    servicesProvided: ['Web Development', 'UI/UX Design', 'SEO'],
    metrics: [
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

