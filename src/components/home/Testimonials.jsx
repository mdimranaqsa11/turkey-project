"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "TIAMA accreditation elevated our clinic's credibility globally. The rigorous evaluation process ensured we met international standards in aesthetic practice. Our patient trust has increased significantly, and we've attracted clients from across borders seeking certified excellence.",
    name: "Dr. Sarah Ahmed",
    initial: "S",
  },
  {
    quote:
      "As an aesthetic practitioner, earning TIAMA certification was transformative. It validated my expertise on a global platform and opened doors to international collaborations. The certification process was thorough, ensuring I truly mastered the highest standards in cosmetology.",
    name: "Maria Gonzalez",
    initial: "M",
  },
  {
    quote:
      "Our academy's TIAMA accreditation became our strongest competitive advantage. It signals to students worldwide that they're receiving training that meets rigorous international benchmarks. Enrollment from international students has doubled since our certification.",
    name: "Dr. James Wilson",
    initial: "J",
  },
  {
    quote:
      "TIAMA certification gave my aesthetic practice the global recognition it deserved. Clients now choose us specifically because of this accreditation, knowing we uphold the highest safety and quality standards. It's more than a certificate—it's a reputation builder.",
    name: "Priya Kapoor",
    initial: "P",
  },
  {
    quote:
      "The Board's evaluation process was comprehensive and professional. Achieving TIAMA accreditation positioned our clinic among the elite in aesthetic medicine. Our team now operates with enhanced confidence, backed by internationally recognized excellence.",
    name: "Dr. Alessandro Rossi",
    initial: "A",
  },
  {
    quote:
      "TIAMA certification transformed how the industry views our academy. We're no longer just another training center—we're a globally recognized institution of excellence. The certification process refined our curriculum and elevated our teaching standards exponentially.",
    name: "Fatima Al-Mansouri",
    initial: "F",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-gold-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8l-6.1 3.3 1.4-6.8-5.1-4.7 6.9-.8L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Professionals Worldwide"
          description="Discover how TIAMA certification, accreditation and training has transformed practices, elevated institutions, and established global recognition for medical & aesthetic professionals also academies across continents."
        />

        <div className="relative w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard variant="strong" className="flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-14">
                <span className="font-display text-6xl leading-none text-gold-400/60">&ldquo;</span>
                <Stars />
                <p className="text-base leading-relaxed text-mist-100/90 sm:text-lg">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-royal-500 to-gold-400 font-display text-lg font-bold text-ink-950">
                    {t.initial}
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-bold uppercase tracking-wide text-mist-50">
                      {t.name}
                    </p>
                    <p className="text-xs font-medium text-gold-300">TIAMA Certified</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="glass-panel absolute left-0 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-mist-100 transition-transform duration-300 hover:scale-110 sm:flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="glass-panel absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full text-mist-100 transition-transform duration-300 hover:scale-110 sm:flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-400 ease-(--ease-premium)",
                i === index ? "w-8 bg-gold-400" : "w-1.5 bg-white/15 hover:bg-white/30"
              )}
            />
          ))}
        </div>

        <Button href="/testimonials" variant="glass">
          View All Testimonials
        </Button>
      </Container>
    </section>
  );
}
