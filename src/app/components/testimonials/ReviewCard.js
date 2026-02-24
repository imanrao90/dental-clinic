export default function ReviewCard({ review }) {
  return (
    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="font-bold text-slate-900">
            {review.name}
          </h4>
          <p className="text-xs text-slate-400">
            {review.date}
          </p>
        </div>

        <div className="text-brand-primary text-sm font-bold">
          {review.rating} ★
        </div>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed italic flex-grow">
        "{review.text}"
      </p>

      <div className="pt-6 border-t border-slate-200 mt-6">
        <span className="text-xs text-slate-400 uppercase">
          Google Review
        </span>
      </div>
    </div>
  )
}