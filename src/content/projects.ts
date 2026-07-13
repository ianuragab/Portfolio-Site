export type Project = {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  role: string;
  builtFor: string;
  stack: string[];
  image: string;
  imageAlt: string;
  keyChallenge: string;
  technicalDecision: string;
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  lastUpdated: string;
  context: string;
  constraints: string[];
  responsibilities: string[];
  approach: string[];
  architecture: string[];
  decisions: string[];
  challenges: { challenge: string; solution: string }[];
  considerations: string[];
  results: string[];
  lessons: string[];
};

export const projects: Project[] = [
  {
    slug: "bijnis-retailer-platform",
    name: "Bijnis Retailer B2B E-commerce Website",
    summary:
      "A retailer B2B e-commerce website for browsing products, managing account flows and completing checkout.",
    problem:
      "Retailer users need a reliable B2B e-commerce website for discovery, product evaluation, checkout, account management, coupons, wallet, returns and COD delivery flows.",
    role: "Software Engineer contributing to retailer web product modules",
    builtFor: "bijnis retailer users",
    stack: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "REST APIs",
      "Jenkins",
      "GitLab",
    ],
    image: "/images/bijnis-retailer-commerce-preview.jpg",
    imageAlt: "Bijnis retailer B2B e-commerce website screenshot",
    keyChallenge:
      "Keeping discovery, product detail, checkout and account flows reliable while working with production APIs and evolving business requirements.",
    technicalDecision:
      "Use typed React and Next.js components with clear state and API boundaries for maintainable retailer web flows.",
    outcome:
      "Shipped production-facing retailer B2B e-commerce web work while keeping confidential product details private.",
    liveUrl: "https://www.bijnis.com",
    featured: true,
    lastUpdated: "2026-07-13",
    context:
      "This is current professional work at bijnis. The public case study intentionally avoids private code, customer data, internal architecture and company metrics.",
    constraints: [
      "Public information only",
      "No customer data or internal bijnis architecture",
      "Production UX needed to stay fast and predictable",
    ],
    responsibilities: [
      "Build and maintain retailer-facing B2B e-commerce web interfaces",
      "Work on home, categories, PLP and PDP surfaces",
      "Contribute to checkout, favorites, account, coupons, wallet, returns and COD delivery flows",
      "Integrate UI modules with REST APIs",
      "Work with TypeScript and shared state patterns",
      "Improve reusable component quality across product surfaces",
    ],
    approach: [
      "Break complex commerce screens into explicit interface states",
      "Keep API integration concerns separated from presentational components",
      "Use clear loading, empty and error states where product flows require them",
      "Coordinate product delivery through Jira, Slack, Git, GitLab and Jenkins workflows",
    ],
    architecture: [
      "React and Next.js UI components",
      "Redux Toolkit state slices",
      "REST API data boundaries",
      "Reusable home, category, PLP, PDP and checkout components",
      "Account, coupons, wallet, return and COD delivery web flows",
    ],
    decisions: [
      "Keep this public write-up high level to protect confidential business details",
      "Prefer maintainable component composition over animation-heavy UI",
      "Treat accessibility and responsive behavior as part of the feature surface",
    ],
    challenges: [
      {
        challenge:
          "Publicly presenting professional work without exposing private implementation details.",
        solution:
          "Documented responsibilities, technology and engineering priorities without publishing internal metrics, diagrams or source details.",
      },
    ],
    considerations: [
      "Readable product states",
      "Responsive UI behavior",
      "Maintainable component boundaries",
      "Retailer checkout clarity",
      "Account and wallet flow usability",
      "Performance-conscious rendering for commerce flows",
    ],
    results: [
      "Contributed to production-facing retailer B2B e-commerce web modules",
      "Worked on home, categories, PLP, PDP, checkout, favorites, account, coupons, wallet, return and COD delivery flows",
      "Improved the public portfolio’s explanation of the work without disclosing confidential information",
    ],
    lessons: [
      "Business software needs clarity more than spectacle",
      "Public case studies for employer work should focus on engineering judgment, not private numbers",
    ],
  },
  {
    slug: "bank-transaction-system",
    name: "Bank Transaction System",
    summary:
      "An in-progress backend banking system project inspired by an advanced Node.js, Express and MongoDB bank transaction system build.",
    problem:
      "Banking workflows need careful backend modeling for accounts, transaction records, balances and secure API boundaries.",
    role: "Backend project developer",
    builtFor: "learning advanced backend transaction-system architecture",
    stack: ["Node.js", "Express", "MongoDB", "REST APIs", "JavaScript"],
    image: "/images/bank-transaction-system-preview.jpg",
    imageAlt: "Bank transaction system backend project preview",
    keyChallenge:
      "Designing transaction flows so account updates, transaction history and error states stay predictable.",
    technicalDecision:
      "Use Node.js, Express and MongoDB to model account and transaction APIs with clear backend service boundaries.",
    outcome:
      "In progress: building a stronger backend project around banking transactions without presenting it as a production banking product.",
    featured: true,
    lastUpdated: "2026-07-13",
    context:
      "This project is inspired by the public video reference “Advanced Backend Project | Learn Bank Transaction System with Node.js, Express & MongoDB” by Sheryians Coding School.",
    constraints: [
      "Educational/in-progress project, not a real banking product",
      "No real customer, account, card or transaction data",
      "No security claims beyond the project scope",
    ],
    responsibilities: [
      "Model backend entities for account and transaction workflows",
      "Build REST API endpoints with Express",
      "Use MongoDB for persistent transaction records",
      "Handle request validation, error states and predictable API responses",
    ],
    approach: [
      "Separate account, transaction and user-facing API concerns",
      "Keep transaction state changes explicit",
      "Use realistic but dummy data while developing the system",
    ],
    architecture: [
      "Express API routes",
      "MongoDB models for accounts and transactions",
      "Service-layer transaction logic",
      "Validation and error-response boundaries",
    ],
    decisions: [
      "Describe the project as in progress until the implementation is complete",
      "Avoid real financial data, credentials or unsupported security claims",
      "Use the case study to show backend architecture thinking",
    ],
    challenges: [
      {
        challenge:
          "Representing banking transactions without implying production-grade financial compliance.",
        solution:
          "Framed the project as an educational backend system and kept all data and outcomes qualitative.",
      },
    ],
    considerations: [
      "Predictable transaction state",
      "Clear error handling",
      "Dummy data only",
      "Readable API structure",
    ],
    results: [
      "In-progress backend project added to the portfolio as current work",
      "Demonstrates Node.js, Express, MongoDB and REST API architecture practice",
    ],
    lessons: [
      "Financial-domain projects need careful language and data handling",
      "Transaction systems are a useful way to practice backend consistency",
    ],
  },
  {
    slug: "medi-reminder-app",
    name: "MediReminder App",
    summary:
      "A React Native mobile project for managing medication reminder records.",
    problem:
      "Medication schedules are easy to miss when reminders and records are scattered.",
    role: "Creator and mobile app developer",
    builtFor: "personal health reminder use cases",
    stack: ["React Native", "iOS", "Android", "CRUD"],
    image: "/images/mediReminder.jpg",
    imageAlt: "MediReminder React Native app screenshot",
    keyChallenge:
      "Creating a mobile CRUD flow that stays simple enough for repeated reminder management.",
    technicalDecision:
      "Use React Native to keep one product codebase aligned across iOS and Android.",
    outcome:
      "Built a focused mobile app project demonstrating cross-platform product UI and stateful CRUD flows.",
    featured: true,
    lastUpdated: "2026-06-30",
    context:
      "This personal project is represented in the existing portfolio as a healthcare mobile app.",
    constraints: [
      "No public repository link is currently available in the local portfolio data",
      "Health-related UI must be direct and easy to scan",
      "Project claims are limited to the existing portfolio record",
    ],
    responsibilities: [
      "Design the app flow",
      "Build React Native screens",
      "Implement create, read, update and delete interactions",
      "Prepare app screenshots for portfolio presentation",
    ],
    approach: [
      "Focus screens around reminder records",
      "Keep actions explicit and easy to repeat",
      "Use mobile-first layout and readable states",
    ],
    architecture: [
      "React Native screen structure",
      "Stateful CRUD interactions",
      "Shared mobile UI components",
      "iOS and Android delivery target",
    ],
    decisions: [
      "Use React Native for cross-platform consistency",
      "Keep the case study qualitative because public usage metrics are unavailable",
      "Avoid health claims beyond reminder management",
    ],
    challenges: [
      {
        challenge: "Making repeated data entry feel lightweight on mobile.",
        solution:
          "Kept the project scoped around simple CRUD flows and clear reminder records.",
      },
    ],
    considerations: [
      "Readable mobile typography",
      "Accessible touch targets",
      "Simple reminder management",
      "Cross-platform UI consistency",
    ],
    results: [
      "Completed personal React Native healthcare app project",
      "Demonstrates mobile CRUD product thinking",
    ],
    lessons: [
      "Health-adjacent tools should prefer clarity and restraint",
      "Mobile projects benefit from narrow, repeatable flows",
    ],
  },
  {
    slug: "expense-tracker-app",
    name: "Expense Tracker App",
    summary:
      "A React Native personal finance app for recording and managing expense entries.",
    problem:
      "Personal expenses need a quick mobile capture flow so records stay accurate over time.",
    role: "Creator and mobile app developer",
    builtFor: "personal finance tracking use cases",
    stack: ["React Native", "iOS", "Android", "CRUD"],
    image: "/images/expenseTracker.png",
    imageAlt: "Expense Tracker React Native app screenshot",
    keyChallenge:
      "Keeping expense entry and review flows fast enough for routine use.",
    technicalDecision:
      "Use React Native for one mobile implementation across iOS and Android while focusing on CRUD reliability.",
    outcome:
      "Built a personal finance mobile project that demonstrates cross-platform stateful app development.",
    featured: false,
    lastUpdated: "2026-06-30",
    context:
      "This personal project is represented in the existing portfolio as a finance mobile app.",
    constraints: [
      "No public repository link is currently available in the local portfolio data",
      "No financial advice or private user data is included",
      "Results are described qualitatively because metrics are unavailable",
    ],
    responsibilities: [
      "Design the expense tracking workflow",
      "Build React Native screens",
      "Implement CRUD interactions",
      "Present the app with a real project screenshot",
    ],
    approach: [
      "Center the experience on adding and reviewing expenses",
      "Keep form and list states straightforward",
      "Use mobile layout patterns that work on small screens",
    ],
    architecture: [
      "React Native app screens",
      "Expense record state",
      "CRUD interaction model",
      "Cross-platform mobile UI",
    ],
    decisions: [
      "Keep the feature scope practical",
      "Use existing verified screenshot and stack details",
      "Avoid fake analytics or financial outcomes",
    ],
    challenges: [
      {
        challenge: "Avoiding clutter in a data-entry-heavy mobile app.",
        solution:
          "Focused the project around compact forms, clear records and repeatable CRUD actions.",
      },
    ],
    considerations: [
      "Mobile readability",
      "Form usability",
      "Accessible touch target sizing",
      "Clear empty states",
    ],
    results: [
      "Completed personal React Native finance app project",
      "Shows practical mobile UI and data-flow work",
    ],
    lessons: [
      "Finance tools need low-friction data capture",
      "Qualitative case studies are better than unsupported metrics",
    ],
  },
  {
    slug: "ai-mock-interview-app",
    name: "AI Mock Interview App",
    summary:
      "A Next.js project for practicing interviews with AI-generated prompts and speech-oriented interaction.",
    problem:
      "Interview preparation is hard to practice consistently without a repeatable prompt and feedback loop.",
    role: "Creator and developer",
    builtFor: "developers preparing for interviews",
    stack: ["Next.js", "Gemini AI", "Speech-to-Text API"],
    image: "/images/ai-mock-interview-preview.jpg",
    imageAlt: "AI mock interview app preview screenshot",
    keyChallenge:
      "Designing an interview flow that balances AI responses, speech input and a clear user experience.",
    technicalDecision:
      "Use Next.js for the application structure and integrate AI and speech APIs around a focused interview workflow.",
    outcome:
      "Created a public project that demonstrates AI product thinking with a practical developer workflow.",
    githubUrl: "https://github.com/ianuragab/Mock-Interview",
    featured: true,
    lastUpdated: "2026-06-30",
    context:
      "This personal project explores AI-assisted interview preparation using a modern web stack.",
    constraints: [
      "Keep the flow understandable for repeated practice",
      "Avoid making the AI interaction feel like a black box",
      "Use public APIs without exposing credentials",
    ],
    responsibilities: [
      "Define the interview practice flow",
      "Build the Next.js interface",
      "Connect AI and speech-oriented capabilities",
      "Prepare the project for public GitHub discovery",
    ],
    approach: [
      "Model the product around a clear practice session",
      "Keep the interface focused on questions, responses and review",
      "Treat API integration as a replaceable boundary",
    ],
    architecture: [
      "Next.js application shell",
      "AI prompt and response flow",
      "Speech-to-text interaction boundary",
      "User-facing interview session UI",
    ],
    decisions: [
      "Use a project-specific flow instead of a generic chatbot layout",
      "Prioritize readable prompts and responses over decorative motion",
      "Keep external service details out of the public portfolio",
    ],
    challenges: [
      {
        challenge: "Making AI output useful inside a structured practice flow.",
        solution:
          "Framed the product around interview sessions rather than open-ended conversation.",
      },
    ],
    considerations: [
      "Clear interaction states",
      "Readable question and answer content",
      "Keyboard-accessible controls",
      "No public exposure of API credentials",
    ],
    results: [
      "Public GitHub project available for review",
      "Shows practical use of AI APIs inside a focused product workflow",
    ],
    lessons: [
      "AI features work best when the product defines the job clearly",
      "A simple structure can make advanced APIs easier to understand",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
