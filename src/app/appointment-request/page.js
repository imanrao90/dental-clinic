export const metadata = {
  title: "Request a Pediatric Dental Appointment | Dental Clinics of Texas",
  description: "Get to know our experienced pediatric dentists and staff in West Houston, Cypress, and Katy.",
};

export default function AppointmentRequestPage () {
  return (
  <div className="bg-white">
    <section className="py-24 bg-brand-primary text-black text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Appointment Request</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
          Fill out the appointment form and our friendly staff will get in touch with you as soon as possible. Send us a message!
        </p>
      </div>
    </section>

    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto bg-slate-50 p-12 md:p-20 rounded-[4rem] border border-slate-100 shadow-xl">
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-2">Request An Appointment Today!</h3>
          <p className="text-slate-500">We look forward to hearing from you.</p>
        </div>
        <form className="space-y-8">
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

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Select Date</label>
              <input type="date" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Select Time</label>
              <input type="time" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Notes to the Doctor</label>
            <textarea rows={4} className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white resize-none"></textarea>
          </div>

          <div className="pt-6">
            <p className="text-xs text-slate-400 italic mb-6">Please do not submit any Protected Health Information (PHI).</p>
            <button className="btn-primary w-full py-5 text-xl shadow-xl shadow-brand-primary/20">Submit Request</button>
            <p className="text-center text-slate-400 text-sm mt-6">
              Our team will contact you shortly to confirm your appointment time.
            </p>
          </div>
        </form>
      </div>
    </section>
  </div>
  )
}