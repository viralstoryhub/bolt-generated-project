export interface Post {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content?: string; // Optional full content if you expand to individual blog post pages
}
