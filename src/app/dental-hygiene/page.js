"use client";

import { motion } from 'framer-motion'
import { Smile } from 'lucide-react'
import Link from 'next/link'

export default function HygienePage () {
  return (
  <div className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-8">Dental Hygiene</h1>
          <div className="prose prose-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              While at our office, we make sure that you receive the highest level of service and ensure that our dental work is of the highest quality. To ensure that you maintain great oral health, this level of quality needs to extend into your personal oral hygiene routine.
            </p>
            <p>
              We can help you establish a dental hygiene routine that will keep your teeth healthy and white. If you have any questions about your current hygiene plan please ask us.
            </p>
            <p>
              Your teeth are not the only important part of your mouth. Your gums are essential to oral hygiene as well. We can provide periodontal cleanings and treatment, or refer you to one of our recommended specialists. Please let us know if you have any questions.
            </p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://picsum.photos/seed/flossing/800/1000" 
            alt="Mom and daughter flossing" 
            className="rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/5]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-brand-primary text-white p-8 rounded-3xl shadow-xl hidden md:block">
            <Smile size={40} className="mb-4" />
            <div className="text-xl font-bold">Healthy Habits</div>
            <div className="text-sm opacity-80">Start early for a lifetime of smiles</div>
          </div>
        </motion.div>
      </div>
      
      <div className="p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-3xl font-bold mb-2">Have questions about hygiene?</h3>
          <p className="text-slate-400">Our team is here to guide you and your child.</p>
        </div>
        <Link href="/contact-us" className="btn-primary">Contact Us Today</Link>
      </div>
    </div>
  </div>
  )
}