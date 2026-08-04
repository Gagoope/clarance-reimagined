import { createFileRoute } from "@tanstack/react-router";
import { CvPreviewButton } from "@/components/CvPreview";
import { LoadingSplash } from "@/components/LoadingSplash";
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
  { id: "EDU-001", kind: "Tertiary · 2024", title: "BEng (Hons) Computer Engineering", sub: "Minor in Computer Science · GPA 2.83" },
  { id: "EDU-002", kind: "Coursework · 2023", title: "Automated Attendance Tracking", sub: "Botho University — Java & Arduino UNO" },
  { id: "EDU-003", kind: "IT Attachment · 2022", title: "IT Support & Teaching Practice", sub: "Kutlwano JSS — OS install & server ops" },
  { id: "EDU-004", kind: "Secondary · 2017", title: "BGCSE", sub: "Botswana General Certificate — Nata" },
];

/* ————————————————— UI helpers ————————————————— */

const btnPrimary =
  "inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90";
const btnOutline =
  "inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </div>
  );
}

function SectionHead({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <div className="mb-12 max-w-2xl border-b border-border pb-6">
      <Label>{label}</Label>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {sub && <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{sub}</p>}
    </div>
  );
}

function Meta({ items }: { items: [string, string][] }) {
  return (
    <dl className="space-y-1.5 text-sm">
      {items.map(([k, v]) => (
        <div key={k} className="flex gap-2">
          <dt className="w-24 shrink-0 text-muted-foreground">{k}</dt>
          <dd className="text-foreground">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ————————————————— Page ————————————————— */

function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <LoadingSplash />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Gagoope Merafhe
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Hire Me
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="border-b border-border">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
          <div>
            <Label>IT Systems Developer · Botswana</Label>
            <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Gagoope Merafhe — SAP Business One developer and web engineer.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I build SAP B1 add-ons, internal web applications and the databases behind them. Most of my work
              replaces manual, error-prone processes with something that runs on its own.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className={btnPrimary}>
                Contact Me <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className={btnOutline}>
                Explore My Work
              </a>
              <CvPreviewButton label="Preview CV" className={btnOutline} />
            </div>

            <div className="mt-12 border-t border-border pt-6">
              <Label>Core expertise</Label>
              <p className="mt-2 text-sm text-foreground">{coreExpertise.join(" · ")}</p>
            </div>
          </div>

          <div className="lg:pt-2">
            <img
              src={profileAsset.url}
              alt="Gagoope Clarance Merafhe"
              className="aspect-[4/5] w-full max-w-[240px] rounded-sm border border-border object-cover"
            />
            <p className="mt-3 max-w-[240px] text-xs leading-relaxed text-muted-foreground">
              Based in Nata / Gaborone, Botswana. Available for full-time roles, contracts and remote work.
            </p>
          </div>
        </div>
      </section>

      {/* Services — single column list */}
      <section id="services" className="mx-auto max-w-5xl px-6 py-20">
        <SectionHead
          label="Services"
          title="What I do"
          sub="Three kinds of work I take on, with the typical time each one needs."
        />
        <div className="divide-y divide-border border-y border-border">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="grid gap-6 py-8 md:grid-cols-[1fr_1fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
                <div className="md:pl-6">
                  <ul className="space-y-1.5 text-sm text-foreground">
                    {s.features.map((f) => (
                      <li key={f}>— {f}</li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <Meta items={[["Timeline", s.timeline], ["Pricing", s.price]]} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Build paths — plain list */}
      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionHead
            label="Engagements"
            title="Ways we can work together"
            sub="Different domains, one delivery style — clear scope, working software."
          />
          <div className="space-y-10">
            {buildPaths.map((p) => (
              <article key={p.title} className="grid gap-6 border-t border-border pt-8 md:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <Label>{p.tag}</Label>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                  <div className="mt-4">
                    <Meta
                      items={[
                        ["Stack", p.stack.join(", ")],
                        ["Timeline", p.timeline],
                        ["Pricing", p.price],
                      ]}
                    />
                  </div>
                </div>
                <div>
                  <ul className="space-y-1.5 text-sm text-foreground">
                    {p.features.map((f) => (
                      <li key={f}>— {f}</li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Request a quote <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process — numbered list, single column */}
      <section id="process" className="mx-auto max-w-5xl px-6 py-20">
        <SectionHead label="Process" title="How a project runs" />
        <ol className="max-w-2xl divide-y divide-border border-y border-border">
          {process.map((p) => {
            const Icon = p.icon;
            return (
              <li key={p.n} className="flex gap-5 py-6">
                <span className="w-8 shrink-0 text-sm text-muted-foreground">{p.n}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <h3 className="text-base font-semibold">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Projects — editorial table-like list */}
      <section id="projects" className="border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionHead
            label="Recent work"
            title="Projects I've shipped"
            sub="Systems built for finance, operations and HR teams in Botswana."
          />
          <div className="divide-y divide-border border-y border-border">
            {projects.map((p) => {
              const Icon = p.icon;
              return (
                <article key={p.id} className="grid gap-4 py-8 md:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-primary" />
                      <Label>{p.kind}</Label>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h3>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    <div className="mt-4">
                      <Meta
                        items={[
                          ["Client", p.client],
                          ["Period", p.period],
                          ["Stack", p.stack.join(", ")],
                        ]}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flagship case study — single column, plain stats */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionHead label="Case study" title="SAP B1 CSV journal automation" />
        <div className="max-w-3xl">
          <p className="text-base leading-relaxed text-muted-foreground">
            A SAP Business One add-on engineered to automate posting of up to 500 journal entries at once. Built with
            PHP and the SAP DI API, with CSV validation, field mapping to SAP journal structures and reliable batch
            execution — cutting a routine month-end task from hours to minutes.
          </p>
          <div className="mt-10 grid gap-8 border-y border-border py-8 sm:grid-cols-3">
            {flagshipStats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-semibold text-primary">{s.n}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <ul className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <li>
              <span className="font-semibold text-foreground">Batch execution:</span> validates and posts hundreds of
              journals in a single run against a live SAP B1 environment.
            </li>
            <li>
              <span className="font-semibold text-foreground">Reliable mapping:</span> CSV fields mapped to SAP journal
              structures with strict validation to protect ledger integrity.
            </li>
            <li>
              <span className="font-semibold text-foreground">Operational win:</span> reduced manual data entry and cut
              down human error during month-end processing.
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={btnPrimary}>
              <MessageCircle className="h-4 w-4" /> Discuss a similar build
            </a>
            <CvPreviewButton label="View Full CV" className={btnOutline} />
          </div>
        </div>
      </section>

      {/* Strengths — plain list */}
      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionHead
            label="Strengths"
            title="How I work"
            sub="Beyond code — the habits that make delivery reliable."
          />
          <dl className="max-w-2xl divide-y divide-border border-y border-border">
            {strengths.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="py-6">
                  <dt className="flex items-center gap-2 text-base font-semibold">
                    <Icon className="h-4 w-4 text-primary" />
                    {s.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      {/* Consult */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionHead
          label="Free consult"
          title="Free SAP or web system review"
          sub="Thinking of extending SAP B1 or an internal web app? I'll review your setup for bottlenecks, data integrity risks and quick wins — free, no sales pitch."
        />
        <div className="grid gap-10 border-y border-border py-8 md:grid-cols-2">
          <div>
            <Label>What I look at</Label>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground">
              {[
                "SAP add-on & integration review",
                "SQL / schema health check",
                "Approval & workflow gaps",
                "Actionable summary",
              ].map((f) => (
                <li key={f}>— {f}</li>
              ))}
            </ul>
          </div>
          <div>
            <Label>What you get</Label>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground">
              <li>— One hour, one-on-one technical consult</li>
              <li>— No credit card required</li>
              <li>— Summary report afterwards</li>
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={`${btnPrimary} mt-6`}>
              Book a slot <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials — plain quotes */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionHead label="Clients" title="What clients say" />
        <div className="max-w-3xl space-y-12">
          {testimonials.map((t) => (
            <blockquote key={t.role}>
              <p className="text-lg leading-relaxed text-foreground">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-muted-foreground">
                {t.role}, {t.where} — {t.project}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="about" className="border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionHead label="Background" title="Education & training" />
          <div className="max-w-3xl divide-y divide-border border-y border-border">
            {education.map((e) => (
              <div key={e.id} className="grid gap-2 py-6 sm:grid-cols-[180px_1fr]">
                <div className="text-sm text-muted-foreground">{e.kind}</div>
                <div>
                  <h3 className="text-base font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
        <SectionHead
          label="Contact"
          title="Get in touch"
          sub="Open to full-time roles, contracts and collaborative projects across Botswana and remote."
        />
        <div className="max-w-3xl divide-y divide-border border-y border-border">
          {[
            { icon: MessageCircle, label: "WhatsApp", value: `+267 ${WHATSAPP}`, href: WHATSAPP_URL, ext: true },
            { icon: Phone, label: "Phone", value: `+267 ${WHATSAPP}`, href: `tel:+267${WHATSAPP}` },
            { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
            { icon: Github, label: "GitHub", value: "github.com/Gagoope", href: "https://github.com/Gagoope", ext: true },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                {...(c.ext ? { target: "_blank", rel: "noreferrer" } : {})}
                className="flex items-center gap-4 py-5 transition hover:text-primary"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span className="w-28 shrink-0 text-sm text-muted-foreground">{c.label}</span>
                <span className="break-all text-sm font-medium">{c.value}</span>
              </a>
            );
          })}
        </div>
        <p className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" /> Nata / Gaborone, Botswana · Open to remote & on-site.
        </p>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Gagoope Clarance Merafhe · All rights reserved</div>
          <div>Designed &amp; built in Botswana</div>
        </div>
      </footer>
    </div>
  );
}
