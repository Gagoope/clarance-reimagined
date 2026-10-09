import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronDown, Download, Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CvPreviewButton } from "@/components/CvPreview";
import { LoadingSplash } from "@/components/LoadingSplash";
import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { ProjectModal } from "@/components/ProjectModal";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button, btnPrimary, btnSecondary, btnGhost } from "@/components/ui-kit";
import heroImage from "@/assets/gcm-workstation-hero.jpg";
import { CV_PATH, EMAIL, GITHUB, LINKEDIN, PROFILE_IMG, WHATSAPP_LOCAL, WHATSAPP_URL, education, experience, heroTech, processSteps, projects, services, techGroups, volunteer, type Project } from "@/data/portfolio";

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
              sameAs: [GITHUB, LINKEDIN],
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

const shell = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function SectionTitle({ label, title }: { label: string; title: string }) {
  return <header className="mb-8"><p className="mb-3 font-mono text-xs text-primary">{label}</p><h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2></header>;
}

function Portfolio() {
  const [open, setOpen] = useState<Project | null>(null);
  const [allWork, setAllWork] = useState(false);
  const visible = allWork ? projects : projects.slice(0, 3);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <LoadingSplash />
      <SiteNav links={links} whatsappUrl={WHATSAPP_URL} />
      <WhatsAppFab />
      <main id="main">
        <section id="top" className="portfolio-hero relative isolate overflow-hidden">
          <img src={heroImage} alt="Software development workstation" decoding="async" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
          <div className="hero-shade absolute inset-0 -z-10" />
          <div className={`${shell} pb-10 pt-36 sm:pb-12 sm:pt-44`}>
            <Reveal>
              <p className="mb-6 flex items-center gap-2 text-sm text-hero-muted"><MapPin className="h-4 w-4" aria-hidden />Gaborone, Botswana</p>
              <h1 className="max-w-3xl text-[2.5rem] font-semibold leading-[1.08] text-hero-foreground sm:text-6xl">Gagoope<br />Clarance Merafhe<span className="text-primary">.</span></h1>
              <p className="mt-6 text-lg font-medium text-hero-foreground sm:text-xl">Web Developer &amp; Business Automation Engineer</p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-hero-muted sm:text-base">SAP Business One, web applications and connected systems. I build software that eliminates manual work.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className={btnPrimary}>Explore my work <ArrowUpRight className="h-4 w-4" aria-hidden /></a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hero-glass inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-medium text-hero-foreground">Let’s talk <MessageCircle className="h-4 w-4" aria-hidden /></a>
              </div>
            </Reveal>
            <div className="hero-proof hero-glass mt-14 grid gap-5 rounded-2xl px-6 py-5 sm:mt-16 sm:grid-cols-[1.3fr_1fr_1fr] sm:gap-8">
              <div><span className="mb-2 block text-xs text-hero-muted">Specialising in</span><p className="text-sm font-medium text-hero-foreground">SAP Business One &amp; automation</p></div>
              <div className="border-t border-hero-border pt-4 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0"><span className="mb-2 block text-xs text-hero-muted">From idea to delivery</span><p className="text-sm font-medium text-hero-foreground">Full-stack business applications</p></div>
              <a href={CV_PATH} download className="flex items-center justify-between gap-4 border-t border-hero-border pt-4 text-sm font-medium text-hero-foreground sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">Download my CV <Download className="h-5 w-5 shrink-0" aria-hidden /></a>
            </div>
          </div>
        </section>

        <section id="work" className={`${shell} py-16 sm:py-20`}>
          <div className="flex flex-wrap items-end justify-between gap-4"><SectionTitle label="Selected work" title="Built for the real world." /><span className="mb-8 text-sm text-muted-foreground">Finance · Operations · Enterprise</span></div>
          <div className="grid gap-6 md:grid-cols-3">
            {visible.map((p, i) => {
              const Icon = p.icon;
              return <Reveal key={p.id} delay={(i % 3) * 60}>
                <article className="portfolio-project group h-full overflow-hidden rounded-2xl border border-border">
                  <Button variant="ghost" onClick={() => setOpen(p)} aria-label={`View ${p.title}`} className="project-image-button relative block aspect-[4/3] w-full overflow-hidden rounded-none p-0">
                    {p.image ? <img src={p.image} alt={p.title} loading="lazy" decoding="async" sizes="(max-width: 767px) 100vw, 33vw" className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105" /> : <div className="grid h-full w-full place-items-center bg-surface"><Icon className="h-14 w-14 text-primary" aria-hidden /></div>}
                    <span className="hero-glass absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full text-hero-foreground"><ArrowUpRight className="h-4 w-4" aria-hidden /></span>
                  </Button>
                  <div className="p-6"><p className="text-xs text-primary">{p.category} · {p.client}</p><h3 className="mt-3 text-xl font-semibold leading-snug"><Button variant="ghost" onClick={() => setOpen(p)} className="min-h-0 justify-start rounded-none p-0 text-left text-xl font-semibold leading-snug text-foreground hover:bg-transparent hover:text-primary">{p.title}</Button></h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.short}</p><p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">{p.stack.slice(0, 3).join(" / ")}</p></div>
                </article>
              </Reveal>;
            })}
          </div>
          <div className="mt-8 flex justify-center"><Button onClick={() => setAllWork(!allWork)} aria-expanded={allWork}>{allWork ? "Show selected work" : `View all ${projects.length} projects`}<ChevronDown className={`h-4 w-4 transition-transform ${allWork ? "rotate-180" : ""}`} aria-hidden /></Button></div>
        </section>

        <section id="services" className="border-y border-border bg-surface/30">
          <div className={`${shell} py-14 sm:py-16`}>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionTitle label="What I do" title="Less manual work. Better systems." />
              <div className="grid gap-x-8 sm:grid-cols-2">{services.map(s => { const Icon = s.icon; return <a key={s.n} href="#contact" className="group flex gap-3 border-t border-border py-5"><Icon className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden /><div><h3 className="text-sm font-semibold">{s.title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p></div><ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-primary" aria-hidden /></a>; })}</div>
            </div>
          </div>
        </section>

        <section id="about" className={`${shell} py-16 sm:py-20`}>
          <div className="grid items-center gap-10 md:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <Reveal><figure className="relative overflow-hidden rounded-2xl"><img src={PROFILE_IMG} alt="Gagoope Clarance Merafhe" loading="lazy" className="aspect-[4/5] max-h-[420px] w-full object-cover object-top" /><figcaption className="hero-glass absolute inset-x-4 bottom-4 rounded-xl p-4 text-hero-foreground"><p className="text-sm font-medium">Gagoope Merafhe</p><p className="mt-1 text-xs text-hero-muted">IT Systems Developer · Botswana</p></figcaption></figure></Reveal>
            <Reveal><SectionTitle label="A little about me" title="Technology with a purpose." /><p className="text-base leading-relaxed text-muted-foreground">I’m a Botswana-based developer working across SAP Business One, business automation, full-stack web applications, APIs and databases. My work starts with a real business problem — and ends with a system that solves it.</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Bachelor of Engineering (Honours) in Computer Engineering, with a minor in Computer Science.</p><div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-primary">{heroTech.map(t => <span key={t}>{t}</span>)}</div><div className="mt-7 flex flex-wrap gap-3"><a href={CV_PATH} download className={btnSecondary}><Download className="h-4 w-4" aria-hidden />Download CV</a><CvPreviewButton label="Preview CV" className={btnGhost} /></div>
            </Reveal>
          </div>
          <details className="portfolio-details mt-10 border-y border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-medium">Experience, education &amp; technical background<ChevronDown className="h-4 w-4 shrink-0 text-primary" aria-hidden /></summary><div className="grid gap-10 pb-8 md:grid-cols-2"><div><h3 className="mb-4 text-lg font-semibold">Experience</h3>{experience.map(x => <div key={x.role} className="mb-5"><h4 className="text-sm font-medium">{x.role}</h4><p className="mt-1 text-xs text-primary">{x.org} · {x.period}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.body}</p></div>)}<h3 className="mb-4 mt-8 text-lg font-semibold">Education &amp; certifications</h3>{education.map(e => <div key={e.id} className="mb-4"><h4 className="text-sm font-medium">{e.title}</h4><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{e.sub}</p></div>)}</div><div><h3 className="mb-4 text-lg font-semibold">Technical skills</h3>{techGroups.map(g => <div key={g.group} className="mb-4"><h4 className="text-sm font-medium">{g.group}</h4><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{g.items.map(t => t.name).join(" · ")}</p></div>)}<h3 className="mb-3 mt-8 text-lg font-semibold">Community</h3><h4 className="text-sm font-medium">{volunteer.title}</h4><p className="mt-1 text-xs text-primary">{volunteer.org} · {volunteer.period}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{volunteer.body}</p></div></div></details>
          <details id="process" className="portfolio-details border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-medium">My approach<ChevronDown className="h-4 w-4 shrink-0 text-primary" aria-hidden /></summary><ol className="grid gap-6 pb-8 sm:grid-cols-2 lg:grid-cols-4">{processSteps.map(p => <li key={p.n}><p className="text-xs text-primary">{p.n}</p><h3 className="mt-2 text-sm font-semibold">{p.title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.body}</p></li>)}</ol></details>
        </section>

        <section id="contact" className="contact-band border-y border-border">
          <div className={`${shell} py-14 sm:py-16`}>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="mb-3 font-mono text-xs text-primary">Let’s connect</p><h2 className="text-3xl font-semibold sm:text-4xl">Have something in mind?</h2><p className="mt-3 text-sm text-muted-foreground">Let’s turn your next idea into a working system.</p></div><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={`${btnPrimary} self-start md:self-auto`}>Start a conversation<ArrowUpRight className="h-4 w-4" aria-hidden /></a></div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 border-t border-border pt-6 text-sm"><a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4 text-primary" aria-hidden />{EMAIL}</a><a href={`tel:+267${WHATSAPP_LOCAL}`} className="inline-flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4 text-primary" aria-hidden />+267 {WHATSAPP_LOCAL}</a><a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Linkedin className="h-4 w-4 text-primary" aria-hidden />LinkedIn</a><a href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Github className="h-4 w-4 text-primary" aria-hidden />GitHub</a></div>
            <details className="portfolio-details mt-6"><summary className="flex cursor-pointer list-none items-center gap-2 py-3 text-sm text-muted-foreground">Send a project enquiry<ChevronDown className="h-4 w-4" aria-hidden /></summary><div className="mt-3 max-w-2xl"><ContactForm /></div></details>
          </div>
        </section>
      </main>
      <footer className={`${shell} flex flex-wrap justify-between gap-3 pb-28 pt-6 text-xs text-muted-foreground sm:pb-6`}><p>© {new Date().getFullYear()} Gagoope Merafhe</p><a href="#top" className="inline-flex items-center gap-2 hover:text-primary">Back to top <ArrowRight className="h-3 w-3 -rotate-90" aria-hidden /></a></footer>
      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
