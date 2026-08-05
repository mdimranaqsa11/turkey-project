"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const items = ["Accredited Institutions", "Empowering Professionals", "Global Excellence"];

export function FutureSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-royal-300/30 blur-3xl" />

      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="right">
          <div className="relative mx-auto max-w-sm">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-(--radius-xl) bg-gradient-to-tr from-gold-300/40 to-royal-300/30 blur-2xl" />
            <GlassCard variant="strong" className="overflow-hidden p-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-(--radius-md)">
                <Image
                  src="/images/home/portrait-professional.jpeg"
                  alt="TIAMA-trained professional"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, 80vw"
                />
              </div>
            </GlassCard>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1} className="flex flex-col gap-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            We&apos;re shaping the future of{" "}
            <span className="text-gradient-royal">Medical Science</span>
          </h2>

          <GlassCard variant="light" className="flex items-center gap-4 p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-(--radius-sm) bg-gradient-to-br from-royal-600 to-royal-400 text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-950">Global Recognition</p>
              <p className="text-xs text-ink-700/60">50+ Countries</p>
            </div>
          </GlassCard>

          <p className="text-base leading-relaxed text-ink-700/80">
            The Turkey International Academy of The Medical Science &amp;
            Aesthetics (TIAMA) Certification is a globally recognized
            authority dedicated to upholding the highest standards of
            excellence in the medical science, aesthetic, cosmetology
            education &amp; practice.
          </p>

          <div className="flex flex-col divide-y divide-ink-900/10 overflow-hidden rounded-(--radius-md) glass-panel">
            {items.map((item, i) => (
              <button
                key={item}
                type="button"
                onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                className="flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-ink-900 transition-colors hover:bg-white/40"
              >
                {item}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    "shrink-0 text-royal-600 transition-transform duration-300 ease-(--ease-premium)",
                    openIndex === i && "rotate-180"
                  )}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
