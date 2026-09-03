import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckList } from "@/components/ui/CheckList";
import { Reveal } from "@/components/motion/Reveal";

const cpdBenefits = [
  "Enhanced credibility for your training programs with internationally recognized CPD standards",
  "Increased enrollment appeal to professionals seeking accredited continuing education",
  "Official CPD point allocation for each course module",
  'Use of "CPD Accredited by TIAMA" badge on course materials and certificates',
  "Support in meeting professional regulatory requirements for ongoing education",
  "Digital CPD certificates with verifiable tracking and authentication",
];

export function CPDAccreditation() {
  return (
    <section className="py-24 sm:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <GlassCard variant="strong" className="flex flex-col gap-6 rounded-(--radius-lg) p-8 sm:p-10">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-(--radius-sm) bg-gold font-display text-sm font-extrabold text-navy-deep">
                CPD
              </span>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                CPD Accreditation
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              TIAMA is proud to offer CPD (Continuing Professional
              Development) Accreditation for courses and training programs
              that meet rigorous standards for Ongoing Professional Holistic
              Medical education in all aspects including Fellowship, P.G.
              Diplomas also Medical cosmetology, aesthetic and allied Health
              care Fields.
            </p>
          </GlassCard>
        </Reveal>

        <Reveal className="flex flex-col gap-4">
          <h3 className="font-display text-xl font-bold text-navy">
            What is CPD Accreditation?
          </h3>
          <p className="text-base leading-relaxed text-muted">
            CPD Accreditation recognizes courses that contribute to the
            continuous learning and skill enhancement of healthcare and
            aesthetic professionals. These programs help practitioners stay
            current with evolving techniques, technologies, and industry
            best practices.
          </p>
          <p className="text-base leading-relaxed text-muted">
            CPD-accredited courses are assigned CPD points/hours based on
            course duration, complexity, and learning outcomes, which
            professionals can use to demonstrate their commitment to
            lifelong learning.
          </p>
        </Reveal>

        <div className="flex flex-col gap-4">
          <Reveal>
            <h3 className="font-display text-xl font-bold text-navy">
              Benefits of CPD Accreditation
            </h3>
          </Reveal>
          <CheckList items={cpdBenefits} columns={2} />
        </div>
      </Container>
    </section>
  );
}
