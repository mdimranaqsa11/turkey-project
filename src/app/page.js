import { Hero } from "@/components/home/Hero";
import { AISearch } from "@/components/home/AISearch";
import { AboutIntro } from "@/components/home/AboutIntro";
import { AccreditationStrip } from "@/components/home/AccreditationStrip";
import { PricingSection } from "@/components/home/PricingSection";
import { FutureSection } from "@/components/home/FutureSection";
import { LegacyBanner } from "@/components/home/LegacyBanner";
import { FeatureStrip } from "@/components/home/FeatureStrip";
import { Testimonials } from "@/components/home/Testimonials";

export const metadata = {
  title: { absolute: "Turkey International Academy | TIAMA Certification" },
  description:
    "The Turkey International Academy of The Medical Science & Aesthetics (TIAMA) — globally recognized certification, accreditation, and training for medical and aesthetic professionals.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AISearch />
      <AboutIntro />
      <AccreditationStrip />
      <PricingSection />
      <FutureSection />
      <LegacyBanner />
      <FeatureStrip />
      <Testimonials />
    </>
  );
}
