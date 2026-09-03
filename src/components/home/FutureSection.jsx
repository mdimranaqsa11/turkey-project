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
    <section className="py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="right">
          <div className="relative mx-auto max-w-sm">
            <GlassCard variant="strong" className="p-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-(--radius-md)">
                <Image
                  src="/images/home/portrait-professional.jpeg"
                  alt="TIAMA-trained professional"
                  fill
                  className="object-cover object-left"
                  sizes="(min-width: 1024px) 30vw, 80vw"
                />
              </div>
            </GlassCard>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1} className="flex flex-col gap-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            We&apos;re shaping the future of{" "}
            <span className="text-gold-dark">Medical Science</span>
          </h2>

          <GlassCard variant="light" className="flex items-center gap-4 p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-(--radius-sm) border border-blue/40 bg-blue-soft text-blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-navy">Global Recognition</p>
              <p className="text-xs text-muted">50+ Countries</p>
            </div>
          </GlassCard>

          <p className="text-base leading-relaxed text-muted">
            The Turkish International Academy of The Medical Science &amp;
            Aesthetics (TIAMA) Certification is a globally recognized
            authority dedicated to upholding the highest standards of
            excellence in the medical science, aesthetic, cosmetology
            education &amp; practice.
          </p>

          <div className="flex flex-col divide-y divide-border overflow-hidden rounded-(--radius-md) border border-border bg-white">
            {items.map((item, i) => (
              <button
                key={item}
                type="button"
                onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                className="flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-text hover:bg-ivory"
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
                    "shrink-0 text-gold-dark",
                    openIndex === i ? "rotate-180" : ""
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
