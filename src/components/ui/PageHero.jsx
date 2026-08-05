import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-36 sm:pb-24 sm:pt-40">
      <div className="absolute inset-0 bg-mesh-hero opacity-20 mix-blend-soft-light" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-royal-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl" />

      <Container className="relative z-10">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          {eyebrow ? (
            <span className="glass-panel-dark inline-flex w-fit items-center gap-2 rounded-(--radius-full) px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="max-w-xl text-base leading-relaxed text-mist-100/75 sm:text-lg">
              {description}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
