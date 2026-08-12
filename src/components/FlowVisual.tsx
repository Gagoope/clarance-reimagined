import { useState } from "react";

const NODES = [
  "CSV",
  "Validation",
  "Business Logic",
  "REST API",
  "SAP Business One",
  "SQL Server",
  "Reports / Dashboard",
];

/**
 * Abstract enterprise data-flow visualisation used in the hero.
 * Pure CSS/SVG animation; disabled under prefers-reduced-motion via styles.css.
 */
export function FlowVisual() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative" aria-hidden>
      <div className="pointer-events-none absolute -inset-8 -z-10 opacity-70 [mask-image:radial-gradient(65%_65%_at_50%_45%,black,transparent)] grid-bg" />
      <div className="card-surface glass relative overflow-hidden p-5 sm:p-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
            System flow
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full text-success" />
            live
          </span>
        </div>

        <ol className="mt-5 grid gap-0">
          {NODES.map((node, i) => (
            <li key={node} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
              <div className="flex flex-col items-center">
                <span
                  className={`grid h-6 w-6 place-items-center rounded-full border font-mono text-[9px] transition duration-300 ${
                    active === i
                      ? "border-primary bg-primary/20 text-primary"
                      : "border-border-strong bg-background/60 text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </span>
                {i < NODES.length - 1 && (
                  <span className="relative my-1 w-px flex-1 overflow-hidden bg-border-strong/70">
                    <span
                      className="flow-particle absolute inset-x-0 h-3 bg-primary"
                      style={{ animationDelay: `${i * 0.45}s` }}
                    />
                  </span>
                )}
              </div>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`mb-2 min-w-0 rounded-lg border px-3 py-2 transition duration-300 ${
                  active === i
                    ? "border-primary/50 bg-primary/8"
                    : "border-border bg-background/40"
                }`}
              >
                <span className="block truncate text-sm font-medium">{node}</span>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-3 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
          Business systems connected through automation — data validated once, then moved without
          manual re-entry.
        </p>
      </div>
    </div>
  );
}
