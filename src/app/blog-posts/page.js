import BlogHero from "@/app/components/blog/BlogHero";
import BlogGrid from "@/app/components/blog/BlogGrid";
import BlogPagination from "@/app/components/blog/BlogPagination";

export const metadata = {
  title: "Pediatric Dental Blog | Dental Clinics of Texas",
  description: "Get to know our experienced pediatric dentists and staff in West Houston, Cypress, and Katy.",
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      <BlogHero />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <BlogGrid />
          <BlogPagination/>
        </div>
      </section>
    </div>
  );
}