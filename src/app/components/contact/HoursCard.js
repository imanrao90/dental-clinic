export default function HoursCard() {
  return (
    <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
      <h4 className="font-bold text-slate-900 mb-4">
        Hours of Operation
      </h4>
      <div className="space-y-2 text-sm text-slate-600">
        <div className="flex justify-between">
          <span>Monday - Friday:</span>
          <span className="font-bold">9:00 am - 6:00 pm</span>
        </div>
        <div className="flex justify-between">
          <span>Saturday:</span>
          <span className="font-bold">9:00 am - 5:00 pm</span>
        </div>
        <div className="flex justify-between">
          <span>Sunday:</span>
          <span className="text-brand-primary font-bold uppercase">
            Closed
          </span>
        </div>
      </div>
    </div>
  )
}