import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function AccreditationIntro() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About TIAMA Accreditation"
            title="A private, voluntary standard of medical excellence"
            description="Turkish International Academy of Medical Science & Aesthetics (TIAMA) offers a private and voluntary accreditation system designed for institutions, academies, and clinics dedicated to excellence in medical science and aesthetic education. TIAMA accreditation reflects adherence to international benchmarks of curriculum quality, safety compliance, professional ethics, and training excellence."
          />
        </Reveal>
      </Container>
    </section>
  );
}
