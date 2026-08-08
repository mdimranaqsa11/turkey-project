import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const logos = [
  {
    src: "/images/home/accred-queen-victoria.jpeg",
    alt: "Queen Victoria Medical Institute & Research",
  },
  {
    src: "/images/home/accred-royal-physician.jpeg",
    alt: "The Royal Physician College",
  },
  {
    src: "/images/home/accred-pzaporithzha.png",
    alt: "Pzaporithzha State Medical University",
  },
  {
    src: "/images/home/accred-bacme.jpeg",
    alt: "British Association of Continuing Medical Education",
  },
];

const track = [...logos, ...logos];

export function AccreditationStrip() {
  return (
    <section className="border-y border-white/10 bg-ink-900 py-10 sm:py-12">
      <Reveal className="flex flex-col items-center gap-6">
        <Container>
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-mist-200/60">
            Association &amp; Accreditation
          </p>
        </Container>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent" />

          <div className="flex w-max animate-marquee items-center gap-16">
            {track.map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex h-24 w-52 shrink-0 items-center justify-center rounded-(--radius-sm) bg-mist-50 p-2 opacity-80 shadow-(--shadow-glass) transition-opacity duration-300 hover:opacity-100"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="208px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
