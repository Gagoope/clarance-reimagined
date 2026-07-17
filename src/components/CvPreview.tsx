import { useEffect, useState } from "react";
import { X, Download, FileText } from "lucide-react";
import cvAsset from "@/assets/cv.pdf.asset.json";

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
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : "border border-border text-muted-foreground hover:border-primary hover:text-primary";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ??
          `inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition ${base}`
        }
      >
        <FileText className="h-4 w-4" /> {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-primary/40 bg-surface shadow-2xl glow-primary"
          >
            <div className="flex items-center justify-between gap-4 border-b border-border bg-background/60 px-5 py-3">
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  Curriculum Vitae
                </div>
                <div className="truncate text-sm font-medium">
                  Gagoope Clarance Merafhe — CV
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={cvAsset.url}
                  download="Gagoope_Clarance_Merafhe_CV.pdf"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90"
                >
                  <Download className="h-3.5 w-3.5" /> Download
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close preview"
                  className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <iframe
              title="CV preview"
              src={`${cvAsset.url}#view=FitH`}
              className="flex-1 w-full bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}
