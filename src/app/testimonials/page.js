import DetailedTestimonials from "../components/testimonials/DetailedTestimonials";
import ReviewsGrid from "../components/testimonials/ReviewsGrid";
import TestimonialsCTA from "../components/testimonials/TestimonialsCTA";
import TestimonialsHero from "../components/testimonials/TestimonialsHero";

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      <TestimonialsHero />
      <ReviewsGrid />
      <DetailedTestimonials />
      <TestimonialsCTA />
    </div>
  )
}