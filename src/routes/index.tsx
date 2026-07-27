import { createFileRoute } from "@tanstack/react-router";
import { CvPreviewButton } from "@/components/CvPreview";
import { LoadingSplash } from "@/components/LoadingSplash";
const profileAsset = { url: "/assets/gcm-profile.jpeg" };
import {
  ArrowRight,
  Database,
  Server,
  Globe,
  Wrench,
  Rocket,
  Monitor,
  Cpu,
  Code2,
  Layers,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Clock,
  Tag,
  Star,
  Phone,
  Mail,
  Github,
  MessageCircle,
  MapPin,
  Zap,
  ClipboardList,
  Users,
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

const floatingTech = [
  { label: "SAP", top: "8%", left: "62%", tone: "primary" },
  { label: "SQL", top: "22%", left: "88%", tone: "muted" },
  { label: "PHP", top: "48%", left: "58%", tone: "muted" },
  { label: "JS", top: "62%", left: "92%", tone: "primary" },
  { label: "PY", top: "78%", left: "64%", tone: "muted" },
  { label: "C#", top: "90%", left: "82%", tone: "primary" },
];

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
    id: "PRJ-001",
    kind: "SAP Add-On",
    title: "SAP B1 CSV Multiple Journal Entry Add-On",
    client: "BOMRA",
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
  { n: "500+", label: "Journals / batch" },
  { n: "1+ yr", label: "SAP B1 delivery" },
  { n: "100%", label: "Client deployments" },
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
  { id: "EDU-001", kind: "Tertiary · 2024", title: "BEng (Hons) Computer Engineering", sub: "Minor in Computer Science · GPA 2.83" },
  { id: "EDU-002", kind: "Coursework · 2023", title: "Automated Attendance Tracking", sub: "Botho University — Java & Arduino UNO" },
  { id: "EDU-003", kind: "IT Attachment · 2022", title: "IT Support & Teaching Practice", sub: "Kutlwano JSS — OS install & server ops" },
  { id: "EDU-004", kind: "Secondary · 2017", title: "BGCSE", sub: "Botswana General Certificate — Nata" },
];

/* ————————————————— UI helpers ————————————————— */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-primary">
      <Star className="h-3 w-3 fill-primary" />
      {children}
    </span>
  );
}

function SectionKicker({ label, title, sub }: { label: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-primary">{label}</div>
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}

/* ————————————————— Page ————————————————— */

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingSplash />

      {/* Nav */}
      <header className="sticky top-4 z-50 mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-surface/70 px-4 py-3 backdrop-blur-xl sm:px-6">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            GAGOOPE<span className="text-primary">MERAFHE</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition ${
                  i === 0
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Hire Me
            </a>
            <span className="hidden h-9 w-9 place-items-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs text-primary sm:grid">
              GC
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-1/2 top-40 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div>
            <Pill>IT Systems Developer · Botswana</Pill>
            <h1 className="mt-8 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Gagoope Merafhe
              <br />
              <span className="text-primary">SAP B1 Developer</span>
              <br />
              & Web Engineer.
            </h1>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Contact Me
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-6 py-4 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                Explore My Work
              </a>
              <CvPreviewButton
                label="Preview CV"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-6 py-4 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              />
            </div>

            <div className="mt-14">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Core Expertise:
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                {coreExpertise.map((e, i) => (
                  <span key={e} className="flex items-center gap-5">
                    <span className={i === coreExpertise.length - 1 ? "text-primary font-semibold" : "font-semibold text-foreground"}>
                      {e}
                    </span>
                    {i < coreExpertise.length - 1 && <span className="text-primary">•</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating tech constellation */}
          <div className="relative hidden min-h-[520px] lg:block">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
            {floatingTech.map((t) => (
              <div
                key={t.label}
                style={{ top: t.top, left: t.left }}
                className={`absolute grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border font-mono text-xs backdrop-blur-md ${
                  t.tone === "primary"
                    ? "border-primary/60 bg-primary/15 text-primary glow-primary"
                    : "border-border bg-surface/70 text-muted-foreground"
                }`}
              >
                {t.label}
              </div>
            ))}
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-primary/60 bg-primary/10 glow-primary">
              <img src={profileAsset.url} alt="Gagoope Clarance Merafhe" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <SectionKicker
          label="Productized Services"
          title={<>Fixed-scope solutions <span className="text-primary">built to ship.</span></>}
          sub="Scoped engagements designed for speed and reliability across SAP, web and database work."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group flex flex-col rounded-2xl border border-border bg-surface/50 p-7 transition hover:border-primary/60 hover:bg-surface"
              >
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5 font-mono text-[11px] uppercase tracking-widest">
                  <div>
                    <div className="text-muted-foreground">Timeline</div>
                    <div className="mt-1 text-sm font-semibold text-foreground">{s.timeline}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">Pricing</div>
                    <div className="mt-1 text-sm font-semibold text-primary">{s.price}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Build Paths */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionKicker
          label="Choose Your Build Path"
          title={<>Tailored technical <span className="text-primary">solutions.</span></>}
          sub="Different domains, one delivery style — clear scope, working software, no drama."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {buildPaths.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-border bg-surface/40 p-7 transition hover:border-primary/60"
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-primary">{p.tag}</div>
              <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
              <div className="mt-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Core Stack</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Key Features</div>
                <ul className="mt-3 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-primary" /> {p.timeline}
                </div>
                <div className="flex items-center justify-end gap-2 text-muted-foreground">
                  <Tag className="h-3.5 w-3.5 text-primary" /> {p.price}
                </div>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-primary/50 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                Request Quote <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-24">
        <SectionKicker
          label="My Design-to-Code Process"
          title={<>A streamlined workflow for <span className="text-primary">on-time delivery.</span></>}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {process.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.n} className="relative rounded-2xl border border-border bg-surface/40 p-7">
                <div className="absolute right-6 top-6 font-display text-5xl font-bold text-primary/15">{p.n}</div>
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects / Recent Work */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-primary">Recent Work</div>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Solving business problems with <span className="text-primary">clean, scalable software.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            See All Case Studies <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/40 transition hover:border-primary/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-gradient-to-br from-surface-elevated via-surface to-background">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <Icon className="h-16 w-16 text-primary/70 transition group-hover:scale-110" />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full border border-primary/40 bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur">
                    {p.kind}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-background/80 px-3 py-1 font-mono text-[10px] text-muted-foreground backdrop-blur">
                    {p.id}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold leading-snug">{p.title}</h3>
                  <div className="mt-1.5 font-mono text-xs text-muted-foreground">
                    <span className="text-primary">◆</span> {p.client} · {p.period}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Flagship case study */}
      <section className="relative overflow-hidden border-y border-border bg-surface/30">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-surface p-8 glow-primary">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative">
                <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-primary">Live Deployment</div>
                <div className="mb-8 font-display text-3xl font-bold">SAP B1 · Journal Automation</div>
                <div className="grid grid-cols-3 gap-4">
                  {flagshipStats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-border bg-background/60 p-4 text-center">
                      <div className="font-display text-2xl font-bold text-primary">{s.n}</div>
                      <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-border bg-background/60 p-4 font-mono text-[11px] text-muted-foreground">
                  <div className="text-primary">▸ posting batch...</div>
                  <div className="mt-1">✓ 500/500 journals · 0 errors</div>
                  <div className="mt-1">✓ committed to SAP B1</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-primary">Flagship SAP Deployment</div>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              SAP B1 CSV Journal <span className="text-primary">— case study.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A SAP Business One add-on engineered to automate posting of up to 500 journal entries at once. Built with
              PHP and the SAP DI API, with CSV validation, field mapping to SAP journal structures and reliable batch
              execution — cutting a routine month-end task from hours to minutes.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Batch execution:</span> validates and posts hundreds of
                journals in a single run against a live SAP B1 environment.
              </li>
              <li>
                <span className="font-semibold text-foreground">Reliable mapping:</span> CSV fields mapped to SAP journal
                structures with strict validation to protect ledger integrity.
              </li>
              <li>
                <span className="font-semibold text-foreground">Operational win:</span> reduced manual data entry and
                cut down human error during month-end processing.
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Discuss a similar build
              </a>
              <CvPreviewButton
                label="View Full CV"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionKicker
          label="What I Bring"
          title={<>Core <span className="text-primary">strengths.</span></>}
          sub="Beyond code — the operational habits that make delivery reliable."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-2xl border border-border bg-surface/40 p-7">
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Audit CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-surface/60 p-10 sm:p-14">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-primary">Free 1-Hour Consult</div>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Free SAP or Web <span className="text-primary">System Review.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Thinking of extending SAP B1 or an internal web app? I'll review your setup for bottlenecks, data
                integrity risks and quick wins — completely free, no sales pitch.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "SAP add-on & integration review",
                  "SQL / schema health check",
                  "Approval & workflow gaps",
                  "Actionable summary",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-6 backdrop-blur">
              <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-primary">Book Your Slot</div>
              <div className="font-display text-2xl font-bold">Let's screen-share and dig in.</div>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 1-on-1 technical consult</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No credit card required</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Summary report after</li>
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Claim Free Consult <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionKicker
          label="Client Outcomes"
          title={<>What clients <span className="text-primary">say.</span></>}
          sub="A word from people I've built systems and add-ons for."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.role} className="flex flex-col rounded-2xl border border-border bg-surface/40 p-7">
              <div className="mb-4 flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary" />
                ))}
              </div>
              <p className="flex-1 text-base leading-relaxed text-foreground">"{t.quote}"</p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.role}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{t.where}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Project</div>
                  <div className="mt-0.5 text-xs text-primary">{t.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <SectionKicker
          label="Background"
          title={<>Education & <span className="text-primary">training.</span></>}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.id} className="rounded-2xl border border-border bg-surface/40 p-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                <span className="text-primary">{e.id}</span>
                <span className="text-muted-foreground">{e.kind}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold">{e.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <SectionKicker
            label="Get In Touch"
            title={<>Let's build something <span className="text-primary">together.</span></>}
            sub="Open to full-time roles, contracts and collaborative projects across Botswana and remote."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
              className="group rounded-2xl border border-border bg-surface/40 p-6 transition hover:border-primary hover:glow-primary">
              <MessageCircle className="mb-4 h-6 w-6 text-primary" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">WhatsApp</div>
              <div className="mt-1 text-sm font-semibold">+267 {WHATSAPP}</div>
            </a>
            <a href={`tel:+267${WHATSAPP}`}
              className="group rounded-2xl border border-border bg-surface/40 p-6 transition hover:border-primary hover:glow-primary">
              <Phone className="mb-4 h-6 w-6 text-primary" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Phone</div>
              <div className="mt-1 text-sm font-semibold">+267 {WHATSAPP}</div>
            </a>
            <a href={`mailto:${EMAIL}`}
              className="group rounded-2xl border border-border bg-surface/40 p-6 transition hover:border-primary hover:glow-primary">
              <Mail className="mb-4 h-6 w-6 text-primary" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</div>
              <div className="mt-1 break-all text-sm font-semibold">{EMAIL}</div>
            </a>
            <a href="https://github.com/Gagoope" target="_blank" rel="noreferrer"
              className="group rounded-2xl border border-border bg-surface/40 p-6 transition hover:border-primary hover:glow-primary">
              <Github className="mb-4 h-6 w-6 text-primary" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">GitHub</div>
              <div className="mt-1 text-sm font-semibold">github.com/Gagoope</div>
            </a>
          </div>

          <p className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> Nata / Gaborone, Botswana · Open to remote & on-site.
          </p>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Gagoope Clarance Merafhe · All rights reserved</div>
          <div className="flex items-center gap-2"><Wrench className="h-3 w-3 text-primary" /> Designed & built in Botswana 🇧🇼</div>
        </div>
      </footer>
    </div>
  );
}
