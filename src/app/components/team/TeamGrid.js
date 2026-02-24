import DoctorsCard from './DoctorsCard'
import { doctors } from '@/app/data/mockData'

export default function TeamGrid() {
  return (
    <div className="space-y-24">
        {doctors.map((doc, i) => (
            <DoctorsCard key={i} doc={doc}/>
        ))}
    </div>
  )
}
