import { createFileRoute } from "@tanstack/react-router";
import { CvPreviewButton } from "@/components/CvPreview";
import { LoadingSplash } from "@/components/LoadingSplash";
import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import {
  Badge,
  Card,
  CheckList,
  Eyebrow,
  IconTile,
  MetaList,
  SectionHead,
  Stat,
  btnGhost,
  btnPrimary,
  btnSecondary,
} from "@/components/ui-kit";
const profileAsset = { url: "/assets/gcm-profile.jpeg" };
import {
  ArrowRight,
  Server,
  Globe,
  Database,
  Code2,
  Layers,
  Cpu,
  Sparkles,
  Rocket,
  ClipboardList,
  Users,
  Zap,
  ShieldCheck,
  Monitor,
  Phone,
  Mail,
  Github,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Quote,
  ShoppingCart,
  HeartHandshake,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Gagoope Clarance Merafhe — SAP B1 & Web Developer" },
      {
        name: "description",
        content:
          "SAP Business One add-on developer and full-stack web engineer based in Botswana. Building ERP integrations, internal tools and database-driven web apps.",
      },
      { property: "og:title", content: "Gagoope Clarance Merafhe — SAP B1 & Web Developer" },
      {
        property: "og:description",
        content:
          "SAP Business One, PHP/IIS web apps, SQL Server and IDuela HR & Payroll implementations delivered end-to-end.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Gagoope Clarance Merafhe",
              jobTitle: "SAP Business One & Web Developer",
              worksFor: { "@type": "Organization", name: "RPC Data" },
              email: "meragcm@gmail.com",
              telephone: "+267 77447823",
              address: { "@type": "PostalAddress", addressCountry: "BW" },
              knowsAbout: [
                "SAP Business One",
                "SAP B1 SDK",
                "PHP",
                "SQL Server",
                "IIS",
                "IDuela HR & Payroll",
              ],
            },
            {
              "@type": "ProfessionalService",
              name: "GCM — SAP B1 & Web Development",
              description:
                "SAP Business One add-on development, ERP integrations, and database-driven web applications.",
              areaServed: "Botswana",
              provider: { "@type": "Person", name: "Gagoope Clarance Merafhe" },
            },
          ],
        }),
      },
    ],
  }),
});

const WHATSAPP = "77447823";
const WHATSAPP_INTL = "26777447823";
const EMAIL = "meragcm@gmail.com";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_INTL}?text=Hi%20Clarance%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!`;

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

const coreExpertise = ["SAP B1", "PHP / IIS", "SQL Server", "IDuela HR"];

const services = [
  {
    icon: Server,
    title: "SAP B1 Add-On Sprint",
    desc: "Custom SAP Business One add-ons built with the DI/UI API to automate posting, validation and integrations.",
    features: ["DI/UI API integration", "CSV / batch posting", "Validation rules", "Deployment support"],
    timeline: "2–6 Weeks",
    price: "Starts at scope",
  },
  {
    icon: Globe,
    title: "Internal Web App",
    desc: "PHP / IIS internal tools with SQL Server and email workflow — request systems, approvals and reporting.",
    features: ["Multi-level approvals", "Email notifications", "Role-based access", "Reporting"],
    timeline: "3–8 Weeks",
    price: "Starts at scope",
  },
  {
    icon: Database,
    title: "Database & Reporting",
    desc: "Schema design, query optimisation and Crystal Reports / SQL reporting on top of existing SAP or MSSQL systems.",
    features: ["Schema design", "Query tuning", "Crystal Reports", "Data migration"],
    timeline: "1–4 Weeks",
    price: "Starts at scope",
  },
];

const buildPaths = [
  {
    tag: "SAP B1 · SDK · SQL",
    title: "ERP Add-On Build",
    stack: ["SAP DI API", "SAP UI API", "C# / PHP", "SQL Server"],
    features: [
      "Bespoke SAP B1 add-ons",
      "CSV & bulk import tools",
      "IDuela HR & Payroll config",
      "End-to-end deployment",
    ],
    timeline: "2–8 Weeks",
    price: "Scoped per project",
  },
  {
    tag: "PHP · IIS · MySQL",
    title: "Modern Web Platform",
    stack: ["PHP", "IIS", "MySQL", "Mailtrap"],
    features: [
      "Request & approval systems",
      "Email workflow integration",
      "Responsive dashboards",
      "Role-based access",
    ],
    timeline: "3–10 Weeks",
    price: "Scoped per project",
  },
  {
    tag: "Requirements · Reports",
    title: "System Specification",
    stack: ["Analysis", "SQL", "Crystal Reports", "Docs"],
    features: [
      "Requirements gathering",
      "Functional specifications",
      "Data model design",
      "Reporting blueprints",
    ],
    timeline: "1–4 Weeks",
    price: "Scoped per project",
  },
];

const process = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Discover",
    body: "Dig into your goals, existing systems and technical constraints to define a clear, workable scope.",
  },
  {
    n: "02",
    icon: Code2,
    title: "Build",
    body: "Iterative development with regular check-ins — clean code, tested integrations and reliable data flows.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Launch",
    body: "Deploy to your SAP environment or web server, verify data integrity and hand over with documentation.",
  },
];

const projects = [
  {
    id: "PRJ-000",
    kind: "Personal Product",
    title: "Point of Sale Platform",
    client: "Personal Project",
    period: "Jul 2026 – Aug 2026",
    desc: "Architected and deployed a full point of sale platform — optimised checkout workflows with real-time inventory and transaction synchronisation. Live demo available (visitor account is read-only).",
    stack: ["PHP", "MySQL", "Real-time inventory"],
    icon: ShoppingCart,
    link: "https://motswedi.liveblog365.com/login.php",
    demo: "Demo login — username: visitor · password: Visitor@123",
  },
  {
    id: "PRJ-001",
    kind: "SAP Add-On",
    title: "SAP B1 CSV Multiple Journal Entry Add-On",
    client: "RPC Data Limited",
    period: "Apr 2026 – Jul 2026",
    desc: "Automated posting of up to 500 SAP journal entries at once via PHP + SAP DI API, with CSV validation and field mapping.",
    stack: ["SAP DI API", "PHP", "SQL Server"],
    icon: Server,
  },
  {
    id: "PRJ-002",
    kind: "Web App",
    title: "Request & Approval System",
    client: "NARDI",
    period: "May 2025 – May 2026",
    desc: "Multi-level Request and Approval System built with PHP + IIS and Mailtrap for reliable email notifications.",
    stack: ["PHP", "IIS", "MySQL", "Mailtrap"],
    icon: Layers,
  },
  {
    id: "PRJ-003",
    kind: "ERP Config",
    title: "IDuela HR & Payroll Configuration",
    client: "NARDI",
    period: "Oct 2024 – Dec 2024",
    desc: "Configured IDuela HR and Payroll modules and supported successful deployment aligned to operational requirements.",
    stack: ["IDuela", "SAP B1", "HR & Payroll"],
    icon: Users,
  },
  {
    id: "PRJ-004",
    kind: "Specification",
    title: "Loan Management System",
    client: "Thobela Pawn Shop",
    period: "Jul 2024 – Dec 2024",
    desc: "Defined specifications for a loan system covering origination, approval, repayment tracking and reporting.",
    stack: ["SQL", "PHP", "Requirements"],
    icon: ClipboardList,
  },
  {
    id: "PRJ-005",
    kind: "Embedded",
    title: "Automated Attendance Tracking",
    client: "Botho University",
    period: "2023",
    desc: "Integrated Java and Arduino UNO with keypad interfacing to automate attendance capture end-to-end.",
    stack: ["Java", "Arduino", "Embedded"],
    icon: Cpu,
  },
  {
    id: "PRJ-006",
    kind: "Personal",
    title: "Developer Portfolio",
    client: "Self",
    period: "Jan 2026",
    desc: "Responsive portfolio web app built with modern web technologies and delivered with performance in mind.",
    stack: ["React", "TypeScript", "Tailwind"],
    icon: Sparkles,
  },
];

const flagshipStats = [
  { n: "500", label: "Journals posted per batch" },
  { n: "0", label: "Posting errors in production" },
  { n: "1+ yr", label: "SAP B1 delivery experience" },
];

const strengths = [
  { icon: Zap, title: "System Optimisation", body: "Refactor existing systems to remove bottlenecks and automate repetitive workflows." },
  { icon: ShieldCheck, title: "Data Integrity", body: "Validation, reconciliation and safe migrations across SAP and SQL environments." },
  { icon: Monitor, title: "Full-Stack Delivery", body: "From requirements through UI to database — one hand on the whole pipeline." },
];

const testimonials = [
  {
    quote:
      "Delivered our SAP journal automation on time and made a real dent in month-end processing. Communication was crisp throughout.",
    role: "Finance Team Lead",
    where: "BOMRA · Botswana",
    project: "SAP B1 CSV Journal Entry Add-On",
  },
  {
    quote:
      "The approval system slotted straight into how we already worked. Email notifications and approvals just work — no friction.",
    role: "Operations Manager",
    where: "NARDI · Botswana",
    project: "Request & Approval System",
  },
];

const education = [
  { id: "EDU-001", kind: "Tertiary · 2024", title: "BEng (Hons) Computer Engineering", sub: "Minor in Computer Science · GPA 2.83 — Gaborone" },
  { id: "EDU-002", kind: "Coursework · 2023", title: "Automated Attendance Tracking", sub: "Botho University — Java & Arduino UNO, keypad interfacing" },
  { id: "EDU-003", kind: "IT Attachment · 2022", title: "IT Support & Teaching Practice", sub: "Kutlwano JSS — OS install, server management, computer basics" },
  { id: "EDU-004", kind: "Secondary · 2017", title: "BGCSE", sub: "Botswana General Certificate of Secondary Education — Nata" },
  { id: "EDU-005", kind: "Junior · 2015", title: "Junior Certificate", sub: "Gweta" },
  { id: "EDU-006", kind: "Primary · 2012", title: "PSLE", sub: "Nata" },
];

const skillGroups = [
  { title: "Data Science & Analytics", items: "SQL · Statistical analysis · Python · R" },
  { title: "Software Development", items: "Python · Java · C++ · JavaScript · Ruby · Swift · Kotlin · Data structures" },
  { title: "Database Management", items: "Oracle · MySQL · SQL Server · PostgreSQL · Database design · Backup & recovery" },
  { title: "IT Support", items: "Hardware & software troubleshooting · Windows · macOS · Linux" },
];

const volunteer = {
  title: "Volunteer Coordinator — Village Clean-Up",
  org: "Kgotla Community Initiative, Gabane Village, Botswana",
  period: "May 2025 – Present",
  body:
    "Supported regular kgotla sessions mobilising community members for village-wide clean-ups — coordinating attendance, planning activities and communicating across communal areas.",
};


const contactChannels = [
  { icon: MessageCircle, label: "WhatsApp", value: `+267 ${WHATSAPP}`, href: WHATSAPP_URL, ext: true },
  { icon: Phone, label: "Phone", value: `+267 ${WHATSAPP}`, href: `tel:+267${WHATSAPP}` },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Github, label: "GitHub", value: "github.com/Gagoope", href: "https://github.com/Gagoope", ext: true },
];

const shell = "mx-auto w-full max-w-6xl px-4 sm:px-6";
const section = "py-16 sm:py-24";

/* ————————————————— Page ————————————————— */

function Portfolio() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-background font-sans text-foreground">
      <LoadingSplash />
      <SiteNav links={navLinks} whatsappUrl={WHATSAPP_URL} />

      <main id="main" className="pb-28 sm:pb-0">
        {/* ————— Hero ————— */}
        <section id="top" className="ambient relative overflow-hidden pt-28 sm:pt-36">
          <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(70%_55%_at_50%_0%,black,transparent)]" />
          <div className={`${shell} pb-10 sm:pb-14`}>
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal>
                <Badge tone="success">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full text-success" />
                  Available for new work
                </Badge>
                <h1 className="mt-6 text-[2.1rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                  SAP Business One systems and web apps that{" "}
                  <span className="text-primary">run themselves.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  I&apos;m Gagoope Merafhe — an IT systems developer in Botswana. I build SAP B1
                  add-ons, internal web applications and the databases behind them, replacing
                  manual, error-prone processes with software that runs on its own.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a href="#contact" className={btnPrimary}>
                    Start a project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                  <a href="#projects" className={btnSecondary}>
                    Explore my work
                  </a>
                  <CvPreviewButton label="Preview CV" className={btnGhost} />
                </div>

                <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
                  {coreExpertise.map((c) => (
                    <div key={c}>
                      <dt className="text-sm font-medium text-foreground">{c}</dt>
                      <dd className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Core
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              {/* Product preview */}
              <Reveal delay={120} className="relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="card-surface overflow-hidden p-0">
                    <div className="flex items-center gap-2 border-b border-border bg-surface-elevated/60 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
                      <span className="ml-3 truncate font-mono text-[10px] text-muted-foreground">
                        sap-b1 · journal-batch · live
                      </span>
                    </div>

                    <div className="grid gap-4 p-5 sm:p-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={profileAsset.url}
                          alt="Gagoope Clarance Merafhe"
                          loading="lazy"
                          decoding="async"
                          className="h-16 w-16 shrink-0 rounded-2xl border border-border object-cover"
                        />
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold">
                            Gagoope Clarance Merafhe
                          </div>
                          <div className="truncate text-xs text-muted-foreground">
                            IT Systems Developer · RPC Data
                          </div>
                          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <MapPin className="h-3 w-3 text-primary" aria-hidden />
                            Nata / Gaborone, Botswana
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {flagshipStats.map((s) => (
                          <div
                            key={s.label}
                            className="rounded-xl border border-border bg-background/40 p-3"
                          >
                            <div className="text-lg font-semibold tracking-tight sm:text-xl">
                              {s.n}
                            </div>
                            <div className="mt-1 text-[10px] leading-snug text-muted-foreground">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="grid gap-2 rounded-xl border border-border bg-background/40 p-4">
                        {[
                          "CSV validated · 500 rows",
                          "Mapped to SAP journal structure",
                          "Batch posted · 0 errors",
                        ].map((row) => (
                          <div key={row} className="flex items-center gap-2 text-xs">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" aria-hidden />
                            <span className="truncate text-muted-foreground">{row}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="float-slow absolute -bottom-12 -left-6 hidden w-44 rounded-2xl glass p-4 shadow-lift sm:block">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      Month-end
                    </div>
                    <div className="mt-1 text-sm font-semibold">Hours → minutes</div>
                    <div className="mt-1 text-[11px] text-muted-foreground">
                      Manual entry removed
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ————— Services ————— */}
        <section id="services" className={`${shell} ${section}`}>
          <Reveal>
            <SectionHead
              label="Services"
              title="What I do"
              sub="Three kinds of work I take on, with the typical time each one needs."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <Card className="group flex h-full flex-col">
                  <IconTile icon={s.icon} />
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-5">
                    <CheckList items={s.features} />
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border pt-5">
                    <Badge tone="primary">{s.timeline}</Badge>
                    <Badge>{s.price}</Badge>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ————— Engagements ————— */}
        <section className="border-y border-border bg-surface/30">
          <div className={`${shell} ${section}`}>
            <Reveal>
              <SectionHead
                label="Engagements"
                title="Ways we can work together"
                sub="Different domains, one delivery style — clear scope, working software."
              />
            </Reveal>
            <div className="grid gap-5 lg:grid-cols-3">
              {buildPaths.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <Card className="group flex h-full flex-col">
                    <Eyebrow>{p.tag}</Eyebrow>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">{p.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                    <div className="mt-6 flex-1">
                      <CheckList items={p.features} />
                    </div>
                    <div className="mt-6 border-t border-border pt-5">
                      <MetaList
                        items={[
                          ["Timeline", p.timeline],
                          ["Pricing", p.price],
                        ]}
                      />
                      <a
                        href="#contact"
                        className="group/link mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary"
                      >
                        Request a quote
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ————— Process ————— */}
        <section id="process" className={`${shell} ${section}`}>
          <Reveal>
            <SectionHead label="Process" title="How a project runs" />
          </Reveal>
          <ol className="grid gap-5 md:grid-cols-3">
            {process.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal as="li" key={p.n} delay={i * 90} className="list-none">
                  <Card className="group h-full">
                    <div className="flex items-center justify-between">
                      <IconTile icon={Icon} />
                      <span className="font-mono text-2xl font-semibold text-border-strong">
                        {p.n}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </Card>
                </Reveal>
              );
            })}
          </ol>
        </section>

        {/* ————— Projects ————— */}
        <section id="projects" className="border-y border-border">
          <div className={`${shell} ${section}`}>
            <Reveal>
              <SectionHead
                label="Recent work"
                title="Projects I've shipped"
                sub="Systems built for finance, operations and HR teams in Botswana."
              />
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal as="article" key={p.id} delay={(i % 2) * 90}>
                    <Card className="group flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <IconTile icon={Icon} />
                        <Badge tone="primary">{p.kind}</Badge>
                      </div>
                      <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                      <div className="flex-1">
                        {"link" in p && p.link ? (
                          <div className="mt-4 space-y-2">
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                            >
                              View live demo <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                            <p className="text-xs text-muted-foreground">{(p as { demo?: string }).demo}</p>
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-6 border-t border-border pt-5">
                        <MetaList
                          items={[
                            ["Client", p.client],
                            ["Period", p.period],
                          ]}
                        />
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {p.stack.map((t) => (
                            <Badge key={t}>{t}</Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ————— Case study ————— */}
        <section className={`${shell} ${section}`}>
          <Reveal>
            <Card interactive={false} className="p-6 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <Eyebrow>Case study</Eyebrow>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    SAP B1 CSV journal automation
                  </h2>
                  <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                    A SAP Business One add-on engineered to automate posting of up to 500 journal
                    entries at once. Built with PHP and the SAP DI API, with CSV validation, field
                    mapping to SAP journal structures and reliable batch execution — cutting a
                    routine month-end task from hours to minutes.
                  </p>
                  <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      <span className="font-semibold text-foreground">Batch execution:</span>{" "}
                      validates and posts hundreds of journals in a single run against a live SAP B1
                      environment.
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">Reliable mapping:</span> CSV
                      fields mapped to SAP journal structures with strict validation to protect
                      ledger integrity.
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">Operational win:</span>{" "}
                      reduced manual data entry and cut down human error during month-end
                      processing.
                    </li>
                  </ul>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className={btnPrimary}
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden /> Discuss a similar build
                    </a>
                    <CvPreviewButton label="View full CV" className={btnSecondary} />
                  </div>
                </div>

                <div className="grid content-start gap-4 rounded-2xl border border-border bg-background/40 p-6">
                  {flagshipStats.map((s, i) => (
                    <div
                      key={s.label}
                      className={i > 0 ? "border-t border-border pt-4" : undefined}
                    >
                      <Stat value={s.n} label={s.label} />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        </section>

        {/* ————— Strengths ————— */}
        <section className="border-y border-border bg-surface/30">
          <div className={`${shell} ${section}`}>
            <Reveal>
              <SectionHead
                label="Strengths"
                title="How I work"
                sub="Beyond code — the habits that make delivery reliable."
              />
            </Reveal>
            <div className="grid gap-5 md:grid-cols-3">
              {strengths.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <Card className="group h-full">
                    <IconTile icon={s.icon} />
                    <h3 className="mt-5 text-base font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ————— Free consult ————— */}
        <section className={`${shell} ${section}`}>
          <Reveal>
            <div className="ambient card-surface relative overflow-hidden p-6 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <Eyebrow>Free consult</Eyebrow>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Free SAP or web system review
                  </h2>
                  <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                    Thinking of extending SAP B1 or an internal web app? I&apos;ll review your setup
                    for bottlenecks, data integrity risks and quick wins — free, no sales pitch.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={`${btnPrimary} mt-8`}
                  >
                    Book a slot
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-background/40 p-5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      What I look at
                    </div>
                    <div className="mt-4">
                      <CheckList
                        items={[
                          "SAP add-on & integration review",
                          "SQL / schema health check",
                          "Approval & workflow gaps",
                          "Actionable summary",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-background/40 p-5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      What you get
                    </div>
                    <div className="mt-4">
                      <CheckList
                        items={[
                          "One hour, one-on-one technical consult",
                          "No credit card required",
                          "Summary report afterwards",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ————— Testimonials ————— */}
        <section className="border-y border-border">
          <div className={`${shell} ${section}`}>
            <Reveal>
              <SectionHead label="Clients" title="What clients say" />
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <Reveal key={t.role} delay={i * 90}>
                  <Card className="group flex h-full flex-col">
                    <Quote className="h-6 w-6 text-primary/40" aria-hidden />
                    <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                      “{t.quote}”
                    </blockquote>
                    <footer className="mt-6 border-t border-border pt-5 text-sm">
                      <div className="font-medium text-foreground">{t.role}</div>
                      <div className="mt-1 text-muted-foreground">{t.where}</div>
                      <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                        {t.project}
                      </div>
                    </footer>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ————— Education ————— */}
        <section id="about" className={`${shell} ${section}`}>
          <Reveal>
            <SectionHead label="Background" title="Education & training" />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={e.id} delay={(i % 2) * 90}>
                <Card className="group h-full">
                  <Badge>{e.kind}</Badge>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.sub}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-14">
            <Reveal>
              <SectionHead label="Toolkit" title="Skills & languages" />
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {skillGroups.map((g, i) => (
                <Reveal key={g.title} delay={(i % 2) * 90}>
                  <Card className="h-full">
                    <h3 className="text-base font-semibold tracking-tight">{g.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.items}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Languages: English</p>
          </div>

          <div className="mt-14">
            <Reveal>
              <SectionHead label="Community" title="Volunteer work" />
            </Reveal>
            <Reveal>
              <Card>
                <div className="flex items-start justify-between gap-4">
                  <IconTile icon={HeartHandshake} />
                  <Badge tone="primary">{volunteer.period}</Badge>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight">{volunteer.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{volunteer.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{volunteer.body}</p>
              </Card>
            </Reveal>
          </div>

        </section>

        {/* ————— Contact ————— */}
        <section id="contact" className="border-t border-border bg-surface/30">
          <div className={`${shell} ${section}`}>
            <Reveal>
              <SectionHead
                label="Contact"
                title="Get in touch"
                sub="Open to full-time roles, contracts and collaborative projects across Botswana and remote."
              />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactChannels.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.label} delay={(i % 2) * 90}>
                    <a
                      href={c.href}
                      {...(c.ext ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="card-surface hairline-top group flex min-h-11 items-center gap-4 p-5"
                    >
                      <IconTile icon={Icon} />
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {c.label}
                        </span>
                        <span className="mt-1 block break-all text-sm font-medium">{c.value}</span>
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
                        aria-hidden
                      />
                    </a>
                  </Reveal>
                );
              })}
            </div>
            <p className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden /> Nata / Gaborone,
              Botswana · Open to remote &amp; on-site.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border pb-28 sm:pb-0">
        <div
          className={`${shell} flex flex-wrap items-center justify-between gap-3 py-8 text-xs text-muted-foreground`}
        >
          <div>© {new Date().getFullYear()} Gagoope Clarance Merafhe · All rights reserved</div>
          <div>Designed &amp; built in Botswana</div>
        </div>
      </footer>
    </div>
  );
}
