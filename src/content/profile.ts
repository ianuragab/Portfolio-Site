export const SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://anuragdev-omega.vercel.app";

export const GOOGLE_SITE_VERIFICATION =
  import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || "";

export const profile = {
  name: "Anurag Bhardwaj",
  handle: "ianuragab",
  role: "Software Engineer",
  company: "bijnis",
  companyLegalName: "Bizcrum InfoTech",
  location: "New Delhi, India",
  siteUrl: SITE_URL,
  profileImage: "/images/abLogo.png",
  profileImageAlt: "AB monogram used by Anurag Bhardwaj",
  socialPreviewImage: "/images/anurag-bhardwaj-software-engineer-og.jpg",
  resumeUrl: "/images/anurag-july.pdf",
  email: "im.anurag.bhardwaj@gmail.com",
  biography:
    "I’m Anurag Bhardwaj, also known as ianuragab. I’m a software engineer based in New Delhi, building web and mobile products with React, Next.js, React Native, TypeScript and Node.js.",
  shortHeadline: "I build fast, maintainable web and mobile products.",
  expertise: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "REST APIs",
    "MongoDB",
    "Jenkins",
    "Jira",
    "Slack",
    "Git",
    "GitLab",
    "2D marketing games",
  ],
  principles: [
    "Keep product flows understandable before adding visual flourish.",
    "Prefer reusable interfaces and typed boundaries over one-off screens.",
    "Make performance, accessibility and maintainability part of delivery, not a cleanup phase.",
    "Write public case studies honestly, without exposing private product or company details.",
  ],
  currentLearning: [
    "Frontend architecture for growing React products",
    "React Native product quality and release workflows",
    "Production delivery workflows with Jenkins, Jira, Slack, Git and GitLab",
    "Type-safe patterns for maintainable JavaScript applications",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/ianuragab/",
    github: "https://github.com/ianuragab",
    instagram: "https://www.instagram.com/ianuragab",
  },
  contentTodos: [
    "Confirm exact start and end months for each professional role.",
    "Add public source or live links for MediReminder and Expense Tracker if they are available.",
    "Add verified article drafts before publishing writing detail pages.",
    "Replace the AB monogram with a real professional profile image if Anurag wants a photo-led identity.",
  ],
  lastUpdated: "2026-07-13",
} as const;

export type Profile = typeof profile;
