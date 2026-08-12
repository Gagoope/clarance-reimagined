import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/portfolio";

/** Floating WhatsApp action — sits above the mobile tab bar, small on desktop. */
export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Gagoope on WhatsApp"
      className="group fixed bottom-[calc(5.75rem+env(safe-area-inset-bottom))] right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition duration-300 hover:scale-105 hover:brightness-110 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
    >
      <MessageCircle className="h-6 w-6 sm:h-5 sm:w-5" aria-hidden />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-foreground opacity-0 shadow-soft transition duration-300 group-hover:opacity-100 lg:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
