import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stepper } from "@/components/ui/Stepper";

const steps = [
  "Application submission by institute/clinic",
  "Review of infrastructure, curriculum and course policies",
  "Qualification verification of trainers and educators",
  "Audit / online or onsite quality assessment",
  "Accreditation approval with validity for 1–2 years",
  "Annual compliance and progress review",
];

export function AccreditationProcess() {
  return (
    <section className="py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="How it works"
          title="Accreditation Process"
          description="TIAMA follows a structured evaluation to maintain transparency, integrity and global standards in medical education."
        />
        <Stepper steps={steps} className="w-full max-w-2xl" />
      </Container>
    </section>
  );
}
