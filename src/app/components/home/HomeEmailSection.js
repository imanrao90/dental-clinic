import { Clock, MapPin } from "lucide-react";

export default function HomeEmailSection () {
    return (
        <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900 mb-2 uppercase tracking-tight">EMAIL SIGN-UP</h2>
              <p className="text-slate-500 mb-8">Send us an email today</p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Enter your name (Required)" 
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Enter email (Required)" 
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="(XXX)XXX-XXXX (Required)" 
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white"
                  required
                />
                <p className="text-xs text-slate-400 italic">Please do not submit any Protected Health Information (PHI).</p>
                <button className="btn-primary w-full py-4 text-lg">Submit</button>
              </form>
            </div>

            {/* Location & Hours */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <MapPin className="text-brand-primary" /> OUR LOCATION
                </h2>
                <div className="text-slate-600 space-y-2">
                  <p className="font-bold text-slate-900">17440 FM 529 Rd | Houston, Texas 77095</p>
                  <p>17440 FM 529 Suite 100, Houston, Texas, 77095, USA</p>
                </div>
                <div className="mt-6 h-64 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200">
                  {/* Map Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <div className="text-center">
                      <MapPin size={48} className="mx-auto mb-2 opacity-20" />
                      <p className="text-sm">Interactive Map View</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Clock className="text-brand-primary" /> HOURS OF OPERATION
                </h2>
                <div className="grid grid-cols-2 gap-y-3 text-slate-600">
                  <span className="font-medium">Monday:</span> <span>9:00 am-6:00 pm</span>
                  <span className="font-medium">Tuesday:</span> <span>9:00 am-6:00 pm</span>
                  <span className="font-medium">Wednesday:</span> <span>9:00 am-6:00 pm</span>
                  <span className="font-medium">Thursday:</span> <span>9:00 am-6:00 pm</span>
                  <span className="font-medium">Friday:</span> <span>9:00 am-6:00 pm</span>
                  <span className="font-medium">Saturday:</span> <span>9:00 am-5:00 pm</span>
                  <span className="font-medium">Sunday:</span> <span className="text-brand-primary font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}