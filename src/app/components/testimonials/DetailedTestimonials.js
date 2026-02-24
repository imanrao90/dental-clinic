import DetailedCard from "./DetailedCard"

const detailedTestimonials = [
  {
    name: "Shahnawaz K.",
    text: "Good experience, very quick facility. Doctor’s and staff were great, overall amazing experience."
  },
  {
    name: "Faron K.",
    text: "The assistants were very attentive, friendly and professional..."
  },
  {
    name: "Zarine L.",
    text: "I was searching for pediatric dentistry for my two girls..."
  }
]

export default function DetailedTestimonials() {
  return (
    <section className="py-24 bg-slate-50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center italic">
          What Our Patients Are Saying
        </h2>

        <div className="space-y-12">
          {detailedTestimonials.map((item, index) => (
            <DetailedCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}