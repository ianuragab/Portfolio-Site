export type Experience = {
  slug: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  context: string;
  responsibilities: string[];
  technologies: string[];
  contributions: string[];
  outcomes: string[];
  relatedProjectSlugs: string[];
  lastUpdated: string;
};

export const experiences: Experience[] = [
  {
    slug: "bijnis",
    company: "bijnis",
    position: "Software Engineer",
    location: "New Delhi, India",
    startDate: "Start date to confirm",
    endDate: "Present",
    context:
      "Current product engineering role on bijnis commerce app surfaces, including Buyer and Factory app workflows. Public details are intentionally limited to protect confidential product and customer information.",
    responsibilities: [
      "Build app-side modules for Buyer and Factory product workflows",
      "Work on create and edit product flows in the Buyer app",
      "Contribute to PO and Factory onboarding flows on the app side",
      "Build 2D games for marketing campaign experiences",
      "Work with React, React Native, TypeScript, Redux Toolkit and REST APIs",
      "Translate product requirements into reusable, production-ready UI",
      "Improve maintainability and performance of customer-facing interfaces",
    ],
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "Jenkins",
      "Jira",
      "Slack",
      "Git",
      "GitLab",
      "2D games",
    ],
    contributions: [
      "Contributed to production Buyer and Factory app workflows",
      "Built and improved product create/edit and onboarding app flows",
      "Worked on marketing campaign game experiences",
      "Worked on reusable component and state-management patterns",
      "Balanced product delivery with performance and maintainability concerns",
    ],
    outcomes: [
      "Publicly shareable outcome: shipped production-facing Buyer, Factory and marketing campaign app work for bijnis without exposing private architecture or metrics.",
    ],
    relatedProjectSlugs: ["bijnis-retailer-platform"],
    lastUpdated: "2026-07-13",
  },
  {
    slug: "mobiloitte-technologies",
    company: "Mobiloitte Technologies",
    position: "Software Engineer",
    location: "India",
    startDate: "2024",
    endDate: "2024",
    context:
      "Client-facing software development work using React, Next.js, Node.js, MongoDB and REST API integrations.",
    responsibilities: [
      "Convert Figma designs into responsive React and Next.js interfaces",
      "Integrate JWT authentication and REST APIs",
      "Support Node.js and MongoDB-backed feature delivery",
      "Participate in code review and bug fixing",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "REST APIs", "JWT"],
    contributions: [
      "Built responsive interfaces from high-fidelity design files",
      "Integrated frontend modules with backend APIs",
      "Resolved defects through peer review and debugging",
    ],
    outcomes: [
      "Publicly shareable outcome: contributed to full-stack feature delivery across client projects.",
    ],
    relatedProjectSlugs: [],
    lastUpdated: "2026-06-30",
  },
];
