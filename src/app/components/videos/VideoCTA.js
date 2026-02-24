import Link from "next/link";

export default function VideoCTA() {
  return (
    <section className="py-24 bg-brand-primary/5 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Have more questions?
        </h2>
        <p className="text-lg text-slate-600 mb-10">
          Our team is always here to help explain any procedure or answer your concerns.
        </p>
        <Link href="/contact-us" className="btn-primary">
          Contact Us Today
        </Link>
      </div>
    </section>
  );
}