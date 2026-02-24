import { Phone } from "lucide-react";
import Link from "next/link";

export default function HomeCTASection () {
    return (
        <section className="py-24 px-4 bg-brand-primary">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-4xl font-bold mb-6">Book an Appointment with a Pediatric Dentist in Houston, TX</h2>
          <p className="text-xl mb-10 opacity-90">
            Looking for a trusted pediatric dentist in Houston? Whether you need preventive care, sedation dentistry, or emergency dental services for your child, Dental Clinics of Texas is here to help. We’re accepting new patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment-request" className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
              REQUEST AN APPOINTMENT
            </Link>
            <a href="tel:8324271901" className="bg-brand-secondary text-black hover:text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-2">
              <Phone size={20} /> CALL NOW
            </a>
          </div>
        </div>
      </section>
    )
}