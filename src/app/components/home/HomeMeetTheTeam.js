import Link from "next/link";

export default function HomeMeetTheTeam () {
    return (
        <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Meet Your Friendly Pediatric Dentists Team in Houston, Texas</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Meet Dr. Glenn Banks, Dr. Yunus Langha, and Dr. Hareeti Gill, our friendly, board-certified pediatric and general dentists in Houston. Each brings years of clinical experience, advanced training, and a compassionate approach to caring for children of all ages, including those with special needs. Their dedication to providing expert, gentle dental care ensures every visit leaves a lasting, positive impression.
              </p>
              <Link href="/our-dental-team" className="btn-primary inline-block">Learn More</Link>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/dental-team2.jpg" 
                alt="Pediatric Dentists Team" 
                className="rounded-[3rem] shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    )
}