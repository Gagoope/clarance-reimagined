import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ExternalLink, X } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { btnPrimary, btnSecondary } from "@/components/ui-kit";
import { WHATSAPP_URL } from "@/data/portfolio";

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-5">
      <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">{label}</h3>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;
  const Icon = project.icon;

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      <div
        onClick={onClose}
        className="absolute inset-0 animate-fade-in bg-background/80 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="absolute inset-x-0 bottom-0 top-0 mx-auto flex w-full max-w-3xl flex-col sm:inset-4 sm:top-8 sm:bottom-8 sm:rounded-2xl overflow-hidden border border-border bg-background shadow-lift"
      >
        <header className="glass flex items-center justify-between gap-3 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to Work
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="grid min-h-11 min-w-11 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-10 sm:px-8">
          {/* Mockup hero — representative, not a production screenshot */}
          <div className="ambient relative overflow-hidden rounded-xl border border-border bg-surface/50 p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
                  {project.category}
                </div>
                <div className="truncate text-sm text-muted-foreground">
                  {project.client} · {project.period}
                </div>
              </div>
            </div>
            <div className="mt-5 grid gap-2">
              {project.architecture.map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background/50 px-3 py-2"
                >
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 truncate text-sm">{step}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-muted-foreground">
              Illustrative system diagram — not a production screenshot.
            </p>
          </div>

          <h2 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">
            {project.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.short}</p>

          <div className="mt-8 grid gap-6">
            <Block label="Problem">{project.problem}</Block>
            <Block label="Approach">{project.approach}</Block>
            <Block label="Technology">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Block>
            <Block label="Implementation">
              <ul className="grid gap-2.5">
                {project.implementation.map((it) => (
                  <li key={it} className="flex items-start gap-2.5">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Block>
            <Block label="Result">{project.result}</Block>
            <Block label="Impact">{project.impact}</Block>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={btnPrimary}>
              Discuss a similar build
            </a>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className={btnSecondary}>
                Launch Demo <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
