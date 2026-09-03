import { GlassCard } from "@/components/ui/GlassCard";

export function Stepper({ steps, className }) {
  return (
    <div className={className}>
      <ol className="relative flex flex-col gap-6">
        <div className="absolute left-6 top-6 bottom-6 hidden w-px bg-border sm:block" />
        {steps.map((step, i) => (
          <li key={step} className="relative flex items-start gap-5">
            <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold font-display text-base font-bold text-navy-deep">
              {i + 1}
            </span>
            <GlassCard variant="strong" className="flex-1 rounded-(--radius-md) px-5 py-4">
              <p className="text-sm font-medium leading-relaxed text-text sm:text-base">
                {step}
              </p>
            </GlassCard>
          </li>
        ))}
      </ol>
    </div>
  );
}
