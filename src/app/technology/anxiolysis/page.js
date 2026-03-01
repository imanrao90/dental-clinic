import TechnologyPage from '@/app/components/TechnologyPage'
import technologiesData from '@/app/data/technology'

export const metadata = {
  title: "Anxiolysis for Pediatric Dentistry | Dental Clinics of Texas",
  description: "Get to know our experienced pediatric dentists and staff in West Houston, Cypress, and Katy.",
};

export default function page() {
  return <TechnologyPage {...technologiesData.anxiolysis}/>
}
