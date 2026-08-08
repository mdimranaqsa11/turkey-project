import { PageHero } from "@/components/ui/PageHero";
import { BlogGrid } from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Blog",
  description:
    "Discover the latest news and articles from TIAMA — trends, insights, and innovations in medical aesthetics and cosmetology education.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Discover the Latest{" "}
            <span className="text-gradient-gold">News &amp; Articles</span>
          </>
        }
        description="Stay updated with the latest trends, insights, and innovations in medical aesthetics and cosmetology education."
      />
      <BlogGrid />
    </>
  );
}
