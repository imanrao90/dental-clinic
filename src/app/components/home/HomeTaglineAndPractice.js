export default function HomeTaglineAndPractice () {
    return (
        <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif italic text-slate-800">
              "Friendly Staff. Excellent Service. Beautiful Smiles."
            </h2>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/practice-building/1600/800" 
              alt="Practice Building" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    )
}