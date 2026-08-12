import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { EMAIL, WHATSAPP_INTL } from "@/data/portfolio";
import { btnPrimary } from "@/components/ui-kit";

type Fields = { name: string; email: string; company: string; topic: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const topics = [
  "SAP Business One development",
  "Business process automation",
  "Enterprise web application",
  "API development or integration",
  "Database & reporting",
  "Something else",
];

const inputBase =
  "min-h-11 w-full rounded-xl border border-border bg-background/50 px-3.5 text-sm text-foreground " +
  "placeholder:text-muted-foreground transition focus:border-primary/60";

export function ContactForm() {
  const [v, setV] = useState<Fields>({
    name: "",
    email: "",
    company: "",
    topic: topics[0],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const set = (k: keyof Fields) => (e: { target: { value: string } }) =>
    setV((p) => ({ ...p, [k]: e.target.value }));

  const validate = (): Errors => {
    const next: Errors = {};
    if (v.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
      next.email = "Please enter a valid email address.";
    if (v.message.trim().length < 10)
      next.message = "Tell me a little more — at least 10 characters.";
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    setState("sending");
    const body = [
      `Name: ${v.name}`,
      `Email: ${v.email}`,
      v.company ? `Company: ${v.company}` : "",
      `Needs help with: ${v.topic}`,
      "",
      v.message,
    ]
      .filter(Boolean)
      .join("\n");

    // No backend: hand the message to the user's own mail client (and offer WhatsApp).
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Project enquiry — ${v.topic}`,
    )}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => setState("sent"), 600);
  };

  if (state === "sent") {
    return (
      <div className="card-surface p-6 sm:p-8" role="status">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-success/40 bg-success/10 text-success">
          <Check className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="mt-5 text-lg font-semibold tracking-tight">Message ready to send</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Your email client should have opened with the details filled in. If it didn&apos;t, message
          me directly on WhatsApp and I&apos;ll reply there.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
              `Hi Gagoope, ${v.name} here — ${v.topic}. ${v.message}`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className={btnPrimary}
          >
            Send on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setState("idle")}
            className="min-h-11 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Write another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-surface grid gap-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="cf-name" className="text-xs font-medium text-foreground">
            Name
          </label>
          <input
            id="cf-name"
            value={v.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
            className={inputBase}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="cf-name-err" className="text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="cf-email" className="text-xs font-medium text-foreground">
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            value={v.email}
            onChange={set("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
            className={inputBase}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p id="cf-email-err" className="text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="cf-company" className="text-xs font-medium text-foreground">
            Company <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="cf-company"
            value={v.company}
            onChange={set("company")}
            className={inputBase}
            placeholder="Organisation name"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="cf-topic" className="text-xs font-medium text-foreground">
            What do you need help with?
          </label>
          <select id="cf-topic" value={v.topic} onChange={set("topic")} className={inputBase}>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="cf-message" className="text-xs font-medium text-foreground">
          Message
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={v.message}
          onChange={set("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
          className={`${inputBase} min-h-32 py-3 leading-relaxed`}
          placeholder="Describe the process or system you'd like to improve."
        />
        {errors.message && (
          <p id="cf-message-err" className="text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={state === "sending"} className={`${btnPrimary} mt-2 w-full sm:w-auto`}>
        {state === "sending" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Send className="h-4 w-4" aria-hidden />
        )}
        Send Message
      </button>
      <p className="text-[11px] leading-relaxed text-muted-foreground">
        Messages open in your own email client — nothing is stored and no keys are used.
      </p>
    </form>
  );
}
