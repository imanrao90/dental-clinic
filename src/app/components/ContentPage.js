import Link from "next/link";

export default function ContentPage ({ title, description }) {
  return(
  <div className="py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-slate-900 mb-8">{title}</h1>
      <div className="prose prose-lg text-slate-600 leading-relaxed">
        <p>{description || `This is the ${title} page. We are currently updating this section with new information about our pediatric dental services in Houston, Texas.`}</p>
        <p className="mt-6">At Dental Clinics of Texas, we are committed to providing the highest quality care in a comfortable and friendly environment. Please contact us if you have any specific questions about this service or topic.</p>
      </div>
      <div className="mt-12 p-8 bg-brand-primary/5 rounded-3xl border border-brand-primary/10">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to schedule?</h3>
        <p className="text-slate-600 mb-6">Our team is ready to help your child achieve a healthy, beautiful smile.</p>
        <Link href="/appointment-request" className="btn-primary inline-block">Request Appointment</Link>
      </div>
    </div>
  </div>
  )
}