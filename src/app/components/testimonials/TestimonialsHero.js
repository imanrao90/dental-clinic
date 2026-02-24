export default function TestimonialsHero() {
  return (
    <section className="py-24 bg-slate-900 text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Patient Testimonials
        </h1>

        <p className="text-xl text-slate-400 mb-12">
          Friendly Staff. Excellent Service. Beautiful Smiles.
        </p>

        <div className="inline-flex items-center gap-8 bg-white/5 p-8 rounded-[2rem] border border-white/10">
          <div className="text-center">
            <div className="text-5xl font-bold text-brand-primary mb-2">
              4.8
            </div>
            <div className="text-sm text-slate-400">
              Average Rating
            </div>
          </div>

          <div className="w-px h-16 bg-white/10"></div>

          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">
              776
            </div>
            <div className="text-sm text-slate-400">
              Google Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}