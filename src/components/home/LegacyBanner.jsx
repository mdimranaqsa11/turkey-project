import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";

const stats = [
  { value: 12, suffix: "+", label: "Years of Excellence in Aesthetic Science" },
  { value: 31, suffix: "+", label: "Accredited Centers Worldwide" },
  { value: 12, suffix: "K+", label: "Professionals Certified Globally" },
  { value: 129, suffix: "+", label: "Expert Trainers & Industry Leaders" },
];

export function LegacyBanner() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-800 to-royal-700" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-royal-400/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 translate-y-1/2 rounded-full bg-gold-400/20 blur-3xl" />

      <Container className="relative z-10 flex flex-col items-center gap-14 text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-(--radius-full) glass-panel-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">
            TIAMA&apos;s Legacy
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            TIAMA&apos;s Legacy of <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-mist-100/75 sm:text-base">
            Explore our legacy of global recognition, dedication, and
            innovation in medical science, aesthetic procedure and
            education. TIAMA continues to set the benchmark for integrity,
            quality, and excellence empowering medical professionals and
            institutions around the world to achieve international
            standards of practice and goal.
          </p>
        </Reveal>

        <StaggerGroup className="grid w-full grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass-panel-dark flex h-full flex-col items-center gap-2 rounded-(--radius-lg) px-4 py-8">
                <span className="font-display text-4xl font-bold text-gold-300 sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs font-medium leading-snug text-mist-100/75 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
