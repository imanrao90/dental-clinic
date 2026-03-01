import LocationAndHoursSection from "../components/team/Location&HoursSection";
import TeamGrid from "../components/team/TeamGrid";
import TeamHero from "../components/team/TeamHero";

export const metadata = {
  title: "Meet Our Dental Team | Dental Clinics of Texas",
  description: "Get to know our experienced pediatric dentists and staff in West Houston, Cypress, and Katy.",
};

export default function TeamPage () {

  return (
    <div className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <TeamHero/>
        <TeamGrid/>
        <LocationAndHoursSection/>
      </div>
    </div>
  );
};