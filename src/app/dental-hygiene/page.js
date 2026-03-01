import Link from 'next/link'
import HygieneClient from '../components/dental-hygiene/HygieneClient';

export const metadata = {
  title: "Pediatric Dental Hygiene Services | Dental Clinics of Texas",
  description: "Get to know our experienced pediatric dentists and staff in West Houston, Cypress, and Katy.",
};

export default function HygienePage () {
  return (
  <div className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <HygieneClient/>
      
      <div className="p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-3xl font-bold mb-2">Have questions about hygiene?</h3>
          <p className="text-slate-400">Our team is here to guide you and your child.</p>
        </div>
        <Link href="/contact-us" className="btn-primary">Contact Us Today</Link>
      </div>
    </div>
  </div>
  )
}