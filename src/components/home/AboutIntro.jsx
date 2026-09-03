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
            <GlassCard variant="strong" className="p-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-(--radius-md)">
                <Image
                  src="/images/home/about-doctors-group.jpg"
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
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Where Trust Meets{" "}
            <span className="text-gold-dark">Medical Training</span>
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
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
                className="flex items-center gap-2.5 rounded-(--radius-sm) border border-border bg-white px-4 py-3 text-sm font-medium text-text"
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
                  className="shrink-0 text-gold-dark"
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
