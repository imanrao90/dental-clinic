import servicesData from "@/app/data/services";

export default function ServicePage({ params }) {
  const { slug } = params;
  const service = servicesData[slug];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <main>
      <h1>{service.title}</h1>
      <p>{service.intro}</p>

      {service.sections.map((section, idx) => (
        <section key={idx}>
          <h2>{section.title}</h2>
          {Array.isArray(section.content)
            ? section.content.map((c, i) => <p key={i}>{c}</p>)
            : <p>{section.content}</p>}
          {section.list && (
            <ul>
              {section.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          )}
        </section>
      ))}

      {service.faqs && (
        <section>
          <h2>FAQs</h2>
          {service.faqs.map((faq, i) => (
            <div key={i}>
              <strong>{faq.q}</strong>
              <p>{faq.a}</p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}