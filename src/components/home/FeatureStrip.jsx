import { Container } from "@/components/ui/Container";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const features = [
  "Experienced Dermatologist",
  "Advanced Technology",
  "Personalized Courses",
  "12+ Years Experience",
];

export function FeatureStrip() {
  return (
    <section className="py-14">
      <Container>
        <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {features.map((feature) => (
            <StaggerItem key={feature}>
              <div className="flex items-center gap-3 rounded-(--radius-md) border border-border bg-white px-5 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-text">{feature}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
