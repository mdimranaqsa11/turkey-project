import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const chips = [
  "Professional Certification Framework",
  "International Learning Standards",
  "Ongoing Academic Support",
  "International Expert Network",
];

export function AboutIntro() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="right">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-(--radius-xl) bg-gradient-to-br from-royal-300/40 to-gold-300/30 blur-2xl" />
            <GlassCard variant="strong" className="overflow-hidden p-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-(--radius-md)">
                <Image
                  src="/images/home/about-doctors.jpeg"
                  alt="TIAMA-certified medical professionals"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </div>
            </GlassCard>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1} className="flex flex-col gap-6">
          <Eyebrow className="w-fit">TIAMA Certified</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-mist-50 sm:text-4xl">
            Where Trust Meets{" "}
            <span className="text-gradient-gold">Medical Training</span>
          </h2>
          <p className="text-base leading-relaxed text-mist-200/80 sm:text-lg">
            The Turkish International Academy of The Medical Science &amp;
            Aesthetics (TIAMA) Certifications, Fellowship represent a
            globally oriented professional education and certification
            framework dedicated to upholding high standards of excellence in
            medical science, aesthetics, and cosmetology education and
            training. Through structured evaluation and quality-focused
            learning processes, TIAMA supports institutions, academies, and
            clinics in aligning with international professional and
            educational benchmarks.
          </p>

          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {chips.map((chip) => (
              <div
                key={chip}
                className="glass-panel flex items-center gap-2.5 rounded-(--radius-sm) px-4 py-3 text-sm font-medium text-mist-100"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-gold-300"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {chip}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
