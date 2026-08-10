import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Home, Layers, Briefcase, User } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export type NavLink = { label: string; href: string };

const mobileTabs = [
  { label: "Home", href: "#top", icon: Home },
  { label: "Services", href: "#services", icon: Layers },
  { label: "Work", href: "#projects", icon: Briefcase },
  { label: "About", href: "#about", icon: User },
];

export function SiteNav({
  links,
  whatsappUrl,
}: {
  links: NavLink[];
  whatsappUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = [...links, ...mobileTabs].map((l) => l.href.slice(1));
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit?.target.id) setActive(`#${hit.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [links]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full px-3 py-2 transition-all duration-500 sm:px-4 ${
              scrolled ? "glass shadow-soft" : "border border-transparent"
            }`}
          >
            <a
              href="#top"
              className="flex min-w-0 items-center gap-2.5"
              aria-label="Back to top"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 font-mono text-xs font-bold text-primary">
                GCM
              </span>
              <span className="truncate text-sm font-semibold tracking-tight">
                Gagoope Merafhe
              </span>
            </a>

            <div className="flex items-center gap-2">
              <nav aria-label="Sections" className="hidden items-center gap-1 lg:flex">
                {links.map((l) => {
                  const isActive = active === l.href;
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative rounded-full px-3.5 py-2 text-sm transition duration-300 ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {l.label}
                      <span
                        className={`absolute inset-x-3.5 -bottom-0.5 h-px bg-primary transition-all duration-300 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>

              <ThemeToggle className="hidden sm:inline-flex" />

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden min-h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground shadow-soft transition duration-300 hover:shadow-lift hover:brightness-110 sm:inline-flex"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> Hire Me
              </a>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="grid min-h-11 min-w-11 place-items-center rounded-full border border-border bg-surface/60 text-foreground transition hover:border-primary/50 lg:hidden"
              >
                <Menu className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className={`absolute inset-x-3 top-3 rounded-2xl glass p-5 shadow-lift transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid min-h-11 min-w-11 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <nav className="mt-4 grid gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-base transition ${
                  active === l.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-surface"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base text-foreground transition hover:bg-surface"
            >
              Contact
            </a>
          </nav>
          <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-5">
            <ThemeToggle />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <nav
        aria-label="Quick navigation"
        className="fixed inset-x-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)] sm:hidden"
      >
        <div className="mx-3 mb-3 grid grid-cols-5 items-center gap-1 rounded-2xl glass p-1.5 shadow-lift">
          {mobileTabs.map((t) => {
            const Icon = t.icon;
            const isActive = active === t.href;
            return (
              <a
                key={t.href}
                href={t.href}
                className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-medium transition duration-300 ${
                  isActive ? "bg-primary/12 text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden />
                {t.label}
              </a>
            );
          })}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl bg-primary text-[10px] font-medium text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Chat
          </a>
        </div>
      </nav>
    </>
  );
}
