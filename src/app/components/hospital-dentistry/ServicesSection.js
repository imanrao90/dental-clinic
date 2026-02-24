import { ShieldCheck } from "lucide-react"

export default function ServicesSection() {
  const services = [
    { title: "Tooth Extractions", desc: "Safe removal of damaged teeth." },
    { title: "Pulp Therapy", desc: "Treating deep decay." },
    { title: "Dental Crowns", desc: "Restoring teeth." },
    { title: "Comprehensive Exams", desc: "Full oral evaluation." }
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {services.map((service, i) => (
          <div key={i} className="flex gap-6 p-6 hover:bg-slate-50 rounded-2xl">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
              <ShieldCheck size={24} className="text-brand-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold">{service.title}</h4>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}