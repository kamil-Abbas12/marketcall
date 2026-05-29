export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  authorTitle: string;
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  content: string;
  canonicalUrl?: string;
  ogImage?: string;
  coverImage?: string; // filename inside /images/blog/, e.g. "how-to-measure-marketing-performance.webp"
  keywords: string[];
}