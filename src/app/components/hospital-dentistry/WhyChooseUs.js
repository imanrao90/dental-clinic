export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Dental Clinics of Texas?</h2>
            <p className="text-slate-400">Trusted by parents in West Houston, Cypress, and Katy.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Expert Specialists", desc: "Experienced in special health needs and severe anxiety." },
              { title: "Safety First", desc: "Partnering with licensed anesthesiologists for every procedure." },
              { title: "Comprehensive", desc: "All aspects of dental needs handled in one convenient visit." },
              { title: "Compassionate", desc: "Supportive, stress-free environment for both kids and parents." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <h4 className="text-xl font-bold mb-4 text-brand-primary">{item.title}</h4>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
