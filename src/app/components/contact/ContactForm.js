"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 shadow-sm"
        >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Send Us an Email Today!
            </h3>
            <p className="text-slate-500 mb-8">
                We look forward to hearing from you.
            </p>

            {/* Keep your full form here exactly as you had it */}
            {/* No logic changes needed */}
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Enter your name (Required) *</label>
                        <input type="text" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white" required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Enter email (Required) *</label>
                        <input type="email" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white" required />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">(XXX)XXX-XXXX</label>
                    <input type="tel" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white" />
                </div>

                <div className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Do you agree to receive text messages from Dental Clinics of Texas sent from 832-427-1901? Message frequency varies and may include appointment reminders, service, or order information. Message and data rates may apply. Reply STOP at any time to end or unsubscribe. For assistance, reply HELP or contact support at 832-427-1901.*
                    </p>
                    <div className="space-y-3">
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input type="radio" name="sms_consent" className="mt-1 w-4 h-4 text-brand-primary focus:ring-brand-primary" />
                            <span className="text-sm text-slate-700 group-hover:text-brand-primary transition-colors">Yes, I agree to receive text messages from Dental Clinics of Texas sent from 832-427-1901</span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input type="radio" name="sms_consent" className="mt-1 w-4 h-4 text-brand-primary focus:ring-brand-primary" />
                            <span className="text-sm text-slate-700 group-hover:text-brand-primary transition-colors">No, I do not want to receive text messages from Dental Clinics of Texas</span>
                        </label>
                    </div>
                    <p className="text-xs text-slate-400">
                        See our <Link href="/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link> for details on how we handle your information.
                    </p>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Notes to the Doctor</label>
                    <textarea rows={4} className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white resize-none"></textarea>
                </div>
                <p className="text-xs text-slate-400 italic">Please do not submit any Protected Health Information (PHI).</p>
                <button className="btn-primary w-full py-4 text-lg">Send Message</button>
            </form>
        </motion.div>
    )
}