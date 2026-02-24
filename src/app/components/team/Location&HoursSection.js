"use client";

import { motion } from "framer-motion";
import { Clock, ExternalLink, MapPin } from "lucide-react";

export default function LocationAndHoursSection() {
  return (
    <div className="mt-32 grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
                <MapPin size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Location</h2>
            </div>
            <div className="space-y-6 text-slate-600 text-lg">
              <p className="font-bold text-slate-900">Dental Clinics of Texas</p>
              <p>17440 FM 529 Rd | Houston, Texas 77095</p>
              <p>17440 FM 529 Suite 100, Houston, Texas, 77095, USA</p>
              <div className="pt-6">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=17440+FM+529+Rd+Houston+Texas+77095" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Get Directions <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-12 rounded-[3rem] shadow-xl text-white"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-2xl flex items-center justify-center text-brand-primary">
                <Clock size={24} />
              </div>
              <h2 className="text-3xl font-bold">Hours of Operation</h2>
            </div>
            <div className="space-y-4">
              {[
                { day: "Monday", hours: "9:00 am - 6:00 pm" },
                { day: "Tuesday", hours: "9:00 am - 6:00 pm" },
                { day: "Wednesday", hours: "9:00 am - 6:00 pm" },
                { day: "Thursday", hours: "9:00 am - 6:00 pm" },
                { day: "Friday", hours: "9:00 am - 6:00 pm" },
                { day: "Saturday", hours: "9:00 am - 5:00 pm" },
                { day: "Sunday", hours: "Closed", closed: true }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                  <span className="font-medium">{item.day}</span>
                  <span className={item.closed ? "text-brand-primary font-bold" : "text-slate-400"}>{item.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
  )
}
