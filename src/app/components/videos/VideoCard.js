"use client";

import { motion } from "framer-motion";

export default function VideoCard({ videoId, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm"
    >
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`YouTube video player ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          Pediatric Dental Care {index + 1}
        </h3>
        <p className="text-sm text-slate-500 italic">
          Watch to learn more about our gentle approach and advanced techniques.
        </p>
      </div>
    </motion.div>
  );
}