"use client";

import VideoCard from "./VideoCard";

export default function VideoGrid({ videoIds }) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoIds.map((id, i) => (
            <VideoCard key={id} videoId={id} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}