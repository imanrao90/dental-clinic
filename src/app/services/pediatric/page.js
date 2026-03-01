import ServicePage from '@/app/components/ServicePage'
import servicesData from '@/app/data/services'

export const metadata = {
  title: "Pediatric Dentistry Services | Dental Clinics of Texas",
  description: "Get to know our experienced pediatric dentists and staff in West Houston, Cypress, and Katy.",
};

export default function page() {
  return <ServicePage {...servicesData.pediatric}/>
}
