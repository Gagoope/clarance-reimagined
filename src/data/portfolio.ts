import {
  ArrowRight,
  Boxes,
  ClipboardList,
  Cpu,
  Database,
  Globe,
  Layers,
  LineChart,
  Server,
  ShoppingCart,
  Sparkles,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const WHATSAPP_LOCAL = "77447823";
export const WHATSAPP_INTL = "26777447823";
export const EMAIL = "meragcm@gmail.com";
export const GITHUB = "https://github.com/Gagoope";
export const CV_PATH = "/assets/Gagoope_Clarance_Merafhe_CV.pdf";
export const PROFILE_IMG = "/assets/gcm-profile.jpeg";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_INTL}?text=Hi%20Gagoope%2C%20I%27d%20like%20to%20discuss%20a%20project.`;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const heroTech = [
  "SAP Business One",
  "C#",
  ".NET",
  "PHP",
  "SQL Server",
  "REST APIs",
  "IIS",
];

export const metrics: { value: number; suffix?: string; label: string }[] = [
  { value: 500, suffix: "+", label: "Journal entries processed per batch" },
  { value: 0, label: "Production posting errors" },
  { value: 7, label: "Systems delivered or specified" },
  { value: 1, suffix: "+ yr", label: "SAP Business One delivery" },
];

export const domains: {
  label: string;
  icon: LucideIcon;
  body: string;
  items: string[];
}[] = [
  {
    label: "Finance",
    icon: LineChart,
    body: "Automated posting and reporting for finance teams.",
    items: ["Journal automation", "CSV imports", "Reconciliation", "Financial reporting"],
  },
  {
    label: "Operations",
    icon: Workflow,
    body: "Workflows that move approvals instead of paperwork.",
    items: ["Workflow automation", "Approvals", "Inventory processes", "Business systems"],
  },
  {
    label: "Data",
    icon: Database,
    body: "Data that teams can actually act on.",
    items: ["SQL reporting", "Dashboards", "Data transformation", "Analytics"],
  },
  {
    label: "Integrations",
    icon: Boxes,
    body: "Systems that talk to each other, reliably.",
    items: ["REST APIs", "SAP Business One", "Third-party systems", "Platform integrations"],
  },
];

export const services: {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
}[] = [
  {
    n: "01",
    icon: Server,
    title: "SAP Business One Development",
    desc: "Custom SAP Business One integrations, add-ons, automation and business workflows.",
    tags: ["DI API", "UI API", "PHP", "C#"],
  },
  {
    n: "02",
    icon: Workflow,
    title: "Business Process Automation",
    desc: "Replace repetitive manual processes with reliable automated workflows.",
    tags: ["Batch jobs", "Validation", "Email workflow"],
  },
  {
    n: "03",
    icon: Globe,
    title: "Enterprise Web Applications",
    desc: "Full-stack business applications designed around real operational requirements.",
    tags: ["PHP", "IIS", "React", "TypeScript"],
  },
  {
    n: "04",
    icon: Layers,
    title: "API Development & Integration",
    desc: "Secure REST APIs and integrations connecting enterprise systems.",
    tags: ["REST", "Swagger", "Auth"],
  },
  {
    n: "05",
    icon: Database,
    title: "Database & Reporting",
    desc: "SQL Server, MySQL, reporting pipelines, dashboards and data-driven applications.",
    tags: ["SQL Server", "MySQL", "Crystal Reports"],
  },
  {
    n: "06",
    icon: Wrench,
    title: "System Modernisation",
    desc: "Modernising legacy applications, integrations and business processes.",
    tags: ["Refactoring", "Migrations", "Deployment"],
  },
];

export type Project = {
  id: string;
  title: string
  category: "SAP" | "Automation" | "Web" | "Enterprise" | "Data";
  client: string;
  period: string;
  icon: LucideIcon;
  short: string;
  problem: string;
  approach: string;
  architecture: string[];
  stack: string[];
  implementation: string[];
  result: string;
  impact: string;
  image?: string;
  demoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "sap-journal",
    image: "/assets/work/JE.jpg",
    title: "SAP Business One Journal Automation",
    category: "SAP",
    client: "RPC Data Limited",
    period: "Apr 2026 – Jul 2026",
    icon: Server,
    short:
      "CSV-to-SAP add-on that validates, maps and posts up to 500 journal entries in a single controlled batch.",
    problem:
      "Finance teams were manually entering large volumes of journal data into SAP Business One.",
    approach:
      "Built an automated CSV-to-SAP workflow with validation, mapping and controlled posting.",
    architecture: [
      "CSV",
      "Validation",
      "Field Mapping",
      "Business Rules",
      "SAP DI API",
      "SAP Business One",
    ],
    stack: ["PHP", "SAP Business One", "DI API", "SQL Server", "REST/API"],
    implementation: [
      "Row-level CSV validation before anything touches the ledger",
      "Configurable field mapping to SAP journal structures",
      "Business rules applied per batch, with a controlled posting step",
      "Batch of up to 500 entries posted in a single run",
    ],
    result:
      "Up to 500 journal entries posted per batch with no posting errors recorded in production.",
    impact:
      "Month-end journal capture moved from repetitive manual entry to a reviewed, repeatable batch process.",
    featured: true,
  },
  {
    id: "pos",
    image: "/assets/work/pos.png",
    title: "Point of Sale Platform",
    category: "Web",
    client: "Personal product",
    period: "Jul 2026 – Aug 2026",
    icon: ShoppingCart,
    short:
      "Full point of sale platform with real-time inventory and transaction synchronisation.",
    problem:
      "Small retailers track stock and sales separately, so inventory drifts away from reality.",
    approach:
      "Designed a checkout-first platform where each sale updates inventory and transaction records in real time.",
    architecture: ["Checkout UI", "PHP Application", "Business Rules", "MySQL", "Reports"],
    stack: ["PHP", "MySQL", "JavaScript"],
    implementation: [
      "Optimised checkout flow for speed of capture",
      "Real-time inventory adjustment per transaction",
      "Transaction history and sales reporting",
      "Read-only demo access for reviewers",
    ],
    result: "Deployed and running as a live demo environment.",
    impact: "Shows end-to-end product delivery: data model, UI, deployment and access control.",
    demoUrl: "https://motswedi.liveblog365.com/login.php",
  },
  {
    id: "nardi-approvals",
    image: "/assets/work/approved.jpg",
    title: "Request & Approval System",
    category: "Enterprise",
    client: "NARDI",
    period: "May 2025 – May 2026",
    icon: Layers,
    short: "Multi-level internal request and approval workflow with email notifications.",
    problem: "Internal requests moved by email and paper, with no visibility on where they stood.",
    approach:
      "Built a role-based request system with multi-level approvals and automated notifications.",
    architecture: ["Requester", "Web App (PHP / IIS)", "Approval Rules", "MySQL", "Email"],
    stack: ["PHP", "IIS", "MySQL", "Mailtrap"],
    implementation: [
      "Multi-level approval chain with role-based access",
      "Email notification at each stage",
      "Request history and status tracking",
      "Deployed on internal IIS infrastructure",
    ],
    result: "Requests and approvals handled in one system with a traceable audit trail.",
    impact: "Approval status became visible to everyone involved instead of living in inboxes.",
  },
  {
    id: "iduela",
    image: "/assets/work/HR_and_payroll.jpg",
    title: "IDuela HR & Payroll Configuration",
    category: "Enterprise",
    client: "NARDI",
    period: "Oct 2024 – Dec 2024",
    icon: Users,
    short: "Configured HR and payroll modules and supported deployment into production use.",
    problem: "HR and payroll processes needed to be reflected correctly inside the IDuela system.",
    approach:
      "Mapped operational requirements to module configuration, then supported rollout and verification.",
    architecture: ["Requirements", "Module Configuration", "Validation", "Deployment", "Support"],
    stack: ["IDuela", "HR & Payroll", "SQL"],
    implementation: [
      "Requirement gathering with HR stakeholders",
      "Module configuration aligned to operational rules",
      "Validation of payroll outputs before go-live",
      "Deployment support and handover",
    ],
    result: "Modules deployed successfully and aligned to operational requirements.",
    impact: "Configuration work grounded in the process it had to support, not just the software.",
  },
  {
    id: "loan-system",
    image: "/assets/work/Loan_MS.png",
    title: "Loan Management System Specification",
    category: "Data",
    client: "Thobela Pawn Shop",
    period: "Jul 2024 – Dec 2024",
    icon: ClipboardList,
    short:
      "Specification covering loan origination, approval, repayment tracking and reporting.",
    problem: "Loan records were informal, making repayment tracking and reporting unreliable.",
    approach:
      "Produced a functional specification and data model covering the full loan lifecycle.",
    architecture: ["Origination", "Approval", "Repayment Tracking", "Database", "Reporting"],
    stack: ["SQL", "PHP", "Requirements analysis"],
    implementation: [
      "Process interviews and lifecycle mapping",
      "Data model for loans, repayments and clients",
      "Approval and status rules",
      "Reporting requirements defined up front",
    ],
    result: "Specification delivered as the blueprint for implementation.",
    impact: "Demonstrates analysis and architecture work ahead of writing code.",
  },
  {
    id: "attendance",
    image: "/assets/work/Attendance_system.jpg",
    title: "Automated Attendance Tracking",
    category: "Automation",
    client: "Botho University",
    period: "2023",
    icon: Cpu,
    short: "Java and Arduino UNO system with keypad interfacing to automate attendance capture.",
    problem: "Attendance was captured on paper and re-entered by hand afterwards.",
    approach: "Integrated a keypad-driven Arduino device with a Java application for direct capture.",
    architecture: ["Keypad", "Arduino UNO", "Serial Interface", "Java Application", "Records"],
    stack: ["Java", "Arduino", "Embedded"],
    implementation: [
      "Keypad interfacing on Arduino UNO",
      "Serial communication into a Java application",
      "Record storage and lookup",
      "End-to-end capture without paper",
    ],
    result: "Attendance captured automatically at the point of entry.",
    impact: "Early hardware-to-software integration experience.",
  },
  {
    id: "portfolio",
    image: "/assets/work/portfolio.jpg",
    title: "Developer Portfolio Platform",
    category: "Web",
    client: "Self",
    period: "2026",
    icon: Sparkles,
    short: "Responsive portfolio built with React and TypeScript, tuned for performance.",
    problem: "Technical work needed a presentation that stood on its own.",
    approach: "Built a component-driven site with an accessible, responsive design system.",
    architecture: ["React", "TypeScript", "Design tokens", "Static hosting"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    implementation: [
      "Token-based theming with dark and light modes",
      "Scroll-reveal and reduced-motion support",
      "SEO metadata and structured data",
      "Deployed to static hosting",
    ],
    result: "Live, fast and fully responsive.",
    impact: "The site you're reading now.",
  },
];

export const filters = ["All", "SAP", "Automation", "Web", "Enterprise", "Data"] as const;

export const techGroups: { group: string; items: { name: string; use: string }[] }[] = [
  {
    group: "Enterprise",
    items: [
      { name: "SAP Business One", use: "Add-ons, automation and business workflows" },
      { name: "DI API", use: "Programmatic posting into SAP documents" },
      { name: "UI API", use: "Extending SAP screens and forms" },
      { name: "IIS", use: "Hosting internal business applications" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "C#", use: "SAP add-on and service development" },
      { name: ".NET", use: "Enterprise application logic" },
      { name: "PHP", use: "Business web applications and integrations" },
      { name: "REST APIs", use: "Connecting systems securely" },
    ],
  },
  {
    group: "Database",
    items: [
      { name: "SQL Server", use: "SAP data, reporting and queries" },
      { name: "MySQL", use: "Application databases and reporting" },
      { name: "Crystal Reports", use: "Operational and financial reports" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "HTML / CSS", use: "Structure and layout" },
      { name: "JavaScript", use: "Interactive application behaviour" },
      { name: "React / TypeScript", use: "Typed component-driven interfaces" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git & GitHub", use: "Version control and collaboration" },
      { name: "Swagger", use: "Documenting and testing APIs" },
      { name: "Visual Studio", use: "C# / .NET development" },
    ],
  },
];

export const processSteps = [
  { n: "01", title: "Discover", body: "Understand the business process and requirements." },
  { n: "02", title: "Design", body: "Design the architecture, workflow and user experience." },
  { n: "03", title: "Build", body: "Develop the application, integration or automation." },
  { n: "04", title: "Test", body: "Validate functionality, data integrity and edge cases." },
  { n: "05", title: "Deploy", body: "Deploy into the target infrastructure." },
  { n: "06", title: "Support", body: "Monitor, improve and maintain the solution." },
];

export const whyWorkWithMe = [
  {
    label: "Business-first engineering",
    body: "I don't just build software; I understand the process the software needs to improve.",
  },
  {
    label: "Enterprise experience",
    body: "Focused on systems such as SAP Business One, databases, APIs and business applications.",
  },
  {
    label: "End-to-end delivery",
    body: "From requirements and architecture to development, deployment and support.",
  },
  {
    label: "Automation mindset",
    body: "I look for repetitive processes that software can eliminate.",
  },
];

export const architectureFlow = [
  { label: "User", note: "Finance, operations or field team" },
  { label: "Web / Mobile Application", note: "Capture, review and approval interfaces" },
  { label: "REST API", note: "Authenticated boundary between client and logic" },
  { label: "Business Logic", note: "Validation, mapping and process rules" },
  { label: "Database / SAP Business One", note: "SQL Server, MySQL, SAP documents" },
  { label: "Reporting / Automation", note: "Dashboards, batch jobs, scheduled runs" },
];

export const education = [
  {
    id: "EDU-001",
    kind: "Tertiary · 2024",
    title: "Bachelor of Engineering (Honours) in Computer Engineering",
    sub: "Minor in Computer Science · Gaborone, Botswana",
  },
  {
    id: "EDU-002",
    kind: "Coursework · 2023",
    title: "Automated Attendance Tracking",
    sub: "Botho University — Java & Arduino UNO, keypad interfacing",
  },
  {
    id: "EDU-003",
    kind: "IT Attachment · 2022",
    title: "IT Support & Teaching Practice",
    sub: "Kutlwano JSS — OS installation, server management, computer basics",
  },
  { id: "EDU-004", kind: "Secondary · 2017", title: "BGCSE", sub: "Nata, Botswana" },
  { id: "EDU-005", kind: "Junior · 2015", title: "Junior Certificate", sub: "Gweta, Botswana" },
  { id: "EDU-006", kind: "Primary · 2012", title: "PSLE", sub: "Nata, Botswana" },
];

export const volunteer = {
  title: "Volunteer Coordinator — Village Clean-Up",
  org: "Kgotla Community Initiative, Gabane Village, Botswana",
  period: "May 2025 – Present",
  body:
    "Supported regular kgotla sessions mobilising community members for village-wide clean-ups — coordinating attendance, planning activities and communicating across communal areas.",
};

export const arrowIcon = ArrowRight;
