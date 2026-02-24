"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"

export default function DoctorsCard({i, doc}) {
    return (
        <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100"
        >
            <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-4 relative h-[400px] md:h-auto">
                    <img
                        src={`https://picsum.photos/seed/${doc.image}/600/800`}
                        alt={doc.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent md:hidden"></div>
                </div>
                <div className="md:col-span-8 p-8 md:p-16">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{doc.name}</h2>
                        <p className="text-brand-primary font-bold uppercase tracking-widest text-sm">{doc.role}</p>
                    </div>

                    <div className="prose prose-slate max-w-none mb-10">
                        {doc.bio.split('\n\n').map((para, idx) => (
                            <p key={idx} className="text-slate-600 leading-relaxed mb-4">{para}</p>
                        ))}
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <ShieldCheck className="text-brand-primary" size={20} />
                            Professional Memberships
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {doc.memberships.map((m, idx) => (
                                <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
