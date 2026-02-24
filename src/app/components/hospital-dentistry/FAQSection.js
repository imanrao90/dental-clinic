"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQSection() {
  const [open, setOpen] = useState(null)

  const faqs = [
    {
      q: "Is hospital dentistry safe for kids?",
      a: "Yes. Your child’s safety is our priority."
    },
    {
      q: "How do I know if my child needs it?",
      a: "If your child has complex dental needs or severe anxiety."
    }
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full p-6 flex justify-between"
            >
              <span className="font-bold">{faq.q}</span>
              <ChevronDown
                className={`transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === i && (
              <div className="p-6 pt-0 text-slate-600">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}