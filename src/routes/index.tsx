import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Database,
  Code2,
  Server,
  Wrench,
  Zap,
  Globe,
  ClipboardList,
  Users,
  Rocket,
  MapPin,
  Phone,
  Mail,
  Github,
  MessageCircle,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const WHATSAPP = "77447823";
const WHATSAPP_INTL = "26777447823";
const EMAIL = "meragcm@gmail.com";

const skillGroups = [
  {
    label: "SAP Business One",
    tag: "Enterprise ERP",
    icon: Server,
    items: [
      { name: "SAP B1 SDK · UI API · DI API", level: 80 },
      { name: "Add-On Development (C#/PHP)", level: 75 },
      { name: "IDuela HR & Payroll", level: 78 },
    ],
  },
  {
    label: "Web Development",
    tag: "Full-Stack",
    icon: Globe,
    items: [
      { name: "PHP / IIS", level: 78 },
      { name: "JavaScript / HTML / CSS", level: 80 },
      { name: "Python · Ruby · Java", level: 72 },
    ],
  },
  {
    label: "Database & Data",
    tag: "SQL & Design",
    icon: Database,
    items: [
      { name: "SQL Server · MySQL · Oracle", level: 82 },
      { name: "PostgreSQL · NoSQL", level: 70 },
      { name: "Schema Design & Optimisation", level: 76 },
    ],
  },
  {
    label: "IT Support & Systems",
    tag: "Operations",
    icon: Wrench,
    items: [
      { name: "Windows · macOS · Linux", level: 82 },
      { name: "Hardware & Software Troubleshooting", level: 85 },
      { name: "System Integration & Automation", level: 75 },
    ],
  },
];

const experience = [
  {
    role: "IDuela Developer Trainee",
    tag: "Recent",
    org: "RPC Data Limited · Gaborone",
    period: "Apr 2024 – Mar 2025",
    bullets: [
      "Analysed and finalised system requirements for technical implementations, translating business needs into workable configurations.",
      "Engineered bespoke add-on solutions using the SAP SDK and supported configuration of IDuela HR & Payroll modules.",
      "Contributed to end-to-end client deployments, ensuring solutions were aligned to implementation requirements and delivered reliably.",
    ],
    stack: ["SAP B1 SDK", "IDuela HR", "SQL", "Requirements Analysis"],
  },
  {
    role: "IT Assistant Officer",
    tag: "Contract",
    org: "Kutlwano Junior Secondary School · Gweta",
    period: "Jul 2022 – Nov 2022",
    bullets: [
      "Provided technical support to staff and students across school systems, maintaining service continuity.",
      "Managed school-wide systems and enhanced web-based applications to improve usability and stability.",
      "Oversaw data integrity and resolved support incidents efficiently to keep day-to-day operations running smoothly.",
    ],
    stack: ["IT Support", "Web Maintenance", "Data Management"],
  },
];

const projects = [
  {
    id: "PRJ-001",
    kind: "SAP Add-On",
    title: "SAP B1 CSV Multiple Journal Entry Add-On",
    client: "BOMRA",
    period: "Apr 2026 – Jul 2026",
    desc: "Designed and developed a SAP Business One CSV journal entry add-on that automated posting of up to 500 journal entries at once. Used PHP and the SAP DI API to validate records, map CSV fields to SAP journal structures, and improve consistency while reducing manual processing effort.",
    stack: ["SAP DI API", "PHP", "SQL Server"],
  },
  {
    id: "PRJ-002",
    kind: "Web App",
    title: "Request & Approval System",
    client: "NARDI",
    period: "May 2025 – May 2026",
    desc: "Built a multi-level Request and Approval System using PHP and IIS, integrating Mailtrap for reliable email notifications and streamlining internal approval workflows.",
    stack: ["PHP", "IIS", "MySQL", "Mailtrap"],
  },
  {
    id: "PRJ-003",
    kind: "ERP Config",
    title: "IDuela HR & Payroll Configuration",
    client: "NARDI",
    period: "Oct 2024 – Dec 2024",
    desc: "Configured IDuela HR and Payroll modules for NARDI, supporting successful deployment and alignment with client operational requirements.",
    stack: ["IDuela", "SAP B1", "HR & Payroll"],
  },
  {
    id: "PRJ-004",
    kind: "Specification",
    title: "Loan Management System",
    client: "Thobela Pawn Shop",
    period: "Jul 2024 – Dec 2024",
    desc: "Defined system specifications and gathered requirements for a Loan Management System covering origination, approval, repayment tracking and reporting.",
    stack: ["SQL", "PHP", "Requirements"],
  },
  {
    id: "PRJ-005",
    kind: "Embedded",
    title: "Automated Attendance Tracking System",
    client: "Botho University",
    period: "2023",
    desc: "Coursework project integrating Java and Arduino UNO with keypad interfacing to automate attendance capture — combining embedded systems with application logic.",
    stack: ["Java", "Arduino UNO", "Embedded"],
  },
  {
    id: "PRJ-006",
    kind: "Personal",
    title: "Developer Portfolio",
    client: "Self",
    period: "Jan 2026",
    desc: "Responsive portfolio web application showcasing professional work, skills and experience — built with modern web technologies and delivered with performance in mind.",
    stack: ["React", "TypeScript", "Tailwind"],
  },
];

const strengths = [
  { icon: Zap, title: "System Optimisation", body: "Refactoring existing systems to remove bottlenecks, improve performance and automate repetitive workflows." },
  { icon: Globe, title: "Web Development", body: "Building responsive, clean and performant web applications from requirements through to deployment." },
  { icon: Database, title: "Database Management", body: "Designing normalised schemas, writing optimised queries and generating actionable reports from complex data sets." },
  { icon: ClipboardList, title: "Requirements Analysis", body: "Translating stakeholder needs into clear, structured technical specifications ready for delivery." },
  { icon: Users, title: "Communication & Teamwork", body: "Working effectively across business and technical teams throughout the project lifecycle." },
  { icon: Rocket, title: "Fast Structured Delivery", body: "Learning new domains rapidly and delivering structured outputs on schedule — from docs to deployed solutions." },
];

function SectionHeader({ num, title, kicker }: { num: string; title: string; kicker?: string }) {
  return (
    <div className="mb-12 flex items-end justify-between gap-6 border-b border-border/60 pb-6">
      <div>
        <div className="mb-3 font-mono text-xs text-primary">{num}</div>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {kicker && <div className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground sm:block">{kicker}</div>}
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md border border-primary/50 bg-primary/10 font-mono text-xs text-primary">GC</span>
            <span>Gagoope<span className="text-primary">.</span>M</span>
          </a>
          <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-primary">About</a>
            <a href="#skills" className="transition hover:text-primary">Skills</a>
            <a href="#experience" className="transition hover:text-primary">Experience</a>
            <a href="#projects" className="transition hover:text-primary">Projects</a>
            <a href="#contact" className="transition hover:text-primary">Contact</a>
          </nav>
          <a
            href={`https://wa.me/${WHATSAPP_INTL}?text=Hi%20Clarance%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!`}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary/60 bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Hire Me
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span>01 · IT Systems & Web Developer · Gaborone, Botswana</span>
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Gagoope Clarance <span className="text-primary">Merafhe</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Proactive IT Systems and Web Developer delivering end-to-end implementations across
            <span className="text-foreground"> SAP Business One</span>,
            <span className="text-foreground"> web applications</span> and
            <span className="text-foreground"> database-driven solutions</span>.
            Comfortable translating business needs into practical technical outcomes.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              View Projects <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary">
              Get in Touch
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition hover:border-primary hover:text-primary">
              <FileText className="h-4 w-4" /> Download CV
            </a>
          </div>

          {/* Meta card */}
          <div id="about" className="mt-16 grid gap-4 rounded-xl border border-border bg-surface/40 p-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { k: "Location", v: "Nata / Gaborone, BW" },
              { k: "Experience", v: "1+ years professional" },
              { k: "SAP Versions", v: "B1 9.x · 10.0" },
              { k: "Languages", v: "English · Setswana" },
            ].map((m) => (
              <div key={m.k}>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{m.k}</div>
                <div className="mt-1 text-sm text-foreground">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader num="02" title="Technical Skills" kicker="Stack & Tooling" />
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.label} className="group rounded-xl border border-border bg-surface/40 p-6 transition hover:border-primary/50">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{g.tag}</div>
                    <h3 className="mt-1 text-xl font-semibold">{g.label}</h3>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="space-y-4">
                  {g.items.map((it) => (
                    <div key={it.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-foreground">{it.name}</span>
                        <span className="font-mono text-xs text-primary">{it.level}%</span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${it.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface/40 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Code2 className="h-4 w-4 text-primary" />
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Also working with</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Python", "Java", "C++", "Kotlin", "Swift", "Ruby", "Crystal Reports", "Microsoft 365", "Arduino", "Workflow Automation"].map((t) => (
              <span key={t} className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader num="03" title="Experience" kicker="Career Timeline" />
        <div className="space-y-6">
          {experience.map((e) => (
            <article key={e.role} className="rounded-xl border border-border bg-surface/40 p-8 transition hover:border-primary/50">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary">{e.tag}</div>
                  <h3 className="mt-1 text-xl font-semibold sm:text-2xl">{e.role}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">{e.org}</div>
                </div>
                <div className="font-mono text-xs text-muted-foreground">{e.period}</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {e.stack.map((s) => (
                  <span key={s} className="rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1 font-mono text-[11px] text-primary">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader num="04" title="Projects" kicker="Selected Work" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="group flex flex-col rounded-xl border border-border bg-surface/40 p-6 transition hover:border-primary/60 hover:glow-primary">
              <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                <span className="text-muted-foreground">{p.id}</span>
                <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-primary">{p.kind}</span>
              </div>
              <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
              <div className="mt-2 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="text-primary">◆</span> {p.client} · {p.period}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Strengths */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader num="05" title="Core Strengths" kicker="What I Bring" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-xl border border-border bg-surface/40 p-6 transition hover:border-primary/50">
                <span className="mb-4 grid h-10 w-10 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader num="06" title="Education" kicker="Academic Background" />
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { id: "EDU-001", kind: "Tertiary · 2024", title: "Bachelor of Engineering (Honours)", sub: "Computer Engineering — Minor in Computer Science · GPA 2.83" },
            { id: "EDU-002", kind: "Coursework · 2023", title: "Automated Attendance Tracking System", sub: "Botho University — Java & Arduino UNO, keypad interfacing" },
            { id: "EDU-003", kind: "IT Attachment · 2022", title: "IT Support & Teaching Practice", sub: "Kutlwano JSS — OS installation, server management, computer basics" },
            { id: "EDU-004", kind: "Secondary · 2017", title: "BGCSE", sub: "Botswana General Certificate of Secondary Education — Nata" },
          ].map((e) => (
            <div key={e.id} className="rounded-xl border border-border bg-surface/40 p-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                <span className="text-primary">{e.id}</span>
                <span className="text-muted-foreground">{e.kind}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{e.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* References */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader num="07" title="References" kicker="Available on Request" />
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { i: "M", name: "Mr. Mokgothu", role: "Kutlwano Junior Secondary School", phone: "+267 6212213" },
            { i: "J", name: "Mr. Jeremiah", role: "Teacher · Educator", phone: "+267 6211271" },
          ].map((r) => (
            <div key={r.name} className="flex items-center gap-5 rounded-xl border border-border bg-surface/40 p-6">
              <div className="grid h-14 w-14 place-items-center rounded-full border border-primary/40 bg-primary/10 font-display text-xl text-primary">{r.i}</div>
              <div className="flex-1">
                <div className="text-base font-semibold">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
                <div className="mt-1 font-mono text-xs text-primary">📞 {r.phone}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <SectionHeader num="08" title="Get in Touch" kicker="Let's Build Together" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <a href={`https://wa.me/${WHATSAPP_INTL}?text=Hi%20Clarance%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!`} target="_blank" rel="noreferrer"
              className="group rounded-xl border border-border bg-surface/40 p-6 transition hover:border-primary hover:glow-primary">
              <MessageCircle className="mb-4 h-6 w-6 text-primary" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">WhatsApp</div>
              <div className="mt-1 text-sm font-medium">+267 {WHATSAPP}</div>
            </a>
            <a href={`tel:+267${WHATSAPP}`}
              className="group rounded-xl border border-border bg-surface/40 p-6 transition hover:border-primary hover:glow-primary">
              <Phone className="mb-4 h-6 w-6 text-primary" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Phone</div>
              <div className="mt-1 text-sm font-medium">+267 {WHATSAPP}</div>
            </a>
            <a href={`mailto:${EMAIL}`}
              className="group rounded-xl border border-border bg-surface/40 p-6 transition hover:border-primary hover:glow-primary">
              <Mail className="mb-4 h-6 w-6 text-primary" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</div>
              <div className="mt-1 break-all text-sm font-medium">{EMAIL}</div>
            </a>
            <a href="https://github.com/Gagoope" target="_blank" rel="noreferrer"
              className="group rounded-xl border border-border bg-surface/40 p-6 transition hover:border-primary hover:glow-primary">
              <Github className="mb-4 h-6 w-6 text-primary" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">GitHub</div>
              <div className="mt-1 text-sm font-medium">github.com/Gagoope</div>
            </a>
          </div>

          <div className="mt-16 max-w-3xl">
            <h3 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Let's build something <span className="text-primary">together.</span>
            </h3>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" /> Open to full-time roles, contracts and collaborative projects across Botswana & remote.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Gagoope Clarance Merafhe · All rights reserved</div>
          <div>Designed & built in Botswana 🇧🇼</div>
        </div>
      </footer>
    </div>
  );
}
