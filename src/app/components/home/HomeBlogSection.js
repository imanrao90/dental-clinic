"use client";

import Link from "next/link";
import {motion} from 'framer-motion'
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/app/data/blogPosts";

export default function HomeBlogSection () {
    return (
        <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-brand-primary font-bold uppercase tracking-widest mb-4">Our Blog</h2>
              <h3 className="text-4xl font-bold text-slate-900">Latest from Dental Clinics of Texas</h3>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all">
              View All Posts <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((blog) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${blog.id}`}>
                  <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 relative">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-primary text-xs font-bold px-4 py-2 rounded-full">
                      {blog.category}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">{blog.title}</h4>
                  <p className="text-slate-500 text-sm mb-4">{blog.date}</p>
                  <span className="text-brand-primary font-bold text-sm inline-flex items-center gap-2">
                    Read Article <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/blog" className="btn-outline w-full">View All Posts</Link>
          </div>
        </div>
      </section>
    )
}