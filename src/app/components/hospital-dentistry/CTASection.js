import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 px-4 bg-brand-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Schedule Your Child’s Consultation Today
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Patient-Referral-Form.pdf"
            target="_blank"
            className="btn-primary flex items-center gap-2"
          >
            Patient Referral Form
            <ExternalLink size={18} />
          </a>

          <Link href="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}