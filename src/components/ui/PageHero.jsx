import { Container } from "@/components/ui/Container";

export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="bg-navy pb-20 pt-36 sm:pb-24 sm:pt-40">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          {eyebrow ? (
            <span className="inline-flex w-fit items-center gap-2 rounded-(--radius-full) border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-light">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
