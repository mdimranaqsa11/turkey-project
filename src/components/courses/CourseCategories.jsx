import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const categories = [
  {
    badge: "Save 50%",
    count: "12 Programs",
    title: "Certification Courses",
    description:
      "Professional certification programs designed to enhance your medical credentials and expertise",
    duration: "3-6 Months Online",
    regular: "$600",
    special: "$300",
    image: "/images/courses/certification.jpeg",
  },
  {
    badge: "Save 44%",
    count: "21 Programs",
    title: "Advanced Fellowship Courses",
    description:
      "Specialized fellowship programs for advanced medical training and subspecialty expertise",
    duration: "6-12 Months Online",
    regular: "$4500",
    special: "$2500",
    image: "/images/courses/fellowship.jpeg",
  },
  {
    badge: "Save 44%",
    count: "22 Programs",
    title: "Postgraduate Courses (P.G. Diploma)",
    description:
      "Holistic PG Diploma training reinforced by structured, high-quality online education",
    duration: "12-18 Months Online",
    regular: "$4500",
    special: "$2500",
    image: "/images/courses/pg-diploma.jpeg",
  },
  {
    badge: "Save 44%",
    count: "5 Programs",
    title: "Cosmetology & Aesthetic Courses",
    description:
      "Comprehensive training in cosmetic procedures and aesthetic medicine techniques",
    duration: "3-6 Months Online",
    regular: "$4500",
    special: "$2500",
    image: "/images/courses/cosmetology.jpeg",
  },
  {
    badge: null,
    count: "6 Programs",
    title: "Other Specialised Courses",
    description:
      "Diverse specialized courses covering emerging medical fields and niche specialties",
    duration: "6 - 12 Months Online",
    contactOnly: true,
    image: "/images/courses/other-specialised.jpeg",
    span: true,
  },
];

export function CourseCategories() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((cat) => (
            <StaggerItem key={cat.title} className={cn(cat.span && "sm:col-span-2")}>
              <GlassCard
                variant="strong"
                className={cn(
                  "group flex h-full flex-col overflow-hidden transition-transform duration-500 ease-(--ease-premium) hover:-translate-y-1.5",
                  cat.span && "sm:flex-row"
                )}
              >
                <div
                  className={cn(
                    "relative h-48 w-full overflow-hidden",
                    cat.span && "sm:h-auto sm:w-2/5"
                  )}
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-(--ease-premium) group-hover:scale-105"
                    sizes="(min-width: 640px) 45vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
                  {cat.badge ? (
                    <span className="absolute left-4 top-4 rounded-(--radius-full) bg-gradient-to-r from-gold-500 to-gold-400 px-3 py-1 text-xs font-bold text-ink-950">
                      {cat.badge}
                    </span>
                  ) : null}
                  <span className="absolute bottom-4 left-4 rounded-(--radius-full) glass-panel-dark px-3 py-1 text-xs font-semibold text-white">
                    {cat.count}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-mist-50">
                    {cat.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-mist-200/80">
                    {cat.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-medium text-royal-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {cat.duration}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                    {cat.contactOnly ? (
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-mist-200/50">
                          Course Fee
                        </p>
                        <p className="font-display text-lg font-bold text-mist-50">
                          Contact for details
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-mist-200/50">
                          Regular Price{" "}
                          <span className="ml-1 text-mist-200/40 line-through">{cat.regular}</span>
                        </p>
                        <p className="font-display text-2xl font-bold text-mist-50">
                          {cat.special}
                        </p>
                      </div>
                    )}
                    <Button href="/courses" variant="primary" size="sm">
                      Explore Programs
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
