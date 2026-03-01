"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/page-header-img.jpg"
          alt="Hospital Setting"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hospital Dentistry
          </h1>
          <p className="text-xl text-slate-300">
            Expert dental care for children who require treatment in a hospital setting.
          </p>
        </motion.div>
      </div>
    </section>
  )
}