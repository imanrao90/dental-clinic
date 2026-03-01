import servicesData from './data/servicesData';

export default function sitemap() {
  const baseUrl = "https://dental-clinic-ir.vercel.app";

  return [
    { url: baseUrl, lastModified: new Date() },
    ...Object.keys(servicesData).map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
    })),
  ];
}