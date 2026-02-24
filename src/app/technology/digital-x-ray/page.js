import TechnologyPage from '@/app/components/TechnologyPage'
import technologiesData from '@/app/data/technology'

export default function page() {
  return <TechnologyPage {...technologiesData.digitalXRay}/>
}
