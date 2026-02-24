export default function ContactDetailsItem({ icon, title, content }) {
  return (
    <div className="flex gap-6">
      <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-slate-600">{content}</p>
      </div>
    </div>
  )
}