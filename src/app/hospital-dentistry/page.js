import CTASection from "../components/hospital-dentistry/CTASection";
import FAQSection from "../components/hospital-dentistry/FAQSection";
import HeroSection from "../components/hospital-dentistry/HeroSection";
import IntroSection from "../components/hospital-dentistry/IntroSection";
import ServicesSection from "../components/hospital-dentistry/ServicesSection";
import WhyChooseUs from "../components/hospital-dentistry/WhyChooseUs";
import WhySection from "../components/hospital-dentistry/WhySection";

export const metadata = {
  title: "Hospital Dentistry for Children | Dental Clinics of Texas",
  description: "Get to know our experienced pediatric dentists and staff in West Houston, Cypress, and Katy.",
};

export default function HospitalDentistryPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <IntroSection />
      <WhySection />
      <ServicesSection />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </div>
  )
}