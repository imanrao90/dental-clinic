"use client";

import { AnimatePresence, motion } from "framer-motion";
import { homeSlides } from "../../data/mockData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function HeroSlider () {
  const [activeSlide, setActiveSlide] = useState(0);
    return (
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={homeSlides[activeSlide].image} 
              alt={homeSlides[activeSlide].title} 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {homeSlides[activeSlide].title.split(' ').map((word, i) => 
                  word.toLowerCase() === 'lifetime' ? (
                    <span key={i} className="text-brand-primary italic"> {word}</span>
                  ) : (
                    <span key={i}> {word}</span>
                  )
                )}
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {homeSlides[activeSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={homeSlides[activeSlide].path} className="btn-primary flex items-center justify-center gap-2 group">
                  {homeSlides[activeSlide].cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {homeSlides.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold transition-all ${activeSlide === i ? 'bg-brand-primary border-brand-primary text-white scale-110' : 'border-white/30 text-white/50 hover:border-white/60'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    )
}