"use client";

import { useParams } from "next/navigation";
import BlogAuthor from "../../components/blog/BlogAuthor";
import BlogContent from "../../components/blog/BlogContent";
import BlogCTA from "../../components/blog/BlogCTA";
import BlogPostHero from "../../components/blog/BlogPostHero";
import BlogRecentPosts from "../../components/blog/BlogRecentPosts";
import ContentPage from "../../components/ContentPage";
import { BLOG_POSTS } from "../../data/blogPosts";

export default function BlogPostPage () {
  const { id } = useParams();
  const blog = BLOG_POSTS.find(b => b.id === Number(id));

  if (!blog) return <ContentPage title="Post Not Found" />;

  return (
    <div className="bg-white">
      <BlogPostHero blog={blog}/>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <BlogAuthor blog={blog} />
          <BlogContent content={blog.content} />
          <BlogRecentPosts currentId={blog.id} />
          <BlogCTA />
        </div>
      </section>
    </div>
  );
};