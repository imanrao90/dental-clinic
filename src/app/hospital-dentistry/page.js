import CTASection from "../components/hospital-dentistry/CTASection";
import FAQSection from "../components/hospital-dentistry/FAQSection";
import HeroSection from "../components/hospital-dentistry/HeroSection";
import IntroSection from "../components/hospital-dentistry/IntroSection";
import ServicesSection from "../components/hospital-dentistry/ServicesSection";
import WhyChooseUs from "../components/hospital-dentistry/WhyChooseUs";
import WhySection from "../components/hospital-dentistry/WhySection";

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