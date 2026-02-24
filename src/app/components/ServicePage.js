"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";

// Hero Section
const HeroSection = ({ title, subtitle, intro, imageSeed }) => (
  <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <img
        src={`https://picsum.photos/seed/${imageSeed}/1920/1080`}
        alt={title}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-brand-primary font-semibold mb-4">{subtitle}</p>}
        <p className="text-lg text-slate-300 leading-relaxed">{intro}</p>
      </motion.div>
    </div>
  </section>
);

// Section Component
const ContentSection = ({ title, content, list }) => (
  <div>
    <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>
    <div className="prose prose-lg text-slate-600 max-w-none">
      {Array.isArray(content)
        ? content.map((p, i) => <p key={i} className="mb-4">{p}</p>)
        : <p className="mb-4">{content}</p>}
      {list && (
        <ul className="space-y-3 mt-6">
          {list.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1.5 w-2 h-2 bg-brand-primary rounded-full shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

// Sidebar Component
const Sidebar = () => (
  <div className="sticky top-32 space-y-8">
    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Book Appointment</h3>
      <p className="text-slate-600 mb-6 text-sm">Ready to give your child a healthy smile? Schedule a consultation today.</p>
      <Link href="/appointment-request" className="btn-primary w-full text-center block">Request Visit</Link>
    </div>
    <div className="bg-brand-primary p-8 rounded-3xl text-white">
      <Phone className="mb-4" />
      <h3 className="text-xl font-bold mb-2">Emergency?</h3>
      <p className="text-white/80 mb-6 text-sm">Call us immediately for urgent dental care.</p>
      <a href="tel:8324271901" className="text-2xl font-bold hover:underline">(832) 427-1901</a>
    </div>
  </div>
);

// FAQ Item
const FAQItem = ({ faq, isOpen, toggle }) => (
  <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
    <button 
      onClick={toggle} 
      className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
    >
      <span className="font-bold text-slate-900">{faq.q}</span>
      <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }} 
          animate={{ height: 'auto', opacity: 1 }} 
          exit={{ height: 0, opacity: 0 }} 
          className="overflow-hidden"
        >
          <div className="p-6 pt-0 text-slate-600 leading-relaxed">{faq.a}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// Main ServicePage Component
export default function ServicePage({ title, subtitle, intro, sections, faqs, imageSeed }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-white">
      <HeroSection title={title} subtitle={subtitle} intro={intro} imageSeed={imageSeed} />

      {/* Content Sections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-16">
              {sections.map((section, i) => (
                <ContentSection key={i} {...section} />
              ))}
            </div>
            <div className="lg:col-span-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 bg-slate-50 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem 
                  key={i} 
                  faq={faq} 
                  isOpen={openFaq === i} 
                  toggle={() => setOpenFaq(openFaq === i ? null : i)} 
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}