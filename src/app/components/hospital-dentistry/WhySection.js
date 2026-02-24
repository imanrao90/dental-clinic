import { Stethoscope, Smile, Heart } from "lucide-react"

export default function WhySection() {
  const items = [
    {
      title: "Complex Treatments",
      desc: "Extractions, crowns, pulp therapy.",
      icon: <Stethoscope className="w-8 h-8 text-brand-primary" />
    },
    {
      title: "Dental Anxiety",
      desc: "For children with severe fear or sensory sensitivities.",
      icon: <Smile className="w-8 h-8 text-brand-primary" />
    },
    {
      title: "Special Health Needs",
      desc: "Autism, ADHD, or physical disabilities.",
      icon: <Heart className="w-8 h-8 text-brand-primary" />
    }
  ]

  return (
    <section className="py-24 bg-slate-50 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border">
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}