import Link from "next/link";

export default function BlogCTA() {
  return (
    <div className="mt-20 p-12 bg-slate-50 rounded-[3rem] border border-slate-100 text-center">
      <h3 className="text-2xl font-bold text-slate-900 mb-4">
        Was this helpful?
      </h3>
      <p className="text-slate-500 mb-8">
        Share this article with other parents or schedule a consultation today.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="btn-primary">Share Article</button>
        <Link href="/appointment-request" className="btn-outline">
          Schedule Visit
        </Link>
      </div>
    </div>
  );
}