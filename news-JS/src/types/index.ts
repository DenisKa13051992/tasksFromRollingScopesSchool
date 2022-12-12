interface NewsItemSource {
  id: string | null;
  name: string;
  }
  
  export interface NewsItem {
  author: string | null;
  content: string;
  description: string;
  publishedAt: string;
  source: NewsItemSource;
  title: string;
  url: string;
  urlToImage: string;
  }
  
  export interface ArticleData {
  status: string;
  articles: NewsItem[];
  }
  
  export interface SourcesItem {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
  }
  
  export interface SourcesData {
  status: string;
  totalResults: number;
  sources: SourcesItem[];
  }