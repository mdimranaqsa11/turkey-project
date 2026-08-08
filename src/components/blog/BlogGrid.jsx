import { Container } from "@/components/ui/Container";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { BlogCard } from "@/components/blog/BlogCard";

const posts = [
  {
    category: "Aesthetic Medicine",
    title: "Latest Advances in Aesthetic Medicine for 2022",
    excerpt:
      "Explore the cutting-edge techniques and technologies transforming the aesthetic medicine landscape this year.",
    date: "December 5, 2022",
    readTime: "8 min read",
    author: "Dr. Sarah Mitchell",
    image: "/images/blog/aesthetic-advances.jpg",
  },
  {
    category: "Education",
    title: "Understanding Medical Aesthetics Certifications",
    excerpt:
      "A comprehensive guide to choosing the right certification path for your aesthetic medicine career.",
    date: "December 3, 2022",
    readTime: "6 min read",
    author: "Prof. James Chen",
    image: "/images/blog/certifications.jpg",
  },
  {
    category: "Cosmetology",
    title: "The Future of Cosmetology Training",
    excerpt:
      "How digital learning and hands-on experience are reshaping professional cosmetology education worldwide.",
    date: "November 9, 2023",
    readTime: "7 min read",
    author: "Dr. Emily Rodriguez",
    image: "/images/blog/cosmetology.jpg",
  },
  {
    category: "Safety",
    title: "Patient Safety in Aesthetic Procedures",
    excerpt:
      "Essential protocols and best practices every aesthetic practitioner must know to ensure patient wellbeing.",
    date: "November 28, 2023",
    readTime: "10 min read",
    author: "Dr. Michael Lee",
    image: "/images/blog/patient-safety.jpg",
  },
  {
    category: "Business",
    title: "Building Your Aesthetic Practice: A Guide",
    excerpt:
      "From certification to clinic setup, learn the essential steps to launch a successful aesthetic medicine practice.",
    date: "November 25, 2024",
    readTime: "12 min read",
    author: "Dr. Anna Petrova",
    image: "/images/blog/building-practice.jpg",
  },
  {
    category: "Aesthetic Medicine",
    title: "Innovations in Non-Surgical Treatments",
    excerpt:
      "Discover the latest non-invasive aesthetic treatments gaining popularity in clinics around the world.",
    date: "November 21, 2024",
    readTime: "9 min read",
    author: "Dr. Robert Kim",
    image: "/images/blog/non-surgical.jpg",
  },
  {
    category: "Aesthetic Medicine",
    title: "Advanced Dermal Filler Techniques",
    excerpt:
      "Master the latest injection techniques and protocols for achieving natural-looking results with dermal fillers.",
    date: "November 20, 2025",
    readTime: "11 min read",
    author: "Dr. Sofia Martinez",
    image: "/images/blog/dermal-filler.jpg",
  },
  {
    category: "Business",
    title: "Marketing Your Medical Aesthetic Practice",
    excerpt:
      "Effective strategies for promoting your practice and building a loyal client base in the competitive aesthetic market.",
    date: "November 18, 2025",
    readTime: "9 min read",
    author: "Dr. David Park",
    image: "/images/blog/marketing.jpg",
  },
  {
    category: "Technology",
    title: "Laser Therapy: What's New in 2025",
    excerpt:
      "An overview of the newest laser technologies and their applications in modern aesthetic treatments.",
    date: "November 15, 2025",
    readTime: "8 min read",
    author: "Dr. Lisa Wong",
    image: "/images/blog/laser-therapy.jpg",
  },
];

export function BlogGrid() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.title}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
