export default function BlogAuthor({ blog }) {
  const initials = blog.author
    .split(" ")
    .map(n => n[0])
    .join("");

  return (
    <div className="flex items-center gap-6 mb-12 pb-12 border-b border-slate-100">
      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-brand-primary font-bold text-xl">
        {initials}
      </div>
      <div>
        <div className="font-bold text-slate-900 text-lg">
          {blog.author}
        </div>
        <div className="text-slate-400 text-sm">
          Published on {blog.date}
        </div>
      </div>
    </div>
  );
}