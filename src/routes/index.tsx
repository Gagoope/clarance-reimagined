import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { CvPreviewButton } from "@/components/CvPreview";
import { LoadingSplash } from "@/components/LoadingSplash";
import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { FlowVisual } from "@/components/FlowVisual";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ProjectModal } from "@/components/ProjectModal";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { CursorGlow } from "@/components/CursorGlow";
import { btnPrimary, btnSecondary, btnGhost } from "@/components/ui-kit";
import {
  CV_PATH,
  EMAIL,
  GITHUB,
  PROFILE_IMG,
  WHATSAPP_LOCAL,
  WHATSAPP_URL,
  domains,
  education,
  filters,
  heroTech,
  metrics,
  navLinks,
  processSteps,
  projects,
  services,
  techGroups,
  volunteer,
  whyWorkWithMe,
  type Project,
} from "@/data/portfolio";

const TITLE = "Gagoope Merafhe | SAP Business One & Business Automation Engineer";
const DESCRIPTION =
  "Web Developer and software engineer specialising in business automation, enterprise applications, APIs, databases and system integrations.";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
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
              jobTitle: "SAP Business One & Business Automation Engineer",
              worksFor: { "@type": "Organization", name: "RPC Data" },
              email: EMAIL,
              telephone: `+267 ${WHATSAPP_LOCAL}`,
              address: { "@type": "PostalAddress", addressCountry: "BW" },
              alumniOf: { "@type": "CollegeOrUniversity", name: "Botho University" },
              knowsAbout: [
                "SAP Business One",
                "SAP DI API",
                "Business process automation",
                "C#",
                ".NET",
                "PHP",
                "SQL Server",
                "REST APIs",
                "IIS",
              ],
              sameAs: [GITHUB],
            },
            {
              "@type": "ProfessionalService",
              name: "Gagoope Merafhe — SAP B1 & Automation Engineering",
              description: DESCRIPTION,
              areaServed: "Botswana",
              provider: { "@type": "Person", name: "Gagoope Clarance Merafhe" },
            },
          ],
        }),
      },
    ],
  }),
});

const shell = "mx-auto w-full max-w-6xl px-4 sm:px-6";
const section = "py-16 sm:py-24";

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
      <span>{n}</span>
      <span className="h-px w-8 bg-primary/50" aria-hidden />
      <span className="text-muted-foreground">{children}</span>
    </div>
  );
}

function Head({
  n,
  label,
  title,
  sub,
  center = false,
}: {
  n: string;
  label: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <header className={`mb-10 max-w-2xl sm:mb-14 ${center ? "mx-auto text-center" : ""}`}>
      <div className={center ? "flex justify-center" : ""}>
        <Label n={n}>{label}</Label>
      </div>
      <h2 className="mt-5 text-[1.75rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.5rem]">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
          {sub}
        </p>
      )}
    </header>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );
  const featured = projects.find((p) => p.featured)!;

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-background font-sans text-foreground">
      <LoadingSplash />
      <CursorGlow />
      <SiteNav links={navLinks} whatsappUrl={WHATSAPP_URL} />
      <WhatsAppFab />

      <main id="main" className="relative z-10 pb-28 sm:pb-0">
        {/* ————— 01 Hero ————— */}
        <section id="top" className="ambient relative overflow-hidden pt-28 sm:pt-36">
          <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(70%_55%_at_50%_0%,black,transparent)]" />
          <div className={`${shell} pb-12 sm:pb-16`}>
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden />
                    Based in Botswana 🇧🇼
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="pulse-dot h-1.5 w-1.5 rounded-full text-success" aria-hidden />
                    Available for software engineering &amp; automation projects
                  </span>
                </div>

                <h1 className="mt-6 text-[clamp(2rem,7vw,3.6rem)] font-semibold leading-[1.06] tracking-tight">
                  Web Developer &amp; Business Automation{" "}
                  <span className="text-primary">Engineer</span>
                </h1>
                <p className="mt-5 text-lg font-medium sm:text-xl">
                  I build software that eliminates manual work.
                </p>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                  I design Web Applications, SAP Business One integrations, enterprise applications and automation
                  systems that help organisations work faster, reduce errors and make better use of
                  their data.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a href="#contact" className={btnPrimary}>
                    Start a Project
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </a>
                  <a href="#work" className={btnSecondary}>
                    View My Work
                  </a>
                  <a href={CV_PATH} download className={btnGhost}>
                    <Download className="h-4 w-4" aria-hidden /> Download CV
                  </a>
                </div>

                <ul className="mt-11 flex flex-wrap gap-2 border-t border-border pt-8">
                  {heroTech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-surface/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition duration-300 hover:border-primary/50 hover:text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={120}>
                <FlowVisual />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ————— 02 Metrics ————— */}
        <section className="border-y border-border bg-surface/30">
          <div className={`${shell} py-12 sm:py-16`}>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-9 lg:grid-cols-4">
              {metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 80}>
                  <div className="border-l border-border pl-4 sm:pl-5">
                    <dt className="sr-only">{m.label}</dt>
                    <dd>
                      <CountUp
                        value={m.value}
                        suffix={m.suffix}
                        className="block text-[2rem] font-semibold tracking-tight sm:text-[2.75rem]"
                      />
                      <span className="mt-2 block text-xs leading-snug text-muted-foreground sm:text-sm">
                        {m.label}
                      </span>
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ————— 03 Problem → Solution ————— */}
        <section className={`${shell} ${section}`}>
          <Reveal>
            <Head
              n="03"
              label="Business value"
              title="Turn manual processes into intelligent systems."
              sub="Technology should remove repetitive work, reduce errors and give teams better visibility."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {domains.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.label} delay={i * 80}>
                  <article className="card-surface hairline-top group flex h-full flex-col p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition duration-300 group-hover:glow-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
                      {d.label}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                    <ul className="mt-5 flex-1 grid gap-2 text-sm">
                      {d.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5">
                          <span
                            className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden
                          />
                          <span className="leading-relaxed">{it}</span>
                        </li>
                      ))}
                    </ul>
                    <ArrowRight
                      className="mt-6 h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
                      aria-hidden
                    />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ————— 04 Services ————— */}
        <section id="services" className="border-y border-border bg-surface/30">
          <div className={`${shell} ${section}`}>
            <Reveal>
              <Head
                n="04"
                label="Services"
                title="What I build"
                sub="Six engagements covering enterprise systems end to end — from SAP integrations to reporting."
              />
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} delay={(i % 3) * 80}>
                    <article className="group flex h-full flex-col bg-background p-6 transition duration-300 hover:bg-surface sm:p-7">
                      <div className="flex items-center justify-between">
                        <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="font-mono text-xs text-border-strong">{s.n}</span>
                      </div>
                      <h3 className="mt-5 text-base font-semibold tracking-tight">{s.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href="#contact"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
                      >
                        Explore
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden
                        />
                      </a>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ————— 05 Featured case study ————— */}
        <section className={`${shell} ${section}`}>
          <Reveal>
            <Head n="05" label="Featured case study" title={featured.title} />
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <Reveal>
              <div className="grid gap-6">
                {[
                  ["Problem", featured.problem],
                  ["Solution", featured.approach],
                  ["Result", featured.result],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-border pt-5">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
                      {k}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{v}</p>
                  </div>
                ))}
                <div className="border-t border-border pt-5">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
                    Technology
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {featured.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button type="button" onClick={() => setOpen(featured)} className={btnPrimary}>
                    View Case Study
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={btnSecondary}>
                    <MessageCircle className="h-4 w-4" aria-hidden /> Discuss a similar build
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card-surface p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
                  Workflow
                </div>
                <ol className="mt-5 grid gap-2">
                  {featured.architecture.map((step, i) => (
                    <li
                      key={step}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 transition duration-300 hover:border-primary/40"
                    >
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-sm font-medium">{step}</span>
                      <ArrowRight
                        className="h-3.5 w-3.5 shrink-0 text-border-strong transition duration-300 group-hover:text-primary"
                        aria-hidden
                      />
                    </li>
                  ))}
                </ol>
                <p className="mt-5 border-t border-border pt-5 text-[11px] leading-relaxed text-muted-foreground">
                  Illustrative architecture diagram — not a production screenshot.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ————— 06 Work ————— */}
        <section id="work" className="border-y border-border bg-surface/30">
          <div className={`${shell} ${section}`}>
            <Reveal>
              <Head
                n="06"
                label="Selected work"
                title="Systems built for finance, operations and HR teams"
                sub="Open any project for the full case study — problem, architecture, implementation and outcome."
              />
            </Reveal>

            <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`min-h-11 rounded-full border px-4 text-sm transition duration-300 ${
                    filter === f
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {visible.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal as="article" key={p.id} delay={(i % 2) * 80}>
                    <button
                      type="button"
                      onClick={() => setOpen(p)}
                      className="card-surface hairline-top group flex h-full w-full flex-col overflow-hidden p-0 text-left"
                    >
                      {p.image && (
                        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-surface/60">
                          <img
                            src={p.image}
                            alt={`${p.title} — project visual`}
                            loading="lazy"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition duration-300 group-hover:scale-105">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
                          {p.category}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {p.short}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-1.5 opacity-70 transition duration-300 group-hover:opacity-100">
                        {p.stack.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
                        <span className="min-w-0 truncate text-xs text-muted-foreground">
                          {p.client} · {p.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                          Case study
                          <ArrowRight
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden
                          />
                        </span>
                       </div>
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ————— 07 Technology ————— */}
        <section className={`${shell} ${section}`}>
          <Reveal>
            <Head
              n="07"
              label="Stack"
              title="Technology I work with"
              sub="Hover or tap a technology to see how it shows up in the work."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {techGroups.map((g, i) => (
              <Reveal key={g.group} delay={(i % 3) * 80}>
                <div className="card-surface h-full p-6">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
                    {g.group}
                  </h3>
                  <ul className="mt-5 grid gap-2">
                    {g.items.map((it) => (
                      <li
                        key={it.name}
                        className="group rounded-xl border border-border bg-background/40 px-3.5 py-2.5 transition duration-300 hover:border-primary/40"
                      >
                        <span className="text-sm font-medium">{it.name}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground opacity-80">
                          {it.use}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ————— 08 Architecture ————— */}
        <section className="border-y border-border bg-surface/30">
          <div className={`${shell} ${section}`}>
            <Reveal>
              <Head
                n="08"
                label="Architecture"
                title="From business process to production system."
                sub="The same layered shape underpins every system I deliver."
              />
            </Reveal>
            <Reveal>
              <ArchitectureDiagram />
            </Reveal>
          </div>
        </section>

        {/* ————— 09 Process ————— */}
        <section id="process" className={`${shell} ${section}`}>
          <Reveal>
            <Head n="09" label="Process" title="How I turn ideas into working systems." />
          </Reveal>
          <ol className="relative grid gap-0 border-l border-border pl-6 sm:pl-8">
            {processSteps.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 70} className="list-none pb-8 last:pb-0">
                <span
                  className="absolute -left-[6.5px] mt-2 h-3 w-3 rounded-full border-2 border-primary bg-background"
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-mono text-xs text-primary">{p.n}</span>
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{p.title}</h3>
                </div>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ————— 10 About ————— */}
        <section id="about" className="border-y border-border bg-surface/30">
          <div className={`${shell} ${section}`}>
            <Reveal>
              <Head
                n="10"
                label="About"
                title="Engineering systems that solve real business problems."
              />
            </Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <Reveal>
                <figure className="card-surface overflow-hidden p-0">
                  <img
                    src={PROFILE_IMG}
                    alt="Portrait of Gagoope Clarance Merafhe"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <figcaption className="border-t border-border p-5">
                    <div className="text-sm font-semibold">Gagoope Clarance Merafhe</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      IT Systems Developer · Gaborone · Botswana
                    </div>
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal delay={100}>
                <div className="grid gap-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  <p>
                    I&apos;m a Botswana-based developer working across SAP Business One, business
                    automation, full-stack web applications, APIs and databases. Most of my work
                    starts with a process that people are doing by hand — and ends with a system
                    that does it for them, correctly, every time.
                  </p>
                  <p>
                    My background is Computer Engineering, and I hold a Bachelor of Engineering
                    (Honours) in Computer Engineering with a minor in Computer Science. Day to day
                    that means SAP add-on development with the DI and UI APIs, internal applications
                    on PHP/IIS, SQL Server and MySQL data models, and the reporting that finance and
                    operations teams actually use.
                  </p>
                </div>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {education.slice(0, 4).map((e) => (
                    <div key={e.id} className="border-t border-border pt-4">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                        {e.kind}
                      </div>
                      <div className="mt-2 text-sm font-semibold">{e.title}</div>
                      <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {e.sub}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-9 border-t border-border pt-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    Community · {volunteer.period}
                  </div>
                  <h3 className="mt-3 text-base font-semibold tracking-tight">{volunteer.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{volunteer.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {volunteer.body}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ————— 11 Why work with me ————— */}
        <section className={`${shell} ${section}`}>
          <Reveal>
            <Head
              n="11"
              label="Why work with me"
              title="Built around real business needs"
              sub="No borrowed testimonials — here's how I approach the work and what you can expect."
            />
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {whyWorkWithMe.map((w, i) => (
              <Reveal key={w.label} delay={(i % 2) * 80}>
                <div className="h-full bg-background p-6 transition duration-300 hover:bg-surface sm:p-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
                    {w.label}
                  </div>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {w.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ————— 12 CV ————— */}
        <section className="border-y border-border bg-surface/30">
          <div className={`${shell} py-14 sm:py-20`}>
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <Label n="12">Curriculum vitae</Label>
                  <h2 className="mt-5 text-[1.75rem] font-semibold tracking-tight sm:text-[2.25rem]">
                    Want the full story?
                  </h2>
                  <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
                    Download my CV to explore my experience, technical skills and professional
                    background.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={CV_PATH} download className={btnPrimary}>
                    <Download className="h-4 w-4" aria-hidden /> Download CV
                  </a>
                  <CvPreviewButton label="Preview CV" className={btnSecondary} />
                  <a href={GITHUB} target="_blank" rel="noreferrer" className={btnGhost}>
                    <Github className="h-4 w-4" aria-hidden /> GitHub
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ————— 13 Contact ————— */}
        <section id="contact" className={`${shell} ${section}`}>
          <Reveal>
            <Head
              n="13"
              label="Contact"
              title="Have a process that needs automation?"
              sub="Let's turn the manual work into a reliable system."
            />
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal>
              <div className="grid gap-3">
                {[
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: `+267 ${WHATSAPP_LOCAL}`,
                    href: WHATSAPP_URL,
                    ext: true,
                  },
                  {
                    icon: Mail,
                    label: "Email Me",
                    value: EMAIL,
                    href: `mailto:${EMAIL}`,
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: `+267 ${WHATSAPP_LOCAL}`,
                    href: `tel:+267${WHATSAPP_LOCAL}`,
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "github.com/Gagoope",
                    href: GITHUB,
                    ext: true,
                  },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      {...(c.ext ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="card-surface group flex min-h-11 items-center gap-4 p-4 sm:p-5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                        <Icon className="h-4.5 w-4.5" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {c.label}
                        </span>
                        <span className="mt-0.5 block break-all text-sm font-medium">{c.value}</span>
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
                        aria-hidden
                      />
                    </a>
                  );
                })}
                <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden /> Gaborone,
                  Botswana · remote &amp; on-site
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface/30 pb-28 sm:pb-0">
        <div className={`${shell} py-12 sm:py-16`}>
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-primary/30 bg-primary/10 font-mono text-xs font-bold text-primary">
                  GCM
                </span>
                <span className="text-sm font-semibold tracking-tight">Gagoope Merafhe</span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Business Automation • Software Engineering
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" aria-hidden /> Gaborone . Botswana 🇧🇼
              </p>
            </div>

            <nav aria-label="Footer navigation" className="grid content-start gap-2.5 text-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                Sections
              </span>
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="grid content-start gap-2.5 text-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                Elsewhere
              </span>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
              >
                <Github className="h-4 w-4" aria-hidden /> GitHub
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden /> Email
              </a>
              <a
                href={CV_PATH}
                download
                className="inline-flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
              >
                <Download className="h-4 w-4" aria-hidden /> CV
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Gagoope Merafhe. All rights reserved.
          </div>
        </div>
      </footer>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
