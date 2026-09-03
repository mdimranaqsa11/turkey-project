import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const commitments = [
  {
    title: "Quality Assurance",
    description:
      "Rigorous evaluation processes ensuring institutions meet international standards of excellence and safety in aesthetic education.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Global Recognition",
    description:
      "Certifications recognized across 50+ countries, providing professionals with internationally trusted credentials.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
      </svg>
    ),
  },
  {
    title: "Professional Excellence",
    description:
      "Comprehensive assessment protocols that maintain the highest standards of professional integrity and competence.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8l-6.1 3.3 1.4-6.8-5.1-4.7 6.9-.8L12 2.5z" />
      </svg>
    ),
  },
];

export function AboutCommitment() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Our commitment to educational{" "}
              <span className="text-gold-dark">excellence</span>
            </h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              TIAMA upholds the highest standards in medical science
              certification, ensuring institutions and professionals
              worldwide achieve excellence through rigorous evaluation and
              accreditation.
            </p>
          </Reveal>

          <StaggerGroup className="flex flex-col gap-4">
            {commitments.map((item) => (
              <StaggerItem key={item.title}>
                <GlassCard variant="light" className="flex items-start gap-4 rounded-(--radius-md) p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-(--radius-sm) border border-gold/40 bg-gold/10 text-gold-dark">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal direction="left" delay={0.1} className="relative mx-auto w-full max-w-md">
          <GlassCard variant="strong" className="p-3">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-(--radius-md)">
              <Image
                src="/images/about/tukeish_doc.jpg"
                alt="TIAMA-certified aesthetic medicine professional"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 90vw"
              />
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
