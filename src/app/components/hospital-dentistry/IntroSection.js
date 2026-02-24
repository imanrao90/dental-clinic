export default function IntroSection() {
  const idealFor = [
    "Have extensive dental decay requiring multiple treatments",
    "Experience severe dental anxiety",
    "Have special health needs",
    "Are too young to cooperate"
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Hospital Dentistry for Kids
          </h2>
          <p className="text-slate-600 mb-4">
            We provide expert dental care for children who require treatment in a hospital setting.
          </p>
        </div>

        <div className="bg-slate-50 p-12 rounded-[3rem] border">
          <h3 className="text-2xl font-bold mb-6">
            What Is Hospital Dentistry?
          </h3>

          <ul className="space-y-3">
            {idealFor.map((item, i) => (
              <li key={i} className="flex gap-3">
                <div className="w-2 h-2 mt-2 bg-brand-primary rounded-full" />
                <span className="text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}