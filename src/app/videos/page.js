import VideoHero from "@/app/components/videos/VideoHero";
import VideoGrid from "@/app/components/videos/VideoGrid";
import VideoCTA from "@/app/components/videos/VideoCTA";

export const metadata = { 
  title: "Patient Education Videos | Dental Clinics of Texas",
  description: "Get to know our experienced pediatric dentists and staff in West Houston, Cypress, and Katy.",
};

export default function VideosPage() {
  const videoIds = ["VJ1QsM9z6sI", "zmXFQSpN0C4", "fHXOPun1cOs"];

  return (
    <div className="bg-white">
      <VideoHero />
      <VideoGrid videoIds={videoIds} />
      <VideoCTA />
    </div>
  );
}