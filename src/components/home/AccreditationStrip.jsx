import Image from "next/image";
import { Container } from "@/components/ui/Container";

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

export function AccreditationStrip() {
  return (
    <section className="border-y border-border bg-ivory py-10 sm:py-12">
      <Container className="flex flex-col items-center gap-6">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-muted sm:text-base">
          Association &amp; Accreditation
        </p>

        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-28 items-center justify-center rounded-(--radius-md) border border-border bg-white p-4 sm:h-32"
            >
              <div className="relative h-full w-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
