"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "ok" | "err";

export function NextCTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Bot honeypot
    if ((data.get("_honey") as string)?.length) return;

    setStatus("sending");
    setMsg("");

    try {
      const res = await fetch(SITE.contactEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && (json.success === "true" || json.success === true || res.status === 200)) {
        setStatus("ok");
        setMsg("Message received. We'll be in touch.");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Submit failed");
      }
    } catch {
      setStatus("err");
      setMsg(`Something went wrong — email ${SITE.email} directly.`);
    }
  }

  return (
    <section
      id="next"
      aria-labelledby="next-heading"
      className="relative flex min-h-screen items-center overflow-hidden bg-cream px-6 py-32 text-ink-900 sm:px-14 sm:py-40"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-6 select-none font-serif text-[clamp(20rem,35vw,32rem)] font-light italic leading-none text-ink-900/[0.028]"
      >
        e
      </span>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <Reveal>
          <div className="tag !text-ink-300">Get In Touch</div>
        </Reveal>
        <Reveal>
          <h2
            id="next-heading"
            className="mt-12 font-serif text-step-7 font-light leading-[0.9] tracking-tighter text-balance"
          >
            Let&rsquo;s build
            <br />
            something
            <br />
            <em>everywhere.</em>
          </h2>
        </Reveal>

        <form
          onSubmit={handleSubmit}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2"
          noValidate
        >
          <input type="hidden" name="_subject" value="New Enquiry — evverywhere.com" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden
          />

          <Field label="Name" name="name" type="text" placeholder="Your name" required />
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="hello@yourbrand.com"
            required
          />
          <Field
            full
            label="Brand / Company"
            name="brand"
            type="text"
            placeholder="Who are we talking to?"
          />
          <Field
            full
            textarea
            label="Tell us about your brand"
            name="message"
            placeholder="What are you building? What do you need?"
            required
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="col-span-1 mt-4 flex items-center justify-between border border-ink-100 bg-transparent px-9 py-5 font-mono text-[0.62rem] uppercase tracking-hud text-ink-900 transition-colors duration-500 hover:border-ink-900 hover:bg-ink-900 hover:text-bone disabled:opacity-50 md:col-span-2"
          >
            <span>{status === "sending" ? "Sending" : status === "ok" ? "Sent" : "Send Enquiry"}</span>
            <span aria-hidden>{status === "sending" ? "···" : status === "ok" ? "✓" : "→"}</span>
          </button>

          <p
            role="status"
            aria-live="polite"
            className={cn(
              "col-span-1 text-center font-mono text-[0.6rem] uppercase tracking-meta transition-opacity duration-500 md:col-span-2",
              status === "ok"
                ? "text-emerald-700 opacity-100"
                : status === "err"
                  ? "text-red-700 opacity-100"
                  : "opacity-0",
            )}
          >
            {msg}
          </p>
        </form>

        <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-ink-100 pt-10 md:flex-row md:items-end">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[0.55rem] uppercase tracking-meta text-ink-300">
              {SITE.city}, {SITE.country} · {SITE.coordinates.lat.toFixed(1)}°S{" "}
              {SITE.coordinates.lng.toFixed(1)}°E
            </span>
            <a
              href={`mailto:${SITE.email}`}
              className="font-serif text-xl font-light text-ink-500 transition-colors hover:text-ink-900"
            >
              {SITE.email}
            </a>
          </div>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.58rem] uppercase tracking-meta text-ink-300 transition-colors hover:text-ink-900"
          >
            {SITE.instagramHandle} ↗
          </a>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  full?: boolean;
  textarea?: boolean;
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  full,
  textarea,
}: FieldProps) {
  const id = `f-${name}`;
  return (
    <div className={cn("flex flex-col gap-2", full && "md:col-span-2")}>
      <label
        htmlFor={id}
        className="font-mono text-[0.55rem] uppercase tracking-hud text-ink-300"
      >
        {label}
        {required && <span aria-hidden> *</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={4}
          className="resize-none border-b border-ink-100 bg-transparent py-3 font-mono text-step--1 text-ink-900 placeholder:text-ink-200 transition-colors focus:border-ink-900 focus:outline-none"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="border-b border-ink-100 bg-transparent py-3 font-mono text-step--1 text-ink-900 placeholder:text-ink-200 transition-colors focus:border-ink-900 focus:outline-none"
        />
      )}
    </div>
  );
}
