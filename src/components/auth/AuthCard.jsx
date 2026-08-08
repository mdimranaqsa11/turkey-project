import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/motion/Reveal";

export function AuthCard({ icon, title, subtitle, children }) {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-mesh-hero px-6 py-28 sm:py-32">
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-600/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[420px] w-[420px] translate-x-1/2 translate-y-1/2 rounded-full bg-gold-500/15 blur-[100px]" />

      <Container className="relative z-10 flex justify-center">
        <Reveal className="w-full max-w-md">
          <GlassCard
            variant="strong"
            className="flex flex-col gap-8 rounded-(--radius-lg) p-6 sm:p-10"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-ink-950">
                {icon}
              </span>
              <div>
                <h1 className="font-display text-2xl font-bold text-mist-50">
                  {title}
                </h1>
                <p className="mt-1 text-sm text-mist-200/70">{subtitle}</p>
              </div>
            </div>
            {children}
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
