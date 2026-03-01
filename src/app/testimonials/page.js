import DetailedTestimonials from "../components/testimonials/DetailedTestimonials";
import ReviewsGrid from "../components/testimonials/ReviewsGrid";
import TestimonialsCTA from "../components/testimonials/TestimonialsCTA";
import TestimonialsHero from "../components/testimonials/TestimonialsHero";

export const metadata = {
  title: "Patient Testimonials | Dental Clinics of Texas",
  description: "Get to know our experienced pediatric dentists and staff in West Houston, Cypress, and Katy.",
};

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