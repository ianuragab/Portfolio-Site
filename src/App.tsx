import type { ReactNode } from "react";
import { getPublishedArticles, plannedWritingTopics } from "./content/articles";
import type { Article } from "./content/articles";
import { experiences } from "./content/experience";
import { profile } from "./content/profile";
import {
  featuredProjects,
  getProjectBySlug,
  projects,
  type Project,
} from "./content/projects";
import {
  articleSchema,
  breadcrumbSchema,
  profilePageSchema,
  webSiteSchema,
} from "./lib/seo";
import { getTableOfContents, renderMarkdown } from "./lib/markdown";
import "./index.css";

type AppProps = {
  path?: string;
};

type LinkItem = {
  href: string;
  label: string;
};

const primaryNav: LinkItem[] = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

const normalizePath = (path?: string) => {
  const rawPath =
    path || (typeof window !== "undefined" ? window.location.pathname : "/");
  const withoutTrailingSlash = rawPath.replace(/\/$/, "");
  return withoutTrailingSlash || "/";
};

const JsonLd = ({ data }: { data: object }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const ExternalLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <a className={className} href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const ResumeLink = ({ className }: { className?: string }) =>
  profile.resumeUrl ? (
    <a className={className} href={profile.resumeUrl} download>
      Download resume
    </a>
  ) : null;

const Header = () => (
  <header className="site-header">
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
    <div className="header-inner">
      <a className="brand" href="/" aria-label="Anurag Bhardwaj home">
        <span className="brand-mark">AB</span>
        <span>
          <strong>{profile.name}</strong>
          <small>{profile.role}</small>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {primaryNav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-socials" aria-label="Social profiles">
        <ResumeLink />
        <ExternalLink href={profile.socials.linkedin}>
          Anurag Bhardwaj on LinkedIn
        </ExternalLink>
        <ExternalLink href={profile.socials.github}>ianuragab on GitHub</ExternalLink>
      </div>
      <details className="mobile-menu">
        <summary aria-label="Open navigation menu">Menu</summary>
        <nav aria-label="Mobile navigation">
          {primaryNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <ExternalLink href={profile.socials.linkedin}>
            Anurag Bhardwaj on LinkedIn
          </ExternalLink>
          <ExternalLink href={profile.socials.github}>ianuragab on GitHub</ExternalLink>
          <ExternalLink href={profile.socials.instagram}>
            ianuragab on Instagram
          </ExternalLink>
          <ResumeLink />
        </nav>
      </details>
    </div>
  </header>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-grid">
      <div>
        <a className="footer-name" href="/">
          {profile.name}
        </a>
        <p>
          {profile.role} at {profile.company}. Based in {profile.location}.
        </p>
      </div>
      <nav aria-label="Footer navigation">
        <h2>Navigation</h2>
        {primaryNav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <nav aria-label="Footer social profiles">
        <h2>Profiles</h2>
        <ExternalLink href={profile.socials.linkedin}>
          Anurag Bhardwaj on LinkedIn
        </ExternalLink>
        <ExternalLink href={profile.socials.github}>ianuragab on GitHub</ExternalLink>
        <ExternalLink href={profile.socials.instagram}>
          ianuragab on Instagram
        </ExternalLink>
        <ResumeLink />
      </nav>
    </div>
    <p className="footer-bottom">
      © 2026 {profile.name}. Built as a fast, accessible portfolio website.
    </p>
  </footer>
);

const PageShell = ({
  children,
  jsonLd,
}: {
  children: ReactNode;
  jsonLd?: object[];
}) => (
  <>
    <Header />
    <main id="main-content">{children}</main>
    <Footer />
    {jsonLd?.map((item, index) => <JsonLd key={index} data={item} />)}
  </>
);

const SectionHeader = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) => (
  <div className="section-header">
    {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
    <h2>{title}</h2>
    {children ? <p>{children}</p> : null}
  </div>
);

const TagList = ({ items }: { items: readonly string[] | string[] }) => (
  <ul className="tag-list" aria-label="Technology stack">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="project-card">
    <a className="project-image-link" href={`/projects/${project.slug}`}>
      <img
        src={project.image}
        alt={project.imageAlt}
        width="720"
        height="420"
        loading="lazy"
      />
    </a>
    <div className="project-card-body">
      <p className="eyebrow">{project.builtFor}</p>
      <h3>
        <a href={`/projects/${project.slug}`}>{project.name}</a>
      </h3>
      <p>{project.problem}</p>
      <dl className="project-facts">
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Challenge</dt>
          <dd>{project.keyChallenge}</dd>
        </div>
        <div>
          <dt>Decision</dt>
          <dd>{project.technicalDecision}</dd>
        </div>
        <div>
          <dt>Outcome</dt>
          <dd>{project.outcome}</dd>
        </div>
      </dl>
      <TagList items={project.stack} />
      <div className="action-row">
        <a className="button button-primary" href={`/projects/${project.slug}`}>
          Read case study
        </a>
        {project.liveUrl ? (
          <ExternalLink className="button button-secondary" href={project.liveUrl}>
            Live website
          </ExternalLink>
        ) : null}
        {project.githubUrl ? (
          <ExternalLink className="button button-secondary" href={project.githubUrl}>
            GitHub
          </ExternalLink>
        ) : null}
      </div>
    </div>
  </article>
);

const ExperienceCard = ({ item }: { item: (typeof experiences)[number] }) => (
  <article className="timeline-card">
    <div>
      <p className="eyebrow">
        {item.startDate.includes("confirm") ? "" : `${item.startDate} - `}
        {item.endDate}
      </p>
      <h3>{item.position}</h3>
      <p>
        {item.company} · {item.location}
      </p>
    </div>
    <p>{item.context}</p>
    <div className="two-column-list">
      <div>
        <h4>Responsibilities</h4>
        <ul>
          {item.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Public outcomes</h4>
        <ul>
          {item.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </div>
    </div>
    <TagList items={item.technologies} />
    {item.relatedProjectSlugs.length ? (
      <p>
        Related case study:{" "}
        {item.relatedProjectSlugs.map((slug) => {
          const project = getProjectBySlug(slug);
          return project ? (
            <a key={slug} href={`/projects/${slug}`}>
              {project.name}
            </a>
          ) : null;
        })}
      </p>
    ) : null}
  </article>
);

const HomePage = () => {
  const publishedArticles = getPublishedArticles();
  return (
    <PageShell jsonLd={[webSiteSchema(), profilePageSchema()]}>
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">
            Software Engineer at bijnis · New Delhi, India
          </p>
          <h1>Anurag Bhardwaj</h1>
          <p className="hero-headline">
            I build fast, maintainable web and mobile products.
          </p>
          <p>
            I’m Anurag Bhardwaj, also known as ianuragab. I’m a software
            engineer based in New Delhi, building web and mobile products with
            React, Next.js, React Native, TypeScript and Node.js.
          </p>
          <div className="action-row">
            <a className="button button-primary" href="/projects">
              View My Work
            </a>
            <ExternalLink className="button button-secondary" href={profile.socials.linkedin}>
              Connect on LinkedIn
            </ExternalLink>
            <ExternalLink className="text-link" href={profile.socials.github}>
              View GitHub
            </ExternalLink>
            <ResumeLink className="text-link" />
          </div>
        </div>
        <aside className="hero-panel" aria-label="Professional summary">
          <img
            src={profile.profileImage}
            alt={profile.profileImageAlt}
            width="160"
            height="160"
            loading="eager"
          />
          <p>{profile.role}</p>
          <strong>{profile.handle}</strong>
          <span>{profile.location}</span>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Professional proof">
        <span>Software Engineer at bijnis</span>
        <span>Based in New Delhi</span>
        <span>React, Next.js and React Native</span>
        <span>GitHub: ianuragab</span>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Featured projects"
          title="Case studies with context"
        >
          Selected work presented around product problem, engineering decision
          and outcome.
        </SectionHeader>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section split-section">
        <SectionHeader eyebrow="Experience" title="Product engineering evidence">
          Current and prior work, explained through responsibilities and
          publicly shareable outcomes.
        </SectionHeader>
        <div className="timeline-list">
          {experiences.slice(0, 2).map((item) => (
            <ExperienceCard key={item.slug} item={item} />
          ))}
        </div>
        <a className="button button-secondary" href="/experience">
          View experience
        </a>
      </section>

      <section className="section expertise-section">
        <SectionHeader eyebrow="Technical expertise" title="Tools I use in real work">
          Focused on React product interfaces, mobile experiences and practical
          JavaScript systems.
        </SectionHeader>
        <TagList items={profile.expertise} />
      </section>

      <section className="section about-preview">
        <SectionHeader eyebrow="About" title="A clear engineering identity">
          I work best on product surfaces where UX quality, performance and
          maintainable code all matter.
        </SectionHeader>
        <p>
          My public identity is intentionally consistent: Anurag Bhardwaj,
          ianuragab, Software Engineer at bijnis in New Delhi. I build with
          React, Next.js, React Native, TypeScript and Node.js, and I care about
          product flows that remain readable as they grow.
        </p>
        <a className="button button-secondary" href="/about">
          Read about Anurag
        </a>
      </section>

      <section className="section writing-preview">
        <SectionHeader eyebrow="Writing" title="Technical writing">
          Future articles will cover React performance, Next.js architecture,
          React Native development and engineering lessons from product work.
        </SectionHeader>
        {publishedArticles.length ? (
          <div className="article-list">
            {publishedArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="empty-state">
            No public technical articles are published yet. The Markdown writing
            system is ready for verified drafts.
          </p>
        )}
        <a className="button button-secondary" href="/writing">
          View writing
        </a>
      </section>

      <ContactCta />
    </PageShell>
  );
};

const AboutPage = () => (
  <PageShell jsonLd={[profilePageSchema()]}>
    <section className="page-hero section">
      <p className="eyebrow">{profile.handle} · {profile.location}</p>
      <h1>About Anurag Bhardwaj</h1>
      <p>
        I’m Anurag Bhardwaj, a Software Engineer at bijnis in New Delhi. I build
        web and mobile product experiences with React, Next.js, React Native,
        TypeScript, JavaScript and Node.js.
      </p>
    </section>
    <section className="section content-grid">
      <article className="prose-panel">
        <h2>Professional profile</h2>
        <p>
          I use the handle {profile.handle} across my public profiles. My work
          sits around practical product engineering: building maintainable
          interfaces, integrating APIs and shaping mobile or web flows that
          people can use repeatedly without friction.
        </p>
        <p>
          I have worked on B2B commerce at bijnis and client-facing application
          development at Mobiloitte Technologies. Public details on employer
          work stay intentionally high level, because private systems, customer
          data and internal metrics do not belong in a portfolio.
        </p>
        <h2>Engineering principles</h2>
        <ul>
          {profile.principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
        <h2>Current learning focus</h2>
        <ul>
          {profile.currentLearning.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <aside className="side-panel">
        <img
          src={profile.profileImage}
          alt={profile.profileImageAlt}
          width="180"
          height="180"
          loading="lazy"
        />
        <h2>Core stack</h2>
        <TagList items={profile.expertise} />
        <h2>Profiles</h2>
        <div className="stacked-links">
          <ExternalLink href={profile.socials.linkedin}>
            Anurag Bhardwaj on LinkedIn
          </ExternalLink>
          <ExternalLink href={profile.socials.github}>ianuragab on GitHub</ExternalLink>
          <ExternalLink href={profile.socials.instagram}>
            ianuragab on Instagram
          </ExternalLink>
          <ResumeLink />
        </div>
      </aside>
    </section>
    <ContactCta />
  </PageShell>
);

const ProjectsPage = () => (
  <PageShell>
    <section className="page-hero section">
      <p className="eyebrow">Projects</p>
      <h1>Projects by Anurag Bhardwaj</h1>
      <p>
        Case studies for React, Next.js, React Native, TypeScript and Node.js
        work. Each project focuses on the problem, role, technical decision and
        honest outcome.
      </p>
    </section>
    <section className="section">
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  </PageShell>
);

const CaseStudyPage = ({ project }: { project: Project }) => (
  <PageShell
    jsonLd={[
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: project.name, path: `/projects/${project.slug}` },
      ]),
    ]}
  >
    <article className="case-study">
      <header className="page-hero section">
        <p className="eyebrow">Case study</p>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
        <div className="action-row">
          {project.liveUrl ? (
            <ExternalLink className="button button-primary" href={project.liveUrl}>
              Visit live website
            </ExternalLink>
          ) : null}
          {project.githubUrl ? (
            <ExternalLink className="button button-secondary" href={project.githubUrl}>
              View GitHub repository
            </ExternalLink>
          ) : null}
          <a className="button button-secondary" href="/projects">
            All projects
          </a>
        </div>
      </header>

      <section className="section case-image">
        <img
          src={project.image}
          alt={project.imageAlt}
          width="1200"
          height="680"
          loading="lazy"
        />
      </section>

      <section className="section case-layout">
        <div className="case-main">
          <CaseSection title="Project overview">
            <p>{project.summary}</p>
          </CaseSection>
          <CaseSection title="Problem">
            <p>{project.problem}</p>
          </CaseSection>
          <CaseSection title="Context and constraints">
            <p>{project.context}</p>
            <List items={project.constraints} />
          </CaseSection>
          <CaseSection title="My responsibilities">
            <List items={project.responsibilities} />
          </CaseSection>
          <CaseSection title="Technical approach">
            <List items={project.approach} />
          </CaseSection>
          <CaseSection title="Architecture or data flow">
            <List items={project.architecture} />
          </CaseSection>
          <CaseSection title="Important engineering decisions">
            <List items={project.decisions} />
          </CaseSection>
          <CaseSection title="Challenges and solutions">
            {project.challenges.map((item) => (
              <div className="challenge-pair" key={item.challenge}>
                <h3>{item.challenge}</h3>
                <p>{item.solution}</p>
              </div>
            ))}
          </CaseSection>
          <CaseSection title="Performance, accessibility or UX considerations">
            <List items={project.considerations} />
          </CaseSection>
          <CaseSection title="Results">
            <List items={project.results} />
          </CaseSection>
          <CaseSection title="Screenshots">
            <img
              src={project.image}
              alt={project.imageAlt}
              width="900"
              height="520"
              loading="lazy"
            />
          </CaseSection>
          <CaseSection title="Lessons learned">
            <List items={project.lessons} />
          </CaseSection>
        </div>
        <aside className="case-aside">
          <h2>Project facts</h2>
          <dl>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Built for</dt>
              <dd>{project.builtFor}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{project.stack.join(", ")}</dd>
            </div>
            <div>
              <dt>Key challenge</dt>
              <dd>{project.keyChallenge}</dd>
            </div>
            <div>
              <dt>Technical decision</dt>
              <dd>{project.technicalDecision}</dd>
            </div>
            <div>
              <dt>Outcome</dt>
              <dd>{project.outcome}</dd>
            </div>
          </dl>
          <h2>Relevant links</h2>
          <div className="stacked-links">
            {project.liveUrl ? (
              <ExternalLink href={project.liveUrl}>Live website</ExternalLink>
            ) : null}
            {project.githubUrl ? (
              <ExternalLink href={project.githubUrl}>GitHub repository</ExternalLink>
            ) : null}
            <a href="/contact">Contact Anurag about this work</a>
          </div>
        </aside>
      </section>
    </article>
  </PageShell>
);

const CaseSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="case-section">
    <h2>{title}</h2>
    {children}
  </section>
);

const List = ({ items }: { items: string[] }) => (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const ExperiencePage = () => (
  <PageShell>
    <section className="page-hero section">
      <p className="eyebrow">Experience</p>
      <h1>Software engineering experience</h1>
      <p>
        A concise view of Anurag Bhardwaj’s professional work, written as
        evidence of engineering judgment rather than a keyword-heavy resume.
      </p>
    </section>
    <section className="section timeline-list">
      {experiences.map((item) => (
        <ExperienceCard key={item.slug} item={item} />
      ))}
    </section>
    <ContactCta />
  </PageShell>
);

const ArticleCard = ({ article }: { article: Article }) => (
  <article className="article-card">
    <p className="eyebrow">
      {article.publishedDate} · {article.readingTime}
    </p>
    <h3>
      <a href={`/writing/${article.slug}`}>{article.title}</a>
    </h3>
    <p>{article.description}</p>
  </article>
);

const WritingPage = () => {
  const publishedArticles = getPublishedArticles();
  return (
    <PageShell>
      <section className="page-hero section">
        <p className="eyebrow">Writing</p>
        <h1>Technical writing</h1>
        <p>
          A Markdown-ready writing system for articles on React, Next.js, React
          Native, TypeScript, frontend architecture and developer tooling.
        </p>
      </section>
      <section className="section">
        {publishedArticles.length ? (
          <div className="article-list">
            {publishedArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="empty-panel">
            <h2>No public articles yet</h2>
            <p>
              No verified technical articles are published in the repository
              right now. The system supports Markdown content, table of
              contents, reading time, canonical URLs and article structured data
              as soon as drafts are added.
            </p>
            <h3>Planned topics</h3>
            <TagList items={plannedWritingTopics} />
          </div>
        )}
      </section>
      <ContactCta />
    </PageShell>
  );
};

const ArticlePage = ({ article }: { article: Article }) => {
  const toc = getTableOfContents(article.markdown);
  return (
    <PageShell
      jsonLd={[
        articleSchema(article),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Writing", path: "/writing" },
          { name: article.title, path: `/writing/${article.slug}` },
        ]),
      ]}
    >
      <article className="article-page">
        <header className="page-hero section">
          <p className="eyebrow">
            {article.publishedDate} · Updated {article.updatedDate} ·{" "}
            {article.readingTime}
          </p>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </header>
        <section className="section article-layout">
          <aside className="toc" aria-label="Table of contents">
            <h2>Contents</h2>
            <nav>
              {toc.map((item) => (
                <a
                  key={item.id}
                  className={item.level === 3 ? "toc-child" : undefined}
                  href={`#${item.id}`}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </aside>
          <div>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(article.markdown) }}
            />
            <aside className="author-box">
              <h2>About the author</h2>
              <p>
                {profile.name} ({profile.handle}) is a {profile.role} at{" "}
                {profile.company} in {profile.location}.
              </p>
              <a href="/about">Read Anurag’s profile</a>
            </aside>
          </div>
        </section>
      </article>
    </PageShell>
  );
};

const ContactPage = () => (
  <PageShell>
    <section className="page-hero section">
      <p className="eyebrow">Contact</p>
      <h1>Contact Anurag Bhardwaj</h1>
      <p>
        I’m open to relevant software engineering conversations, collaboration
        and product work where React, Next.js, React Native, TypeScript or
        Node.js are useful.
      </p>
    </section>
    <section className="section contact-grid">
      <article className="contact-card">
        <h2>Profiles</h2>
        <div className="stacked-links">
          <ExternalLink href={profile.socials.linkedin}>
            Anurag Bhardwaj on LinkedIn
          </ExternalLink>
          <ExternalLink href={profile.socials.github}>ianuragab on GitHub</ExternalLink>
          <ExternalLink href={profile.socials.instagram}>
            ianuragab on Instagram
          </ExternalLink>
        </div>
      </article>
      <article className="contact-card">
        <h2>Email and location</h2>
        <p>
          Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p>Location: {profile.location}</p>
        <ResumeLink className="button button-secondary" />
      </article>
    </section>
  </PageShell>
);

const ContactCta = () => (
  <section className="section contact-cta">
    <p className="eyebrow">Next step</p>
    <h2>Need a software engineer for a React or mobile product?</h2>
    <p>
      Review Anurag’s projects, inspect the public GitHub work or connect on
      LinkedIn for a focused conversation.
    </p>
    <div className="action-row">
      <a className="button button-primary" href="/contact">
        Contact Anurag
      </a>
      <ExternalLink className="button button-secondary" href={profile.socials.github}>
        View GitHub
      </ExternalLink>
      <ResumeLink className="button button-secondary" />
    </div>
  </section>
);

const NotFoundPage = () => (
  <PageShell>
    <section className="page-hero section">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>
        This page does not exist. Use the navigation to return to Anurag
        Bhardwaj’s portfolio.
      </p>
      <a className="button button-primary" href="/">
        Go home
      </a>
    </section>
  </PageShell>
);

const App = ({ path }: AppProps) => {
  const currentPath = normalizePath(path);
  const projectMatch = currentPath.match(/^\/projects\/([^/]+)$/);
  const articleMatch = currentPath.match(/^\/writing\/([^/]+)$/);

  if (currentPath === "/") return <HomePage />;
  if (currentPath === "/about") return <AboutPage />;
  if (currentPath === "/projects") return <ProjectsPage />;
  if (currentPath === "/experience") return <ExperiencePage />;
  if (currentPath === "/writing") return <WritingPage />;
  if (currentPath === "/contact") return <ContactPage />;

  if (projectMatch) {
    const project = getProjectBySlug(projectMatch[1]);
    return project ? <CaseStudyPage project={project} /> : <NotFoundPage />;
  }

  if (articleMatch) {
    const article = getPublishedArticles().find(
      (item) => item.slug === articleMatch[1],
    );
    return article ? <ArticlePage article={article} /> : <NotFoundPage />;
  }

  return <NotFoundPage />;
};

export default App;
