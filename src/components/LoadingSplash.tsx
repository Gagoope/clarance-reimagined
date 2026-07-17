import { useEffect, useState } from "react";

export function LoadingSplash() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Only run on initial load per session
    if (typeof window !== "undefined" && sessionStorage.getItem("gcm_splash_seen")) {
      setVisible(false);
      return;
    }
    const t1 = setTimeout(() => setFading(true), 1800);
    const t2 = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem("gcm_splash_seen", "1");
      } catch {
        /* ignore */
      }
    }, 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[200] grid place-items-center bg-background transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <svg
            viewBox="0 0 320 120"
            className="h-24 w-auto sm:h-32"
            aria-label="GCM"
          >
            <defs>
              <style>{`
                .gcm-letter {
                  fill: none;
                  stroke: color-mix(in oklch, var(--color-primary) 25%, transparent);
                  stroke-width: 2;
                  font-family: var(--font-display), sans-serif;
                  font-weight: 700;
                  font-size: 110px;
                  letter-spacing: 4px;
                }
                .gcm-active {
                  stroke: var(--color-primary);
                  filter: drop-shadow(0 0 12px color-mix(in oklch, var(--color-primary) 70%, transparent));
                  animation: gcm-cycle 1.6s ease-in-out infinite;
                }
                @keyframes gcm-cycle {
                  0%, 100% { opacity: 0.35; }
                  50% { opacity: 1; }
                }
              `}</style>
            </defs>
            <text x="10" y="95" className="gcm-letter">G</text>
            <text x="115" y="95" className="gcm-letter gcm-active">C</text>
            <text x="215" y="95" className="gcm-letter">M</text>
          </svg>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="h-px w-40 overflow-hidden bg-border">
            <div className="h-full w-1/3 animate-[gcm-bar_1.4s_ease-in-out_infinite] bg-primary" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Loading Portfolio…
          </div>
        </div>
      </div>
      <style>{`
        @keyframes gcm-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
