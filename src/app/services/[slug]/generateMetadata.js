import servicesData from "@/app/data/services";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const service = servicesData[slug];

  if (!service) return {};

  return {
    title: `${service.title} | Dental Clinics of Texas`,
    description: service.subtitle,
    alternates: {
      canonical: `https://dental-clinic-ir.vercel.app/services/${slug}`,
    },
  };
}