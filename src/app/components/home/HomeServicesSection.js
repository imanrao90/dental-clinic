import { homeServices } from "@/app/data/mockData";
import Link from "next/link";

export default function HomeServicesSection () {
    return (
        <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pediatric Dental Services in Houston, Texas</h2>
            <p className="text-slate-400">Our dental office in Houston offers a full range of pediatric services designed to support your child’s oral health at every stage.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {homeServices.map((service, i) => (
              <Link 
                key={i} 
                href={service.path}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-brand-primary/20 hover:border-brand-primary transition-all group"
              >
                <h4 className="font-bold text-lg group-hover:text-brand-primary transition-colors">{service.title}</h4>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services/pediatric" className="btn-primary">Learn More</Link>
          </div>
        </div>
      </section>
    )
}