import { PageHero } from "@/components/ui/PageHero";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutAdvantages } from "@/components/about/AboutAdvantages";
import { AboutCommitment } from "@/components/about/AboutCommitment";
import { TeamSection } from "@/components/about/TeamSection";

export const metadata = {
  title: "About",
  description:
    "Türkiye Uluslararası Akademi Hakkında — TIAMA's board certification in medical science, aesthetics, and cosmetology, its faculty, and its leadership.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TIAMA"
        title="Türkiye Uluslararası Akademi Hakkında"
        description="Tıp Bilimleri, Estetik ve Kozmetoloji Alanında Kurul Sertifikasyonu."
      />
      <AboutStats />
      <AboutAdvantages />
      <AboutCommitment />
      <TeamSection />
    </>
  );
}
