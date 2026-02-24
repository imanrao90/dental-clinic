"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SedationFAQPage () {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    {
      q: "Who is a candidate for sedation?",
      a: "If you have anxiety or fear about going to the dentist you are a candidate for sedation dentistry. If you have a fear of pain, have had a traumatic dental experience in the past, or the sounds and smells of a dental office make you nauseous, sedation dentistry can help you get over your anxiety. Some people have physical reasons, like a bad gag reflex or very sensitive teeth, which make them a candidate for sedation dentistry as well."
    },
    {
      q: "Will I be unconscious?",
      a: "No, but you will be in a deep state of relaxation during your treatment. You will still be able to breathe on your own and communicate, but you will not feel any pain or anxiety. You may not even remember the procedure afterwards."
    },
    {
      q: "How long will I be sedated?",
      a: "Sedation can last from about 2-6 hours depending on the strength of sedative you are given and how long your procedure takes."
    },
    {
      q: "Will I be monitored?",
      a: "Yes, at all times during your sedation someone will be with you. We also monitor your vitals to make sure they remain at a normal level. Safety is of the utmost importance to us."
    },
    {
      q: "Are there any long term effects of sedation?",
      a: "No. You will feel a little groggy and \"out of it\" after some forms of sedation, but after a few hours you will feel like yourself again. You will need to have someone drive you home from your appointment in these cases."
    },
    {
      q: "What procedures can be performed under sedation?",
      a: "Just about any procedure can be performed with sedation. The sedation is not for the procedure itself, but for the anxiety that accompanies the procedure. Ask your dentist if sedation is available for a particular procedure."
    },
    {
      q: "How many appointments will I need to complete my dental work?",
      a: "In most cases it only takes two appointments. The first appointment will be a consultation to check your health history and make sure you are a candidate for sedation. The next appointment will be to perform the necessary procedures."
    },
    {
      q: "Will my insurance cover sedation?",
      a: "In most cases it will not be covered by your insurance provider. We will review your insurance coverage and let you know if it is covered or not. If it is not covered, we will let you know the cost and, if necessary, we can put together a financing plan for you."
    }
  ];

  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-900 mb-12 text-center">Sedation FAQ</h1>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
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