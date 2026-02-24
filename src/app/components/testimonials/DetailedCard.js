export default function DetailedCard({ item }) {
  return (
    <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
      <p className="text-lg text-slate-600 leading-relaxed mb-8">
        {item.text}
      </p>

      <div className="font-bold text-slate-900">
        — {item.name}
      </div>
    </div>
  )
}