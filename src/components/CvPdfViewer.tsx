import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import type { PDFDocumentProxy, PDFDocumentLoadingTask, RenderTask } from "pdfjs-dist";
import { Loader2 } from "lucide-react";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

async function fetchPdf(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Unable to load PDF (${response.status})`);
  }
  return response.arrayBuffer();
}

export function CvPdfViewer({ url }: { url: string }) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [viewerWidth, setViewerWidth] = useState(0);
  const [renderError, setRenderError] = useState(false);
  const [rendered, setRendered] = useState(false);
  const { data, error: fetchError } = useSWR<ArrayBuffer>(url, fetchPdf, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  useEffect(() => {
    if (!data) return;

    const pdfData = data;
    let cancelled = false;
    let loadingTask: PDFDocumentLoadingTask | undefined;

    async function loadDocument() {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;
        loadingTask = pdfjs.getDocument({
          data: new Uint8Array(pdfData.slice(0)),
          useSystemFonts: true,
        });
        const document = await loadingTask.promise;
        if (cancelled) {
          await loadingTask.destroy();
          return;
        }
        setPdf(document);
        setRenderError(false);
        setRendered(false);
      } catch {
        if (!cancelled) setRenderError(true);
      }
    }

    void loadDocument();

    return () => {
      cancelled = true;
      if (loadingTask) void loadingTask.destroy();
    };
  }, [data]);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      if (entry) setViewerWidth(entry.contentRect.width);
    });
    resizeObserver.observe(viewer);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!pdf || !viewerWidth || !viewerRef.current) return;

    const document = pdf;
    let cancelled = false;
    const renderTasks: RenderTask[] = [];
    setRendered(false);

    async function renderPages() {
      try {
        for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
          if (cancelled) return;
          const canvas = viewerRef.current?.querySelector<HTMLCanvasElement>(
            `[data-page-number="${pageNumber}"]`,
          );
          if (!canvas) continue;

          const page = await document.getPage(pageNumber);
          if (cancelled) return;

          const baseViewport = page.getViewport({ scale: 1 });
          const displayScale = Math.max(
            0.2,
            Math.min((viewerWidth - 32) / baseViewport.width, 1.4),
          );
          const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
          const viewport = page.getViewport({ scale: displayScale * pixelRatio });
          const context = canvas.getContext("2d", { alpha: false });
          if (!context) throw new Error("Canvas rendering is unavailable");

          canvas.width = Math.ceil(viewport.width);
          canvas.height = Math.ceil(viewport.height);
          canvas.style.width = `${Math.ceil(baseViewport.width * displayScale)}px`;
          canvas.style.height = `${Math.ceil(baseViewport.height * displayScale)}px`;

          const task = page.render({ canvas, canvasContext: context, viewport });
          renderTasks.push(task);
          await task.promise;
        }

        if (!cancelled) setRendered(true);
      } catch (error) {
        if (
          !cancelled &&
          !(error instanceof Error && error.name === "RenderingCancelledException")
        ) {
          setRenderError(true);
        }
      }
    }

    void renderPages();

    return () => {
      cancelled = true;
      renderTasks.forEach((task) => task.cancel());
    };
  }, [pdf, viewerWidth]);

  const hasError = Boolean(fetchError) || renderError;
  const isLoading = !hasError && (!data || !pdf || !rendered);

  return (
    <div
      ref={viewerRef}
      className="relative h-full overflow-auto bg-card px-4 py-6 sm:px-8"
      aria-label="CV document preview"
    >
      {pdf &&
        Array.from({ length: pdf.numPages }, (_, index) => index + 1).map((pageNumber) => (
          <div
            key={pageNumber}
            className="mx-auto mb-6 w-fit max-w-full overflow-hidden rounded-sm bg-white shadow-xl last:mb-0"
          >
            <canvas
              data-page-number={pageNumber}
              role="img"
              aria-label={`CV page ${pageNumber} of ${pdf.numPages}`}
              className="block max-w-full"
            />
          </div>
        ))}

      {isLoading && (
        <div className="absolute inset-0 z-10 grid place-items-center bg-card/90">
          <div
            className="flex flex-col items-center gap-3 text-muted-foreground"
            role="status"
            aria-live="polite"
          >
            <Loader2 className="h-5 w-5 animate-spin text-primary" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-widest">Loading CV…</span>
          </div>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 z-10 grid place-items-center bg-card px-6 text-center">
          <div className="flex max-w-sm flex-col items-center gap-3">
            <p className="text-sm text-muted-foreground" role="alert">
              This browser couldn&apos;t display the CV preview.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-primary">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                Open PDF in a new tab
              </a>
              <a href={url} download className="underline underline-offset-4">
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
