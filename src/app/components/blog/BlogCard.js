"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
          {blog.category}
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
          <Clock size={14} />
          <span>{blog.date}</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">
          {blog.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {blog.excerpt}
        </p>

        <Link
          href={`/blog-posts/${blog.id}`}
          className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm group/link"
        >
          Read More
          <ArrowRight
            size={16}
            className="group-hover/link:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </motion.article>
  );
}