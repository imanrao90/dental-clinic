export default function BlogContent({ content }) {
  return (
    <div
      className="prose prose-lg prose-slate max-w-none leading-relaxed text-slate-600"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}