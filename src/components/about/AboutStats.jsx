import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";

const stats = [
  { value: 31, suffix: "+", label: "Ulaşılan Ülke" },
  { value: 127, suffix: "+", label: "Sertifikalı Kurum" },
  { value: 12, suffix: "+", label: "Yıllık Mükemmellik" },
  { value: 12, suffix: "K+", label: "Sertifikalı Profesyonel" },
];

export function AboutStats() {
  return (
    <section className="relative -mt-16 pb-16 sm:-mt-20 sm:pb-20">
      <Container>
        <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <GlassCard variant="strong" className="flex flex-col items-center gap-1 rounded-(--radius-lg) px-4 py-8 text-center">
                <span className="font-display text-3xl font-bold text-gold-dark sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs font-medium text-muted sm:text-sm">
                  {stat.label}
                </span>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
