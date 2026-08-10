import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type Mode = "light" | "dark" | "system";
const KEY = "gcm_theme";

function apply(mode: Mode) {
  const dark =
    mode === "dark" ||
    (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const root = document.documentElement;
  root.classList.toggle("light", !dark);
  root.classList.toggle("dark", dark);
}

const options: { mode: Mode; icon: typeof Sun; label: string }[] = [
  { mode: "light", icon: Sun, label: "Light theme" },
  { mode: "dark", icon: Moon, label: "Dark theme" },
  { mode: "system", icon: Monitor, label: "System theme" },
];

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [mode, setMode] = useState<Mode>("dark");

  useEffect(() => {
    const stored = (localStorage.getItem(KEY) as Mode | null) ?? "dark";
    setMode(stored);
    apply(stored);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if ((localStorage.getItem(KEY) as Mode | null) === "system") apply("system");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const select = (m: Mode) => {
    setMode(m);
    localStorage.setItem(KEY, m);
    apply(m);
  };

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={`inline-flex items-center gap-0.5 rounded-full border border-border bg-surface/60 p-0.5 ${className}`}
    >
      {options.map((o) => {
        const Icon = o.icon;
        const active = mode === o.mode;
        return (
          <button
            key={o.mode}
            type="button"
            onClick={() => select(o.mode)}
            aria-label={o.label}
            aria-pressed={active}
            className={`grid h-8 w-8 place-items-center rounded-full transition duration-300 ${
              active
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
          </button>
        );
      })}
    </div>
  );
}
