import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

/* ————— Buttons ————— */

const btnBase =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium " +
  "transition duration-300 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 " +
  "min-h-11 px-5";

export const btnPrimary =
  `${btnBase} bg-primary text-primary-foreground shadow-soft hover:shadow-lift hover:brightness-110`;

export const btnSecondary =
  `${btnBase} border border-border bg-surface/60 text-foreground hover:border-primary/50 hover:bg-surface`;

export const btnGhost =
  `${btnBase} text-muted-foreground hover:bg-surface hover:text-foreground`;

/* ————— Primitives ————— */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
      <span className="h-1 w-1 rounded-full bg-primary" />
      {children}
    </div>
  );
}

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "primary" | "success";
}) {
  const tones = {
    neutral: "border-border bg-surface text-muted-foreground",
    primary: "border-primary/35 bg-primary/10 text-primary",
    success: "border-success/35 bg-success/10 text-success",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function SectionHead({
  label,
  title,
  sub,
  align = "left",
}: {
  label: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <header
      className={`mb-10 max-w-2xl sm:mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <Eyebrow>{label}</Eyebrow>
      <h2 className="mt-4 text-[1.75rem] font-semibold leading-[1.15] tracking-tight sm:text-4xl">
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

export function Card({
  children,
  className = "",
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`card-surface overflow-hidden p-6 sm:p-7 ${
        interactive ? "hairline-top" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function IconTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition duration-300 group-hover:border-primary/50 group-hover:bg-primary/15">
      <Icon className="h-5 w-5" aria-hidden />
    </span>
  );
}

export function Stat({
  value,
  label,
  trend,
}: {
  value: string;
  label: string;
  trend?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold tracking-tight sm:text-4xl">{value}</span>
        {trend && <span className="text-xs font-medium text-success">{trend}</span>}
      </div>
      <div className="mt-2 text-sm leading-snug text-muted-foreground">{label}</div>
    </div>
  );
}

export function MetaList({ items }: { items: [string, string][] }) {
  return (
    <dl className="grid gap-2 text-sm">
      {items.map(([k, v]) => (
        <div key={k} className="flex gap-3">
          <dt className="w-20 shrink-0 text-xs uppercase tracking-wider text-muted-foreground">
            {k}
          </dt>
          <dd className="min-w-0 flex-1 text-foreground">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5 text-sm">
      {items.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-foreground">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
          <span className="leading-relaxed">{f}</span>
        </li>
      ))}
    </ul>
  );
}
