import SedationFAQs from "@/app/components/sedation-faqs/SedationFAQs";
import Link from "next/link";

export const metadata = {
  title: "Sedation Dentistry FAQ | Dental Clinics of Texas",
  description: "Get to know our experienced pediatric dentists and staff in West Houston, Cypress, and Katy.",
};

export default function SedationFAQPage () {
  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-900 mb-12 text-center">Sedation FAQ</h1>
        <SedationFAQs/>
        <div className="mt-16 p-12 bg-brand-primary/5 rounded-[3rem] text-center border border-brand-primary/10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h3>
          <p className="text-slate-600 mb-8">Our team is happy to discuss our sedation options with you in detail.</p>
          <Link href="/contact-us" className="btn-primary">Contact Us Today</Link>
        </div>
      </div>
    </div>
  );
};