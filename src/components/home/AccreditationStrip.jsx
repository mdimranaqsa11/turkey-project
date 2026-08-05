import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const logos = [
  { src: "/images/home/accred-queen-victoria.jpeg", alt: "Queen Victoria Medical Institute & Research" },
  { src: "/images/home/accred-royal-physician.jpeg", alt: "The Royal Physician College" },
  { src: "/images/home/accred-pzaporithzha.png", alt: "Pzaporithzha State Medical University" },
  { src: "/images/home/accred-bacme.jpeg", alt: "British Association of Continuing Medical Education" },
];

export function AccreditationStrip() {
  return (
    <section className="border-y border-white/40 bg-mist-50/60 py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-10">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
            Association and{" "}
            <span className="relative inline-block text-gradient-royal">
              Accreditation
              <svg
                className="absolute -bottom-1.5 left-0 w-full text-gold-500"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M5 7 Q 150 2, 295 7"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </Reveal>

        <StaggerGroup className="grid w-full grid-cols-2 items-center gap-6 sm:grid-cols-4 sm:gap-10">
          {logos.map((logo) => (
            <StaggerItem key={logo.alt}>
              <div className="glass-panel flex h-28 items-center justify-center rounded-(--radius-md) p-4 transition-transform duration-400 ease-(--ease-premium) hover:-translate-y-1 hover:shadow-(--shadow-glass-lg)">
                <div className="relative h-full w-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="180px"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
