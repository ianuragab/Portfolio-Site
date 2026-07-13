export type Article = {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  tags: string[];
  relatedProjectSlugs: string[];
  markdown: string;
  draft?: boolean;
};

export const articles: Article[] = [];

export const plannedWritingTopics = [
  "React performance",
  "Next.js architecture",
  "React Native development",
  "TypeScript patterns",
  "Frontend architecture",
  "Developer tooling",
  "Engineering lessons from B2B products",
];

export const getPublishedArticles = () =>
  articles.filter((article) => !article.draft);

export const getArticleBySlug = (slug: string) =>
  getPublishedArticles().find((article) => article.slug === slug);
