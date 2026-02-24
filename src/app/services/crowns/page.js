import ServicePage from '@/app/components/ServicePage'
import servicesData from '@/app/data/services'

export default function page() {
  return <ServicePage {...servicesData.crowns}/>
}
