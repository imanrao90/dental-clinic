"use client";

import { sedationFaqs } from "@/app/data/mockData";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const metadata = {
  title: "Sedation Dentistry FAQ | Dental Clinics of Texas",
  description: "Get to know our experienced pediatric dentists and staff in West Houston, Cypress, and Katy.",
};

export default function SedationFAQPage () {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-900 mb-12 text-center">Sedation FAQ</h1>
        <div className="space-y-4">
          {sedationFaqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="mt-16 p-12 bg-brand-primary/5 rounded-[3rem] text-center border border-brand-primary/10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h3>
          <p className="text-slate-600 mb-8">Our team is happy to discuss our sedation options with you in detail.</p>
          <Link href="/contact-us" className="btn-primary">Contact Us Today</Link>
        </div>
      </div>
    </div>
  );
};