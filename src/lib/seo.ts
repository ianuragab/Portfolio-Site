import { GOOGLE_SITE_VERIFICATION, profile, SITE_URL } from "../content/profile";
import type { Article } from "../content/articles";
import type { Project } from "../content/projects";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
  type?: "website" | "profile" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export const absoluteUrl = (path = "/") => {
  if (path.startsWith("http")) return path;
  const normalPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL.replace(/\/$/, "")}${normalPath}`;
};

export const defaultMeta: PageMeta = {
  path: "/",
  title: "Anurag Bhardwaj | Software Engineer at bijnis",
  description:
    "Anurag Bhardwaj, also known as ianuragab, is a software engineer in New Delhi building web and mobile products with React, Next.js, React Native, TypeScript and Node.js.",
  ogTitle: "Anurag Bhardwaj - Software Engineer",
  ogDescription:
    "Software engineer at bijnis building fast, maintainable web and mobile products with React, Next.js and React Native.",
  image: profile.socialPreviewImage,
  type: "profile",
};

export const pageMetadata = {
  "/": defaultMeta,
  "/about": {
    path: "/about",
    title: "About Anurag Bhardwaj | Software Engineer in New Delhi",
    description:
      "Learn about Anurag Bhardwaj, ianuragab, a software engineer at bijnis in New Delhi focused on React, Next.js, React Native, TypeScript and Node.js.",
  },
  "/projects": {
    path: "/projects",
    title: "Projects | Anurag Bhardwaj",
    description:
      "Explore software engineering projects by Anurag Bhardwaj, including React, Next.js, React Native, TypeScript and Node.js work.",
  },
  "/experience": {
    path: "/experience",
    title: "Experience | Anurag Bhardwaj",
    description:
      "Professional experience for Anurag Bhardwaj, software engineer at bijnis working with React, TypeScript and modern product engineering workflows.",
  },
  "/writing": {
    path: "/writing",
    title: "Writing | Anurag Bhardwaj",
    description:
      "Technical writing by Anurag Bhardwaj on React, Next.js, React Native, TypeScript, frontend architecture and engineering lessons.",
  },
  "/contact": {
    path: "/contact",
    title: "Contact Anurag Bhardwaj | ianuragab",
    description:
      "Contact Anurag Bhardwaj, ianuragab, a software engineer in New Delhi. Connect on LinkedIn, GitHub, Instagram or email.",
  },
} satisfies Record<string, PageMeta>;

export const projectMetadata = (project: Project): PageMeta => ({
  path: `/projects/${project.slug}`,
  title: `${project.name} Case Study | Anurag Bhardwaj`,
  description: `${project.summary} Built by Anurag Bhardwaj using ${project.stack
    .slice(0, 4)
    .join(", ")}.`,
  image: project.image,
});

export const articleMetadata = (article: Article): PageMeta => ({
  path: `/writing/${article.slug}`,
  title: `${article.title} | Anurag Bhardwaj`,
  description: article.description,
  type: "article",
  publishedTime: article.publishedDate,
  modifiedTime: article.updatedDate,
});

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const renderHead = (meta: PageMeta) => {
  const image = absoluteUrl(meta.image || profile.socialPreviewImage);
  const canonical = absoluteUrl(meta.path);
  const ogTitle = meta.ogTitle || meta.title;
  const ogDescription = meta.ogDescription || meta.description;
  const verificationTag = GOOGLE_SITE_VERIFICATION
    ? `<meta name="google-site-verification" content="${escapeHtml(GOOGLE_SITE_VERIFICATION)}" />`
    : "";

  return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}" />
    <meta name="author" content="${profile.name}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="theme-color" content="#f8f5ee" />
    ${verificationTag}
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" type="image/png" href="/images/abLogo.png" />
    <link rel="apple-touch-icon" href="/images/abLogo.png" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <meta property="og:site_name" content="${profile.name}" />
    <meta property="og:type" content="${meta.type || "website"}" />
    <meta property="og:title" content="${escapeHtml(ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(ogDescription)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:secure_url" content="${image}" />
    <meta property="og:image:type" content="${image.endsWith(".png") ? "image/png" : "image/jpeg"}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(ogTitle)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(ogTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(ogDescription)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="${escapeHtml(ogTitle)}" />
    ${
      meta.publishedTime
        ? `<meta property="article:published_time" content="${meta.publishedTime}" />`
        : ""
    }
    ${
      meta.modifiedTime
        ? `<meta property="article:modified_time" content="${meta.modifiedTime}" />`
        : ""
    }
  `;
};

export const webSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: profile.name,
  alternateName: profile.handle,
  url: absoluteUrl("/"),
});

export const profilePageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": absoluteUrl("/#profile"),
  url: absoluteUrl("/"),
  name: `${profile.name} - ${profile.role}`,
  mainEntity: {
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: profile.name,
    alternateName: profile.handle,
    url: absoluteUrl("/"),
    image: absoluteUrl(profile.profileImage),
    description: profile.biography,
    jobTitle: profile.role,
    worksFor: {
      "@type": "Organization",
      name: profile.company,
    },
    homeLocation: {
      "@type": "Place",
      name: profile.location,
    },
    knowsAbout: profile.expertise,
    sameAs: [
      profile.socials.linkedin,
      profile.socials.github,
      profile.socials.instagram,
    ],
  },
});

export const breadcrumbSchema = (
  items: Array<{ name: string; path: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const articleSchema = (article: Article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  author: {
    "@type": "Person",
    name: profile.name,
    url: absoluteUrl("/about"),
  },
  datePublished: article.publishedDate,
  dateModified: article.updatedDate,
  mainEntityOfPage: absoluteUrl(`/writing/${article.slug}`),
  image: absoluteUrl(profile.socialPreviewImage),
});
