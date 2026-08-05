import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";

const plans = [
  {
    badge: "LIMITED OFFER",
    tag: "Global",
    title: "TIAMA Institutional Accreditation",
    features: [
      "Comprehensive Institution Evaluation",
      "International Standards Compliance Review",
      "Quality Assurance & Safety Protocols",
    ],
    original: "USD$15,000",
    price: "USD$6,000",
    note: "Application Fee: $2,500 | Full Global Recognition",
  },
  {
    badge: "30% OFF",
    tag: "Worldwide",
    title: "TIAMA Professional Practitioner Certification",
    features: [
      "Expert Competency Assessment",
      "Clinical Practice Standards Verification",
      "Continuing Education Credits",
    ],
    original: "USD$12,000",
    price: "USD$5,500",
    note: "Assessment Fee: $500 | International Credentialing",
  },
  {
    badge: "25% OFF",
    tag: "International",
    title: "TIAMA Academy Certification Program",
    features: [
      "Curriculum Standards Evaluation",
      "Faculty Qualification Assessment",
      "Student Outcome Excellence Review",
    ],
    original: "USD$15,000",
    price: "USD$5,000",
    note: "Evaluation Fee: $2,000 | Multi-Year Accreditation",
  },
  {
    badge: "25% OFF",
    tag: "Global",
    title: "TIAMA Clinic Excellence Certification",
    features: [
      "Patient Safety & Ethics Audit",
      "Facility Standards Compliance",
      "Clinical Excellence Benchmarking",
    ],
    original: "USD$12,000",
    price: "USD$3,000",
    note: "Audit Fee: $1,500 | Recognized in 50+ Countries",
  },
];

const stats = [
  { value: 127, suffix: "+", label: "Certified Institutions" },
  { value: 31, suffix: "+", label: "Countries" },
  { value: 12, suffix: "+", label: "Years of Excellence" },
  { value: 100, suffix: "%", label: "International Recognition" },
];

export function PricingSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Certification Programs"
          title="Elevate Your Global Standing"
          description="TIAMA certification programs designed to establish international credibility, enhance professional reputation, and ensure compliance with the highest standards in all medical professions."
        />

        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <StaggerItem key={plan.title}>
              <GlassCard
                variant="strong"
                className="flex h-full flex-col gap-5 p-6 transition-transform duration-400 ease-(--ease-premium) hover:-translate-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-(--radius-full) bg-royal-100 px-3 py-1 text-xs font-semibold text-royal-600">
                    {plan.tag}
                  </span>
                  <span className="rounded-(--radius-full) bg-gradient-to-r from-gold-500 to-gold-400 px-3 py-1 text-xs font-bold text-ink-950">
                    {plan.badge}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold leading-snug text-ink-950">
                  {plan.title}
                </h3>

                <ul className="flex flex-1 flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-700/80">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0 text-royal-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-1 border-t border-ink-900/10 pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-ink-700/50 line-through">
                      {plan.original}
                    </span>
                    <span className="font-display text-2xl font-bold text-ink-950">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-ink-700/60">{plan.note}</p>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal>
          <GlassCard
            variant="dark"
            className="flex flex-col items-center gap-8 overflow-hidden px-6 py-12 text-center sm:px-12"
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Ready to Achieve Global Recognition?
              </h3>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-mist-100/75 sm:text-base">
                Join over 200 certified institutions across 50+ countries.
                Elevate your practice with TIAMA&apos;s internationally
                recognized standards of excellence.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/apply" variant="gold" size="lg">
                Apply for Certification
              </Button>
              <Button href="/contact" variant="glass" size="lg" className="text-white">
                Schedule Consultation
              </Button>
            </div>

            <div className="grid w-full grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1">
                  <span className="font-display text-3xl font-bold text-gold-300 sm:text-4xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs text-mist-100/70 sm:text-sm">{stat.label}</span>
                </div>
              ))}
            </div>

            <p className="text-xs font-medium tracking-wide text-mist-100/50">
              Global Internal Qualification Registration ID ·{" "}
              <span className="text-gold-300">TIA-TR-YKSB-2020-1042</span>
            </p>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
