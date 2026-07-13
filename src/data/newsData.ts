export interface NewsItem {
  id: string
  title: string
  description?: string
  category: string
  image: string
  slug: string
  date: string
}

export const newsCategories = [
  'ALL',
  'THIẾT KẾ WEBSITE',
  'SERN TALK',
  'SERN UNIVERSE',
  'SERN EXPERIENCE',
  'SERN SEO'
]

export const topFeaturedNews: NewsItem = {
  id: '1',
  title: 'News Headline Placeholder: A Glimpse into the Future',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  category: 'SERN Talk',
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  slug: 'placeholder-news-1',
  date: '10/05/2024'
}

export const sideFeaturedNews: NewsItem[] = [
  {
    id: '2',
    title: 'Secondary News Article Placeholder Title Here',
    category: 'Thiết kế Website',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'placeholder-news-2',
    date: '12/04/2024'
  },
  {
    id: '3',
    title: 'Another Interesting Article Placeholder',
    category: 'SERN Universe',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'placeholder-news-3',
    date: '05/04/2024'
  },
  {
    id: '4',
    title: 'Discover the Latest Trends in Our Industry',
    category: 'SERN Experience',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'placeholder-news-4',
    date: '28/03/2024'
  },
  {
    id: '5',
    title: 'Expert Insights and Analysis Placeholder',
    category: 'SERN SEO',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'placeholder-news-5',
    date: '20/03/2024'
  }
]

export const gridNews: NewsItem[] = [
  {
    id: '6',
    title: 'How to Leverage Technology for Growth',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: 'Thiết kế Website',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'placeholder-news-6',
    date: '15/03/2024'
  },
  {
    id: '7',
    title: 'Building Sustainable Business Models',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
    category: 'SERN Universe',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'placeholder-news-7',
    date: '10/03/2024'
  },
  {
    id: '8',
    title: 'The Impact of Artificial Intelligence on Work',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.',
    category: 'SERN Talk',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'placeholder-news-8',
    date: '05/03/2024'
  },
  {
    id: '9',
    title: 'Understanding the Modern Digital Ecosystem',
    description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.',
    category: 'SERN SEO',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'placeholder-news-9',
    date: '28/02/2024'
  }
]
