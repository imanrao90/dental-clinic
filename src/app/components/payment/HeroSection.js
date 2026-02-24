"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-24 bg-slate-900 text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Payment Options
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            At Dental Clinics of Texas...
          </p>
        </motion.div>
      </div>
    </section>
  );
}