export default function handler(req, res) {
  const robotsTxt = `
User-agent: *
Disallow:

Sitemap: https://dental-clinic-ir.vercel.app/sitemap.xml
`;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(robotsTxt);
}