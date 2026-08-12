import { useEffect, useState } from "react";

/** Very subtle cursor-following glow. Desktop pointers only, off for reduced motion. */
export function CursorGlow() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!pos) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      style={{
        background: `radial-gradient(360px circle at ${pos.x}px ${pos.y}px, color-mix(in oklch, var(--color-primary) 8%, transparent), transparent 70%)`,
      }}
    />
  );
}
