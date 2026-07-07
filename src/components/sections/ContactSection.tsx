"use client";

import { useState, useRef, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const submittedAtRef = useRef("");

  useEffect(() => {
    submittedAtRef.current = new Date().toISOString();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const website = (
        e.currentTarget.elements.namedItem("website") as HTMLInputElement | null
      )?.value ?? "";

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          website,
          submittedAt: submittedAtRef.current,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <Section
      id="contact"
      className="border-t border-white/5 py-24 lg:py-40"
    >
      <Reveal>
        <div className="mb-14 flex items-center gap-3">
          <span className="font-jetbrains text-xs tracking-[0.18em] text-muted">
            04 —
          </span>
          <span className="font-jetbrains text-xs uppercase tracking-[0.18em] text-muted">
            Contact
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">

        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-heading font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-text [font-size:clamp(2rem,8vw,4rem)]">
              <div>LET&apos;S</div>
              <div className="text-primary">BUILD</div>
              <div>
                SOMETHING<span className="text-primary">.</span>
              </div>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={120}>
            {submitted ? (
              <div className="py-10">
                <h3 className="font-heading text-4xl font-extrabold text-primary">
                  Sent.
                </h3>
                <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-muted">
                  Thanks for reaching out. I&apos;ll get back to you within a day or two.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

                <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    defaultValue=""
                  />
                </div>

                <div>
                  <label className="mb-2 block font-jetbrains text-[11px] sm:text-xs uppercase tracking-[0.18em] text-muted">
                    Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Your name"
                    className="w-full border-b border-white/20 bg-transparent pb-2 sm:pb-3 font-body text-base text-text outline-none transition-colors placeholder:text-muted focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-jetbrains text-[11px] sm:text-xs uppercase tracking-[0.18em] text-muted">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    className="w-full border-b border-white/20 bg-transparent pb-2 sm:pb-3 font-body text-base text-text outline-none transition-colors placeholder:text-muted focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-jetbrains text-[11px] sm:text-xs uppercase tracking-[0.18em] text-muted">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Tell me about your project..."
                    className="w-full resize-none border-b border-white/20 bg-transparent pb-2 sm:pb-3 font-body text-base leading-relaxed text-text outline-none transition-colors placeholder:text-muted focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-muted px-6 py-3 sm:px-8 sm:py-4 font-heading text-sm font-extrabold uppercase tracking-[0.1em] text-text transition-opacity hover:opacity-85 hover:bg-primary disabled:opacity-60 cursor-pointer"
                >
                  {sending ? "Sending..." : "Send Message →"}
                </button>

                {error && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
