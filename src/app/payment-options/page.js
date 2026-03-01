import HeroSection from "../components/payment/HeroSection";
import AccessibilitySection from "../components/payment/AccessibilitySection";
import WhatWeOffer from "../components/payment/WhatWeOffer";
import FAQSection from "../components/payment/FAQSection.js";
import ContactSection from "../components/payment/ContactSection";
import WhyChooseUs from "../components/payment/WhyChooseUs";
import MembershipPlans from "../components/payment/MembershipPlans";

export const metadata = {
  title: "Payment & Insurance Options | Dental Clinics of Texas",
  description: "Get to know our experienced pediatric dentists and staff in West Houston, Cypress, and Katy.",
};

export default function PaymentOptionsPage() {
  return (
    <div className="bg-white">
      <HeroSection/>
      <AccessibilitySection/>
      <WhatWeOffer/>
      <MembershipPlans/>
      <WhyChooseUs/>
      <FAQSection/>
      <ContactSection/>
    </div>
  );
};