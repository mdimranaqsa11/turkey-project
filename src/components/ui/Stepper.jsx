import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

export function Stepper({ steps, className }) {
  return (
    <StaggerGroup className={className}>
      <ol className="relative flex flex-col gap-6">
        <div className="absolute left-6 top-6 bottom-6 hidden w-px bg-gradient-to-b from-gold-400/50 via-white/15 to-transparent sm:block" />
        {steps.map((step, i) => (
          <StaggerItem key={step}>
            <li className="relative flex items-start gap-5">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 font-display text-base font-bold text-ink-950 shadow-(--shadow-gold-glow)">
                {i + 1}
              </span>
              <GlassCard variant="strong" className="flex-1 rounded-(--radius-md) px-5 py-4">
                <p className="text-sm font-medium leading-relaxed text-mist-100 sm:text-base">
                  {step}
                </p>
              </GlassCard>
            </li>
          </StaggerItem>
        ))}
      </ol>
    </StaggerGroup>
  );
}
