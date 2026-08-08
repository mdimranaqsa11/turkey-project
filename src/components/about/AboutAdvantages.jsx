import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const advantages = [
  {
    title: "Uzman Kadro",
    description:
      "Tıp bilimleri ve kozmetoloji eğitiminde onlarca yıllık deneyime sahip sektör lideri profesyoneller.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Küresel Platform",
    description:
      "Uluslararası standartlara, kaynaklara ve sertifikalı profesyonellerden oluşan dünya çapında bir ağa erişim.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
      </svg>
    ),
  },
  {
    title: "50+ Uzmanlık Alanı",
    description:
      "Tıp bilimleri, estetik ve kozmetoloji mükemmeliyetinin tüm yönlerini kapsayan kapsamlı sertifika programları.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "100+ Program",
    description:
      "Çeşitli profesyonel gelişim ihtiyaçlarını ve kariyer hedeflerini karşılamak üzere tasarlanmış kapsamlı müfredat.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
      </svg>
    ),
  },
];

function AdvantageCard({ item }) {
  return (
    <GlassCard variant="strong" className="flex items-start gap-4 rounded-(--radius-md) p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-(--radius-sm) bg-gradient-to-br from-gold-300 to-gold-500 text-ink-950">
        {item.icon}
      </span>
      <div>
        <h3 className="font-display text-base font-bold text-mist-50">{item.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-mist-200/75">{item.description}</p>
      </div>
    </GlassCard>
  );
}

export function AboutAdvantages() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-royal-500/20 blur-3xl" />

      <Container className="flex flex-col items-center gap-16">
        <Reveal className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-mist-50 sm:text-4xl">
            Akademimizi seçmenin{" "}
            <span className="relative inline-block text-gradient-gold">
              avantajları
              <svg className="absolute -bottom-1.5 left-0 w-full text-gold-400" viewBox="0 0 300 12" fill="none">
                <path d="M5 7 Q 150 2, 295 7" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-base leading-relaxed text-mist-200/75 sm:text-lg">
            Uluslararası tanınırlık, uzman rehberliği ve estetik eğitimde
            mükemmellik taahhüdü ile desteklenen dünya standartlarında
            sertifika programlarını deneyimleyin.
          </p>
        </Reveal>

        {/* Desktop: circular image with floating cards */}
        <div className="relative hidden w-full max-w-4xl items-center justify-center lg:flex">
          <Reveal className="relative z-10 h-72 w-72 shrink-0 overflow-hidden rounded-full border border-white/15 shadow-(--shadow-glass-lg)">
            <Image
              src="/images/about/team-circle.jpeg"
              alt="TIAMA expert faculty"
              fill
              className="object-cover"
              sizes="288px"
            />
          </Reveal>

          <StaggerGroup className="absolute left-0 top-0 flex h-full w-full items-center justify-between">
            <div className="flex w-72 flex-col gap-6">
              <StaggerItem direction="right">
                <AdvantageCard item={advantages[0]} />
              </StaggerItem>
              <StaggerItem direction="right">
                <AdvantageCard item={advantages[1]} />
              </StaggerItem>
            </div>
            <div className="flex w-72 flex-col gap-6">
              <StaggerItem direction="left">
                <AdvantageCard item={advantages[2]} />
              </StaggerItem>
              <StaggerItem direction="left">
                <AdvantageCard item={advantages[3]} />
              </StaggerItem>
            </div>
          </StaggerGroup>
        </div>

        {/* Mobile / tablet: circular image + stacked cards */}
        <div className="flex w-full flex-col items-center gap-8 lg:hidden">
          <Reveal className="relative h-56 w-56 shrink-0 overflow-hidden rounded-full border border-white/15 shadow-(--shadow-glass-lg) sm:h-64 sm:w-64">
            <Image
              src="/images/about/team-circle.jpeg"
              alt="TIAMA expert faculty"
              fill
              className="object-cover"
              sizes="256px"
            />
          </Reveal>
          <StaggerGroup className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <StaggerItem key={item.title}>
                <AdvantageCard item={item} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
