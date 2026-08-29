"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const suggestions = [
  "How does CPD accreditation work?",
  "What is the fellowship application process?",
  "What are the certification requirements?",
  "How long do TIAMA courses take?",
];

function SparkleIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
    </svg>
  );
}

export function AISearch() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const runSearch = async (question) => {
    const q = question.trim();
    if (!q || loading) return;

    setQuery(q);
    setLoading(true);
    setError(null);
    setAnswer(null);

    try {
      const res = await fetch("/api/ai-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setAnswer(data.answer);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runSearch(query);
  };

  return (
    <section className="relative py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-10">
        <Reveal className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <Eyebrow>
            <SparkleIcon className="h-3.5 w-3.5" />
            AI Search
          </Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-mist-50 sm:text-4xl">
            Ask anything about{" "}
            <span className="text-gradient-gold">medical education</span>
          </h2>
          <p className="text-base leading-relaxed text-mist-200/75">
            Get instant answers about certification, fellowship, and
            accreditation — powered by AI.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="w-full max-w-2xl">
          <form onSubmit={handleSubmit}>
            <GlassCard
              variant="strong"
              className="flex items-center gap-3 rounded-(--radius-full) p-2 pl-5"
            >
              <SparkleIcon className="h-5 w-5 shrink-0 text-gold-300" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask anything about certification, fellowships, or accreditation..."
                maxLength={500}
                className="w-full bg-transparent text-sm text-mist-50 placeholder:text-mist-200/40 focus:outline-none sm:text-base"
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                aria-label="Search"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-ink-950 transition-transform duration-300 ease-(--ease-premium) hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
              >
                {loading ? (
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V2C6.48 2 2 6.48 2 12h2Z" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 14 0M13 6l6 6-6 6" />
                  </svg>
                )}
              </button>
            </GlassCard>
          </form>

          <StaggerGroup className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            {suggestions.map((s) => (
              <StaggerItem key={s}>
                <button
                  type="button"
                  onClick={() => runSearch(s)}
                  disabled={loading}
                  className="glass-panel rounded-(--radius-full) px-4 py-2 text-xs font-medium text-mist-200/85 transition-colors hover:text-gold-300 disabled:opacity-50 sm:text-sm"
                >
                  {s}
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {(answer || error) && (
            <div className="mt-6">
                <GlassCard
                  variant="light"
                  className={cn(
                    "rounded-(--radius-md) p-6",
                    error && "border-red-400/30"
                  )}
                >
                  {error ? (
                    <p className="flex items-start gap-2.5 text-sm text-red-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4M12 16h.01" />
                      </svg>
                      {error}
                    </p>
                  ) : (
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-ink-950">
                        <SparkleIcon className="h-4 w-4" />
                      </span>
                      <p className="whitespace-pre-line text-sm leading-relaxed text-mist-100 sm:text-base">
                        {answer}
                      </p>
                    </div>
                  )}
                </GlassCard>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
