import { PageHero } from "@/components/ui/PageHero";
import { CourseCategories } from "@/components/courses/CourseCategories";
import { CoursesFAQ } from "@/components/courses/CoursesFAQ";

export const metadata = {
  title: "Courses | Turkey International Academy",
  description:
    "Discover TIAMA's comprehensive educational courses — certification, fellowship, postgraduate diploma, and cosmetology & aesthetic training programs.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Discover our comprehensive educational courses"
        description="Transform your medical career with our specialized training programs"
      />
      <CourseCategories />
      <CoursesFAQ />
    </>
  );
}
