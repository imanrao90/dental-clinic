"use client";

import { BLOG_POSTS } from "@/app/data/blogPosts";
import BlogCard from "./BlogCard";
import { useState } from "react";

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 11;
  
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = BLOG_POSTS.slice(
      indexOfFirstBlog,
      indexOfLastBlog
    );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {currentBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}