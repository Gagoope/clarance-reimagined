import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui-kit";
import { CvPdfViewer } from "@/components/CvPdfViewer";
import { useDialogFocus } from "@/hooks/use-dialog-focus";
const cvAsset = { url: "/assets/Gagoope_Merafhe_Updated_CV.pdf" };

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
  const dialogRef = useRef<HTMLDivElement>(null);
  useDialogFocus(dialogRef, open);

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
      <Button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={
          className ??
          `inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition duration-300 ${base}`
        }
      >
        <FileText className="h-4 w-4" aria-hidden /> {label}
      </Button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-end justify-center bg-background/80 p-0 backdrop-blur-md animate-in fade-in duration-200 sm:items-center sm:p-6"
            onClick={() => setOpen(false)}
          >
            <div
              ref={dialogRef}
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
                    download="Gagoope_Merafhe_Updated_CV.pdf"
                    aria-label="Download CV"
                    className="inline-flex min-h-10 items-center gap-2 rounded-full bg-primary px-3 text-xs font-medium text-primary-foreground transition duration-300 hover:brightness-110 sm:px-4"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <Button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close preview"
                    className="grid min-h-11 min-w-11 p-0 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
                  >
                    <X className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </div>
              <div className="relative min-h-0 flex-1 overflow-hidden bg-card">
                <CvPdfViewer url={cvAsset.url} />
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
