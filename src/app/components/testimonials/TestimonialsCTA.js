import Link from "next/link"

export default function TestimonialsCTA() {
  return (
    <section className="py-24 px-4 text-center bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Your opinion is important to us!
        </h2>

        <p className="text-lg text-slate-600 mb-10">
          We invite you to share your experience with Dental Clinics of Texas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.google.com/search?q=Dental+Clinics+of+Texas+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Leave a Review
          </a>

          <Link href="/appointment-request" className="btn-outline">
            Schedule Visit
          </Link>
        </div>
      </div>
    </section>
  )
}