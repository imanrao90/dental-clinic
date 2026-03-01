"use client";

import Link from "next/link";
import { homeQuickLinks } from "../../data/mockData";
import {motion} from 'framer-motion'

export default function HomeQuickLinksGrid () {
    return (
        <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Services</h2>
            <p className="text-slate-600">We look forward to hearing from you.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeQuickLinks.map((link, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4">{link.title}</h3>
                <p className="text-slate-500 text-sm mb-6">{link.desc}</p>
                <Link href={link.path} className="text-brand-primary font-bold text-sm uppercase tracking-wider hover:underline">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}