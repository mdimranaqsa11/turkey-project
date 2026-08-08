import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckList } from "@/components/ui/CheckList";

const benefits = [
  "Recognition for maintaining high standards in medical and aesthetic education",
  "Access to standardized training guidelines and updated curriculum recommendations",
  'Use of "Accredited by TIAMA" logo for brand credibility',
  "Eligibility to issue TIAMA-verified certificates with QR/Accreditation ID authentication",
  "Networking opportunities within TIAMA's international education community",
];

export function AccreditationBenefits() {
  return (
    <section className="py-24 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          align="left"
          eyebrow="Why accredit with TIAMA"
          title="Benefits of TIAMA Accreditation"
        />
        <CheckList items={benefits} columns={2} className="max-w-4xl" />
      </Container>
    </section>
  );
}
