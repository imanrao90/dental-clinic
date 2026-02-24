export default function MembershipPlans () {
    return (
        <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[4rem] overflow-hidden text-white shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Membership Plans Include:</h2>
                <ul className="space-y-4">
                  {[
                    "Two regular dental exams",
                    "Annual fluoride treatments",
                    "One set of annual X-rays",
                    "Discounts on additional procedures and treatments",
                    "Two professional cleanings per year"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-300">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-primary p-12 md:p-20 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Affordable Membership Plans for Your Child’s Dental Care</h3>
                <div className="space-y-6">
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                    <div className="text-sm uppercase tracking-widest opacity-80 mb-1">Children Under 12</div>
                    <div className="text-4xl font-bold">$399 <span className="text-lg font-normal opacity-60">/ year</span></div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                    <div className="text-sm uppercase tracking-widest opacity-80 mb-1">Teens 13 and Older</div>
                    <div className="text-4xl font-bold">$432 <span className="text-lg font-normal opacity-60">/ year</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}