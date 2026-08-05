"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const slides = [
  {
    eyebrow: "Uluslararası Kalite ve Güvenlik Standartları",
    badge: "Profesyonel Dürüstlük ve Mükemmellik",
    title: "Güvenin Simgesi",
    highlight: "Dünyadaki Kurumları Yükseltiyoruz",
    body: "Sertifikamız, profesyonelleri güçlendiren, kurumları yükselten ve dünya genelinde müşterilere güven aşılayan bir güven ve üstünlük işaretidir.",
  },
  {
    eyebrow: "Uluslararası Kalite ve Güvenlik Standartları",
    badge: "Titiz Değerlendirme ve Akreditasyon",
    title: "Küresel İtibar",
    highlight: "Tıp Biliminde Mükemmellik",
    body: "TIAMA ile sadece bir tanınırlık veya sertifika elde etmezsiniz; tıp bilimi dünyasında mükemmellik için küresel bir itibar kazanırsınız.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-ink-950 pt-28 pb-16 sm:pt-32">
      <Image
        src="/images/home/hero-seminar.jpeg"
        alt="Medical and aesthetics professionals at a TIAMA seminar"
        fill
        priority
        className="object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-900/60" />
      <div className="absolute inset-0 bg-mesh-hero mix-blend-soft-light" />

      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-royal-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl" />

      <Container className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex max-w-3xl flex-col gap-6"
          >
            <span className="glass-panel-dark inline-flex w-fit items-center gap-2 rounded-(--radius-full) px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">
              {slide.eyebrow}
            </span>

            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {slide.title}
              <br />
              <span className="text-gradient-gold">{slide.highlight}</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-mist-100/80 sm:text-lg">
              {slide.body}
            </p>

            <div className="glass-panel-dark inline-flex w-fit items-center gap-2 rounded-(--radius-full) px-4 py-2 text-xs font-medium text-mist-100/90">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              {slide.badge}
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <Button href="/courses" variant="gold" size="lg">
                Courses
              </Button>
              <Button href="/about" variant="glass" size="lg" className="text-white">
                Learn More
              </Button>
            </div>

            <p className="mt-2 text-xs font-medium tracking-wide text-mist-100/60">
              Global Internal Qualification Registration ID ·{" "}
              <span className="text-gold-300">TIA-TR-YKSB-2020-1042</span>
            </p>
          </motion.div>
        </AnimatePresence>
      </Container>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-400 ease-(--ease-premium)",
              i === index ? "w-8 bg-gold-400" : "w-1.5 bg-white/30 hover:bg-white/50"
            )}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setIndex((i) => (i + 1) % slides.length)}
        className="glass-panel-dark absolute right-6 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-110 sm:flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </section>
  );
}
