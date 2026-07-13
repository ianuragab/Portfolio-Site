import { renderToString } from "react-dom/server";
import App from "./App";
import { getPublishedArticles } from "./content/articles";
import { profile, SITE_URL } from "./content/profile";
import { projects, getProjectBySlug } from "./content/projects";
import { experiences } from "./content/experience";
import {
  articleMetadata,
  defaultMeta,
  pageMetadata,
  projectMetadata,
  renderHead,
  type PageMeta,
} from "./lib/seo";

export type RouteDefinition = {
  path: string;
  lastmod: string;
  priority: string;
};

export const routes: RouteDefinition[] = [
  { path: "/", lastmod: profile.lastUpdated, priority: "1.0" },
  { path: "/about", lastmod: profile.lastUpdated, priority: "0.8" },
  {
    path: "/projects",
    lastmod: latestDate(projects.map((project) => project.lastUpdated)),
    priority: "0.9",
  },
  ...projects.map((project) => ({
    path: `/projects/${project.slug}`,
    lastmod: project.lastUpdated,
    priority: project.featured ? "0.8" : "0.7",
  })),
  {
    path: "/experience",
    lastmod: latestDate(experiences.map((item) => item.lastUpdated)),
    priority: "0.8",
  },
  { path: "/writing", lastmod: profile.lastUpdated, priority: "0.6" },
  ...getPublishedArticles().map((article) => ({
    path: `/writing/${article.slug}`,
    lastmod: article.updatedDate,
    priority: "0.7",
  })),
  { path: "/contact", lastmod: profile.lastUpdated, priority: "0.7" },
];

export const getMetaForPath = (path: string): PageMeta => {
  if (path in pageMetadata) {
    return pageMetadata[path as keyof typeof pageMetadata];
  }

  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    const project = getProjectBySlug(projectMatch[1]);
    if (project) return projectMetadata(project);
  }

  const articleMatch = path.match(/^\/writing\/([^/]+)$/);
  if (articleMatch) {
    const article = getPublishedArticles().find(
      (item) => item.slug === articleMatch[1],
    );
    if (article) return articleMetadata(article);
  }

  return {
    path,
    title: "Page not found | Anurag Bhardwaj",
    description:
      "The requested page could not be found on Anurag Bhardwaj’s portfolio.",
    image: defaultMeta.image,
  };
};

export const renderRoute = (path: string) => renderToString(<App path={path} />);

export const renderDocument = (path: string, assetTags: string) => {
  const meta = getMetaForPath(path);
  const html = renderRoute(path);

  return `<!doctype html>
<html lang="en">
  <head>
${renderHead(meta)}
${assetTags}
  </head>
  <body>
    <div id="root">${html}</div>
  </body>
</html>`;
};

export const generateSitemap = () => {
  const base = SITE_URL.replace(/\/$/, "");
  const entries = routes
    .map(
      (route) => `  <url>
    <loc>${base}${route.path === "/" ? "/" : route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
};

export const generateRobots = () => `User-agent: *
Allow: /
Disallow: /api/
Disallow: /preview/
Disallow: /private/
Disallow: /*.html$

Sitemap: ${SITE_URL.replace(/\/$/, "")}/sitemap.xml
`;

function latestDate(dates: string[]) {
  const sortedDates = [...dates].sort();
  return sortedDates[sortedDates.length - 1] || profile.lastUpdated;
}
