import { motion } from "framer-motion"

export default function ContactSection () {
    return (
        <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Book Your Child’s Appointment Today</h2>
            <p className="text-slate-600 leading-relaxed">
              Your child’s oral health is important to us. Schedule your appointment today and discover how we make high-quality pediatric dental care easy and affordable for families across Houston, Cypress, and Katy.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-16 rounded-[3rem] border border-slate-100 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Affordable & Flexible Payment Options</h3>
            <p className="text-slate-500 mb-8">Fill out the form below, and our team will reach out within one business day to discuss the best payment solution for your family.</p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Enter your name (Required) *</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-slate-50" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Enter email (Required) *</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-slate-50" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">(XXX)XXX-XXXX</label>
                <input type="tel" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-slate-50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message (Required) *</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-slate-50 resize-none" required></textarea>
              </div>
              <p className="text-xs text-slate-400 italic">Please do not submit any Protected Health Information (PHI).</p>
              <button className="btn-primary w-full py-4 text-lg">Submit Request</button>
            </form>
          </motion.div>
        </div>
      </section>
    )
}