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
  }
]
