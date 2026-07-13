export interface Capability {
  icon: string
  title: string
  description: string
}

export interface SubService {
  number: string
  category: string
  title: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface ServiceDetail {
  id: string
  slug: string
  headline: string
  subheadline: string
  capabilities: Capability[]
  whyTitle: string
  whyBody: string
  subServices: SubService[]
  process: ProcessStep[]
  faqs: FAQ[]
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'website',
    slug: 'website-design',
    headline: 'THE DIGITAL FRONT OF YOUR BUSINESS',
    subheadline: 'We design and build modern websites that convert visitors into real customers — from landing pages to full business platforms.',
    capabilities: [
      { icon: 'Layers',     title: 'Design First',        description: 'Every pixel is intentional. We build on user research and brand strategy, not templates.' },
      { icon: 'Zap',        title: 'Fast Performance',    description: 'Optimized for speed and SEO from day one — your site loads fast and ranks well.' },
      { icon: 'Smartphone', title: 'Mobile Ready',        description: 'Fully responsive across all devices. 70% of Vietnamese users browse on mobile.' },
      { icon: 'Settings',   title: 'Easy to Manage',      description: 'You control your own content — no developer needed for everyday updates.' },
    ],
    whyTitle: 'WHY YOUR WEBSITE IS YOUR MOST IMPORTANT ASSET',
    whyBody: 'Your website is the first thing a potential client evaluates before they ever contact you. A slow, outdated, or confusing site loses business silently — you never see the visitors who left. We build websites that represent your business at its best: fast, clear, and built to convert.',
    subServices: [
      { number: '01', category: 'BRANDING',   title: 'Corporate Website'    },
      { number: '02', category: 'COMMERCE',   title: 'E-Commerce Website'   },
      { number: '03', category: 'LANDING',    title: 'Landing Page'         },
      { number: '04', category: 'INTERFACE',  title: 'UI/UX Redesign'       },
    ],
    process: [
      { number: '01', title: 'Consultation',  description: 'We learn your business, your customers, and your goals before writing a single line of code.' },
      { number: '02', title: 'UX Planning',   description: 'We map the user journey and information architecture — deciding what goes where and why.' },
      { number: '03', title: 'UI Design',     description: 'Visual design aligned with your brand, reviewed and approved by you before development starts.' },
      { number: '04', title: 'Development',   description: 'Clean, fast, maintainable code. Front-end and back-end built in parallel.' },
      { number: '05', title: 'Launch & Test', description: 'Full QA across devices and browsers. We hand over a site that works, not just one that looks good.' },
    ],
    faqs: [
      { question: 'How long does a website take to build?',    answer: 'A standard corporate website takes 3–5 weeks. E-commerce projects typically take 5–8 weeks depending on complexity.' },
      { question: 'Do I own the website after delivery?',      answer: 'Yes. You own the code, the design, and the domain. We transfer everything on project completion.' },
      { question: 'Can you update my existing website?',       answer: 'Yes. We offer redesign and optimization services for existing sites that need improvement.' },
      { question: 'What if I need changes after launch?',      answer: 'We offer a support window after launch and can discuss ongoing maintenance packages.' },
    ],
  },
  {
    id: 'automation',
    slug: 'automation-tools',
    headline: 'STOP DOING MANUALLY WHAT A TOOL CAN DO',
    subheadline: 'We build custom automation tools that eliminate repetitive work — so your team focuses on what actually grows the business.',
    capabilities: [
      { icon: 'RefreshCw',  title: 'Workflow Automation', description: 'Identify bottlenecks in your operations and replace them with automated processes.' },
      { icon: 'Database',   title: 'Data Processing',     description: 'Collect, clean, and route data between your tools automatically — no manual entry.' },
      { icon: 'Link',       title: 'API Integration',     description: 'Connect your existing tools — CRM, spreadsheets, email, messaging — into one system.' },
      { icon: 'BarChart2',  title: 'Reporting Dashboards',description: 'Automated reports and live dashboards so you always know what\'s happening.' },
    ],
    whyTitle: 'WHY AUTOMATION IS THE HIGHEST-ROI INVESTMENT',
    whyBody: 'Manual repetitive tasks compound in cost silently. Every hour your team spends copy-pasting data, sending follow-up emails, or generating reports is an hour not spent on sales, service, or strategy. We identify your highest-cost manual processes and build tools that eliminate them permanently.',
    subServices: [
      { number: '01', category: 'WORKFLOW',    title: 'Business Process Automation' },
      { number: '02', category: 'DATA',        title: 'Data Collection & Processing' },
      { number: '03', category: 'INTEGRATION', title: 'Tool & API Integration'       },
      { number: '04', category: 'REPORTING',   title: 'Automated Reporting'          },
    ],
    process: [
      { number: '01', title: 'Process Audit',   description: 'We map your current workflows to identify what costs the most time and is most automatable.' },
      { number: '02', title: 'Tool Design',     description: 'We design the logic, data flows, and interfaces for your automation before building anything.' },
      { number: '03', title: 'Development',     description: 'We build the tool — scripts, integrations, dashboards — tailored to your exact workflow.' },
      { number: '04', title: 'Testing',         description: 'We test against real data and edge cases before handover. No surprises in production.' },
      { number: '05', title: 'Handover',        description: 'Full documentation and training so your team can use and maintain the tool independently.' },
    ],
    faqs: [
      { question: 'What kinds of tasks can be automated?',     answer: 'Data entry, report generation, email follow-ups, invoice processing, inventory updates, social media posting, and more.' },
      { question: 'Do I need technical knowledge to use it?',  answer: 'No. We build tools with your team in mind — simple interfaces, clear outputs, no coding required.' },
      { question: 'What tools do you integrate with?',         answer: 'Google Sheets, Notion, Zalo, email platforms, CRM systems, e-commerce platforms, and custom APIs.' },
      { question: 'How do I know if I need an automation tool?', answer: 'If your team does the same task more than 10 times per week, it\'s worth automating. Let\'s audit it together.' },
    ],
  },
  {
    id: 'social',
    slug: 'facebook-management',
    headline: 'YOUR BRAND, ACTIVE AND CONSISTENT ONLINE',
    subheadline: 'Strategic content, consistent posting, and community management that builds real audience trust and drives measurable results.',
    capabilities: [
      { icon: 'PenTool',   title: 'Content Strategy',      description: 'We build a content plan aligned to your audience, your sales cycle, and your brand voice.' },
      { icon: 'Calendar',  title: 'Consistent Posting',    description: 'Scheduled, on-brand posts delivered without gaps — your page stays active and relevant.' },
      { icon: 'MessageCircle', title: 'Community Management', description: 'We respond to comments and messages promptly, keeping your audience engaged and converting.' },
      { icon: 'TrendingUp', title: 'Performance Tracking', description: 'Monthly reports on reach, engagement, and leads generated — so you see real ROI.' },
    ],
    whyTitle: 'WHY INCONSISTENT SOCIAL MEDIA COSTS YOU MORE THAN NOTHING',
    whyBody: 'A Facebook page that posts sporadically or goes quiet for weeks signals to potential customers that your business is inactive or untrustworthy. Consistency is the single biggest driver of organic reach and audience trust. We manage your page like it\'s our own — with strategy, not just content.',
    subServices: [
      { number: '01', category: 'STRATEGY',   title: 'Content Planning & Calendar' },
      { number: '02', category: 'CONTENT',    title: 'Post Design & Copywriting'   },
      { number: '03', category: 'COMMUNITY',  title: 'Comment & Inbox Management'  },
      { number: '04', category: 'REPORTING',  title: 'Monthly Performance Reports' },
    ],
    process: [
      { number: '01', title: 'Brand Audit',       description: 'We review your current page, audience, and competitors to understand where you stand.' },
      { number: '02', title: 'Strategy Build',    description: 'We define your content pillars, tone of voice, and posting frequency.' },
      { number: '03', title: 'Content Creation',  description: 'We produce designed posts and copy — submitted for your approval before publishing.' },
      { number: '04', title: 'Publishing',        description: 'Scheduled and posted at optimal times for your audience timezone and behavior.' },
      { number: '05', title: 'Report & Refine',   description: 'Monthly performance review with recommendations for the next month.' },
    ],
    faqs: [
      { question: 'How many posts per month?',           answer: 'Our standard package includes 12–20 posts per month depending on the plan. Custom frequencies available.' },
      { question: 'Do you run paid ads too?',            answer: 'We can manage ad creative and strategy. Ad spend budget is handled separately by the client.' },
      { question: 'Can I approve posts before they go live?', answer: 'Yes. All content goes through a review cycle before publishing.' },
      { question: 'What if I already have content I want to use?', answer: 'We can incorporate your existing assets and brand materials into the content plan.' },
    ],
  },
]
