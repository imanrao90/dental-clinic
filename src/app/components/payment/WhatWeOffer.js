export default function WhatWeOffer() {
  return (
    <section className="py-24 bg-slate-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-slate-500">
            Convenient ways to pay.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <OfferCard
            title="Cash, Debit, and Major Credit Cards"
            text="We accept all major credit cards..."
          />
          <OfferCard
            title="Affordable Membership Plans"
            text="No insurance? No problem!"
          />
        </div>
      </div>
    </section>
  );
}

function OfferCard({ title, text }) {
  return (
    <div className="bg-white p-10 rounded-[3rem] border shadow-sm">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}