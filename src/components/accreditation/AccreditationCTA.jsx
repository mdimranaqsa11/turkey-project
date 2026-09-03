import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function AccreditationCTA() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <GlassCard
            variant="dark"
            className="flex flex-col items-center gap-6 px-6 py-14 text-center sm:px-12"
          >
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Apply for Accreditation
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              Join TIAMA&apos;s global network of accredited institutions and
              showcase your commitment to quality, ethics and education
              standards.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start Application
            </Button>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
