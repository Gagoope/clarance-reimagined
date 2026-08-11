import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Download, FileText, Loader2 } from "lucide-react";
const cvAsset = { url: "/assets/Gagoope_Clarance_Merafhe_CV.pdf" };

export function CvPreviewButton({
  className,
  label = "Preview CV",
  variant = "outline",
}: {
  className?: string;
  label?: string;
  variant?: "outline" | "solid";
}) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

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

  const base =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:brightness-110"
      : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={
          className ??
          `inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition duration-300 ${base}`
        }
      >
        <FileText className="h-4 w-4" aria-hidden /> {label}
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-end justify-center bg-background/80 p-0 backdrop-blur-md animate-in fade-in duration-200 sm:items-center sm:p-6"
            onClick={() => setOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Curriculum Vitae preview"
              onClick={(e) => e.stopPropagation()}
              className="animate-in slide-in-from-bottom-4 duration-300 relative flex h-[100dvh] w-full max-w-5xl flex-col overflow-hidden border border-border bg-surface shadow-lift sm:h-[90dvh] sm:rounded-2xl"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border bg-surface-elevated/70 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-5 sm:pt-3">
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    Curriculum Vitae
                  </div>
                  <div className="truncate text-[13px] font-medium sm:text-sm">
                    Gagoope Clarance Merafhe — CV
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={cvAsset.url}
                    download="Gagoope_Clarance_Merafhe_CV.pdf"
                    aria-label="Download CV"
                    className="inline-flex min-h-10 items-center gap-2 rounded-full bg-primary px-3 text-xs font-medium text-primary-foreground transition duration-300 hover:brightness-110 sm:px-4"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close preview"
                    className="grid min-h-10 min-w-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
                  >
                    <X className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              </div>
              <div className="relative flex-1 overflow-hidden">
                {!loaded && (
                  <div className="absolute inset-0 grid place-items-center gap-3 bg-surface">
                    <div className="flex flex-col items-center gap-3 text-muted-foreground">
                      <Loader2 className="h-5 w-5 animate-spin text-primary" aria-hidden />
                      <span className="font-mono text-[10px] uppercase tracking-widest">
                        Loading CV…
                      </span>
                    </div>
                  </div>
                )}
                <iframe
                  title="CV preview"
                  src={`${cvAsset.url}#view=FitH`}
                  onLoad={() => setLoaded(true)}
                  className="h-full w-full bg-white"
                />
              </div>
              <div className="border-t border-border bg-surface-elevated/70 px-4 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] text-center sm:hidden">
                <a
                  href={cvAsset.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] uppercase tracking-widest text-primary underline-offset-4 hover:underline"
                >
                  Open in new tab
                </a>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
