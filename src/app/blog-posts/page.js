"use client";

import { useState } from "react";
import { BLOG_POSTS } from "../data/blogPosts";
import BlogHero from "@/app/components/blog/BlogHero";
import BlogGrid from "@/app/components/blog/BlogGrid";
import BlogPagination from "@/app/components/blog/BlogPagination";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 11;
  const totalPages = Math.ceil(
    BLOG_POSTS.length / blogsPerPage
  );

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = BLOG_POSTS.slice(
    indexOfFirstBlog,
    indexOfLastBlog
  );

  return (
    <div className="bg-white">
      <BlogHero />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <BlogGrid blogs={currentBlogs} />

          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </div>
  );
}