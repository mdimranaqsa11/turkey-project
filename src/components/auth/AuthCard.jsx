import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/motion/Reveal";

export function AuthCard({ icon, title, subtitle, children }) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-ivory px-6 py-28 sm:py-32">
      <Container className="flex justify-center">
        <Reveal className="w-full max-w-md">
          <GlassCard
            variant="strong"
            className="flex flex-col gap-8 rounded-(--radius-lg) p-6 sm:p-10"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy-deep">
                {icon}
              </span>
              <div>
                <h1 className="font-display text-2xl font-bold text-navy">
                  {title}
                </h1>
                <p className="mt-1 text-sm text-muted">{subtitle}</p>
              </div>
            </div>
            {children}
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
