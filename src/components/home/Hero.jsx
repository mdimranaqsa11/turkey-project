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
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-mesh-hero px-6 pb-20 pt-28 sm:px-8 sm:pt-32">
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-600/40 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-gold-500/20 blur-[100px]" />

      <Container className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 flex flex-col gap-6 lg:col-span-7"
          >
            <span className="glass-panel-dark inline-flex w-fit items-center gap-2 rounded-(--radius-full) px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold-300">
              {slide.eyebrow}
            </span>

            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-mist-50 sm:text-5xl lg:text-6xl">
              {slide.title}
              <br />
              <span className="text-gradient-gold">{slide.highlight}</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-mist-200/80 sm:text-lg">
              {slide.body}
            </p>

            <div className="glass-panel-dark inline-flex w-fit items-center gap-2 rounded-(--radius-full) px-4 py-2 text-xs font-medium text-mist-100/90">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              {slide.badge}
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <Button href="/courses" variant="primary" size="lg">
                Courses
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Button>
              <Button href="/about" variant="glass" size="lg">
                Learn More
              </Button>
            </div>

            <p className="mt-2 text-xs font-medium tracking-wide text-mist-200/50">
              Global Internal Qualification Registration ID ·{" "}
              <span className="text-gold-300">TIA-TR-YKSB-2020-1042</span>
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="relative hidden h-[600px] lg:col-span-5 lg:block">
          <div className="absolute inset-0 overflow-hidden rounded-(--radius-lg) border border-white/10 opacity-80">
            <Image
              src="/images/home/hero-seminar.jpeg"
              alt="Medical and aesthetics professionals at a TIAMA seminar"
              fill
              priority
              className="object-cover object-center"
              sizes="40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
          </div>

          <div className="glass-panel-strong absolute -left-8 top-10 flex w-72 -rotate-3 items-center gap-4 rounded-(--radius-md) p-6 transition-transform duration-500 hover:rotate-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-400 bg-gold-400/10">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-300">
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                <circle cx="12" cy="8" r="6" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.1em] text-gold-300">
                Accredited
              </div>
              <div className="font-display text-sm font-bold text-mist-50">
                TIAMA Certification
              </div>
            </div>
          </div>

          <div className="glass-panel-strong absolute -right-8 bottom-16 flex w-64 rotate-6 items-center gap-4 rounded-(--radius-md) p-6 transition-transform duration-500 hover:rotate-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-royal-300 bg-royal-300/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-300">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.1em] text-royal-300">
                Global Network
              </div>
              <div className="font-display text-sm font-bold text-mist-50">50+ Countries</div>
            </div>
          </div>
        </div>
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
    </section>
  );
}
