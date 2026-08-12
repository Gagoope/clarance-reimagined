import { useState } from "react";
import { architectureFlow } from "@/data/portfolio";

/** Interactive vertical architecture diagram; collapses gracefully on mobile. */
export function ArchitectureDiagram() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start">
      <ol className="grid gap-0">
        {architectureFlow.map((n, i) => {
          const isActive = active === i;
          return (
            <li key={n.label} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
              <div className="flex flex-col items-center">
                <span
                  className={`h-3 w-3 shrink-0 rounded-full border-2 transition duration-300 ${
                    isActive ? "border-primary bg-primary" : "border-border-strong bg-background"
                  }`}
                />
                {i < architectureFlow.length - 1 && (
                  <span className="relative my-1 w-px flex-1 overflow-hidden bg-border-strong/70">
                    <span
                      className="flow-particle absolute inset-x-0 h-4 bg-primary"
                      style={{ animationDelay: `${i * 0.5}s` }}
                    />
                  </span>
                )}
              </div>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`mb-3 min-h-11 w-full rounded-xl border px-4 py-3 text-left transition duration-300 ${
                  isActive
                    ? "border-primary/50 bg-primary/8 shadow-soft"
                    : "border-border bg-surface/40 hover:border-primary/30"
                }`}
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 text-sm font-semibold sm:text-base">{n.label}</span>
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  {n.note}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <aside className="card-surface p-6 lg:sticky lg:top-28">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
          Layer {String(active + 1).padStart(2, "0")}
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight">
          {architectureFlow[active].label}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {architectureFlow[active].note}
        </p>
        <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
          Every layer is designed so a business process can be traced from the person doing the work
          to the record that ends up in SAP or SQL.
        </p>
      </aside>
    </div>
  );
}
