import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

const testimonials = [
  {
    quote:
      "TIAMA accreditation elevated our clinic's credibility globally. The rigorous evaluation process ensured we met international standards in aesthetic practice. Our patient trust has increased significantly, and we've attracted clients from across borders seeking certified excellence.",
    name: "Dr. Sarah Ahmed",
    initial: "S",
  },
  {
    quote:
      "As an aesthetic practitioner, earning TIAMA certification was transformative. It validated my expertise on a global platform and opened doors to international collaborations. The certification process was thorough, ensuring I truly mastered the highest standards in cosmetology.",
    name: "Maria Gonzalez",
    initial: "M",
  },
  {
    quote:
      "Our academy's TIAMA accreditation became our strongest competitive advantage. It signals to students worldwide that they're receiving training that meets rigorous international benchmarks. Enrollment from international students has doubled since our certification.",
    name: "Dr. James Wilson",
    initial: "J",
  },
  {
    quote:
      "TIAMA certification gave my aesthetic practice the global recognition it deserved. Clients now choose us specifically because of this accreditation, knowing we uphold the highest safety and quality standards. It's more than a certificate—it's a reputation builder.",
    name: "Priya Kapoor",
    initial: "P",
  },
  {
    quote:
      "The Board's evaluation process was comprehensive and professional. Achieving TIAMA accreditation positioned our clinic among the elite in aesthetic medicine. Our team now operates with enhanced confidence, backed by internationally recognized excellence.",
    name: "Dr. Alessandro Rossi",
    initial: "A",
  },
  {
    quote:
      "TIAMA certification transformed how the industry views our academy. We're no longer just another training center—we're a globally recognized institution of excellence. The certification process refined our curriculum and elevated our teaching standards exponentially.",
    name: "Fatima Al-Mansouri",
    initial: "F",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8l-6.1 3.3 1.4-6.8-5.1-4.7 6.9-.8L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Professionals Worldwide"
          description="Discover how TIAMA certification, accreditation and training has transformed practices, elevated institutions, and established global recognition for medical & aesthetic professionals also academies across continents."
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <GlassCard
              key={t.name}
              variant="strong"
              className="flex flex-col gap-5 p-6 sm:p-8"
            >
              <Stars />
              <p className="text-sm leading-relaxed text-text sm:text-base">
                {t.quote}
              </p>
              <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-display text-lg font-bold text-white">
                  {t.initial}
                </span>
                <div className="text-left">
                  <p className="text-sm font-bold uppercase tracking-wide text-navy">
                    {t.name}
                  </p>
                  <p className="text-xs font-medium text-gold-dark">TIAMA Certified</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <Button href="/testimonials" variant="glass">
          View All Testimonials
        </Button>
      </Container>
    </section>
  );
}
