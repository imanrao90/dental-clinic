"use client";

import { useState } from "react";
import HeroSection from "../components/payment/HeroSection";
import AccessibilitySection from "../components/payment/AccessibilitySection";
import WhatWeOffer from "../components/payment/WhatWeOffer";
import FAQSection from "../components/payment/FAQSection.js";
import ContactSection from "../components/payment/ContactSection";
import WhyChooseUs from "../components/payment/WhyChooseUs";
import MembershipPlans from "../components/payment/MemberShipPlans";

export default function PaymentOptionsPage() {
  const [openFaq, setOpenFaq] = useState(null);

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