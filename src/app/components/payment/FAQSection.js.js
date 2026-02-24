"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { paymentOptionsFaqs } from "@/app/data/mockData";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 italic">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {paymentOptionsFaqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openFaq === i}
              onClick={() =>
                setOpenFaq(openFaq === i ? null : i)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm">
      <button
        onClick={onClick}
        className="w-full p-6 text-left flex justify-between items-center"
      >
        <span className="font-bold">{faq.q}</span>
        <ChevronDown
          className={`transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-slate-600">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}