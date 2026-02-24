import { ShieldCheck, X } from "lucide-react";

export default function MessagingConsentPage() {
    return (
  <div className="bg-white">
    <section className="py-24 bg-brand-primary text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Messaging Consent</h1>
        <p className="text-xl opacity-90">Your child's health and privacy are our top priorities.</p>
      </div>
    </section>

    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-50 p-12 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm">
          <p className="text-lg text-slate-700 leading-relaxed mb-10">
            At Dental Clinics of Texas, we offer text and email messaging to keep you informed about your child's appointments, treatment updates, and important office notifications.
          </p>

          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Opt-In</h3>
                <p className="text-slate-600 leading-relaxed">
                  By providing your contact information, you agree to receive text messages, emails, or phone calls from Dental Clinics of Texas regarding appointment reminders, treatment updates, and other relevant communications. Standard message and data rates may apply. You can update your preferences at any time.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 shrink-0">
                <X size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Opt-Out</h3>
                <p className="text-slate-600 leading-relaxed">
                  If you wish to stop receiving messages, you can opt out at any time by replying "STOP" to any text message or by contacting our office at <span className="font-bold text-slate-900">(832)-464-7172</span>. Please note that opting out may limit our ability to communicate important updates regarding your child's care.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-slate-200 text-center">
            <p className="text-slate-500 mb-4">For questions or assistance, please reach out to us at</p>
            <a href="tel:8324647172" className="text-3xl font-bold text-brand-primary hover:scale-105 transition-transform inline-block">
              (832)-464-7172
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}