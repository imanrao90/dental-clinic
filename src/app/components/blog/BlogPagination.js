"use client";

import { BLOG_POSTS } from "@/app/data/blogPosts";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function BlogPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 11;
  const totalPages = Math.ceil(
      BLOG_POSTS.length / blogsPerPage
    );

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={() =>
          setCurrentPage((prev) => Math.max(prev - 1, 1))
        }
        disabled={currentPage === 1}
        className="p-4 rounded-2xl border border-slate-200 text-slate-600 hover:bg-brand-primary hover:text-white disabled:opacity-30 transition-all"
      >
        <ChevronDown className="rotate-90" size={20} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-12 h-12 rounded-2xl font-bold transition-all ${
              currentPage === page
                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() =>
          setCurrentPage((prev) =>
            Math.min(prev + 1, totalPages)
          )
        }
        disabled={currentPage === totalPages}
        className="p-4 rounded-2xl border border-slate-200 text-slate-600 hover:bg-brand-primary hover:text-white disabled:opacity-30 transition-all"
      >
        <ChevronDown className="-rotate-90" size={20} />
      </button>
    </div>
  );
}