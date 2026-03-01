import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function BlogHero({ blog }) {
  return (
    <section className="relative h-[60vh] flex items-end pb-24 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 w-full">
        <Link
          href="/blog-posts"
          className="inline-flex items-center gap-2 text-brand-primary font-bold mb-6 hover:-translate-x-2 transition-transform"
        >
          <ArrowRight size={18} className="rotate-180" />
          Back to Blog
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <span className="bg-brand-primary text-white text-xs font-bold px-4 py-2 rounded-full">
            {blog.category}
          </span>
          <span className="text-slate-300 text-sm flex items-center gap-2">
            <Clock size={14} />
            {blog.readTime}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          {blog.title}
        </h1>
      </div>
    </section>
  );
}