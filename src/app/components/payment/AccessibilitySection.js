"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function AccessibilitySection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Making Pediatric Dentistry Accessible
            </h2>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Flexible Options</h4>
                <p className="text-sm text-slate-500">
                  Tailored to fit your budget.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img
              src="https://picsum.photos/seed/payment/800/800"
              alt="Happy family"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}