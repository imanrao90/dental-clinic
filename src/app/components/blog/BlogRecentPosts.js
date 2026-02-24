import { BLOG_POSTS } from "@/app/data/blogPosts";
import Link from "next/link";

export default function BlogRecentPosts({ currentId }) {
  const related = BLOG_POSTS
    .filter(b => b.id !== currentId)
    .slice(0, 2);

  return (
    <div className="mt-24 pt-24 border-t border-slate-100">
      <h3 className="text-3xl font-bold text-slate-900 mb-12">
        Recent Posts
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {related.map(post => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group flex gap-6 items-center"
          >
            <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div>
              <h4 className="font-bold text-slate-900 group-hover:text-brand-primary transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-sm text-slate-400 mt-2">
                {post.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}