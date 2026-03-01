"use client";

import { sedationFaqs } from "@/app/data/mockData";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function SedationFAQs() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
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
    )
}
