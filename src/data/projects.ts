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
    slug: 'sports-apparel-shop',
    title: 'Sports Apparel Shop',
    tags: ['E-commerce', 'Website', 'Retail'],
    url: 'https://sports-apparel-shop.vercel.app/',
    clientName: 'Sports Apparel',
    description: 'Cửa hàng thương mại điện tử thể thao hiện đại với giao diện đẹp và trải nghiệm mua sắm mượt mà.',
    coverImage: '/sports-apparel-shop.png',
    servicesProvided: ['Web Development', 'UI/UX Design', 'E-commerce'],
    metrics: [
      { label: 'Conversion Rate', value: '+32%' }
    ],
    gallery: ['/sports-apparel-shop.png']
  },
  {
    id: '4',
    slug: 'lms-demo-gogitolab',
    title: 'LMS Demo – Gogito Lab',
    tags: ['Website', 'Education', 'LMS'],
    url: 'https://lms-demo.gogitolab.com/',
    clientName: 'Gogito Lab',
    description: 'Hệ thống quản lý học tập (LMS) demo của Gogito Lab, hỗ trợ dạy và học trực tuyến toàn diện.',
    coverImage: '/lms-demo-gogitolab.png',
    servicesProvided: ['Web Development', 'System Integration', 'UI/UX Design'],
    metrics: [
      { label: 'Engagement', value: '+60%' }
    ],
    gallery: ['/lms-demo-gogitolab.png']
  },
  {
    id: '5',
    slug: 'sumting-lms',
    title: 'Sumting LMS',
    tags: ['Website', 'Education', 'LMS'],
    url: 'https://sumting-lms.vercel.app/login',
    clientName: 'Sumting',
    description: 'Nền tảng học tập trực tuyến Sumting LMS với thiết kế hiện đại, dễ sử dụng cho cả giáo viên và học sinh.',
    coverImage: '/sumting-lms.png',
    servicesProvided: ['Web Development', 'UI/UX Design', 'Education Tech'],
    metrics: [
      { label: 'User Satisfaction', value: '94%' }
    ],
    gallery: ['/sumting-lms.png']
  },
  {
    id: '6',
    slug: 'bach-hoa-online',
    title: 'Bách Hóa Online',
    tags: ['E-commerce', 'Website', 'Retail'],
    url: 'https://bach-hoa-online-6cr9-mwwbzsxym-vuminhtuan5264-3760s-projects.vercel.app/login',
    clientName: 'Bách Hóa Online',
    description: 'Nền tảng thương mại điện tử mua sắm trực tuyến với giao diện thân thiện và tiện lợi.',
    coverImage: '/bach-hoa-online.png',
    servicesProvided: ['Web Development', 'UI/UX Design', 'E-commerce'],
    metrics: [
      { label: 'Uptime', value: '99.9%' }
    ]
  }
]
