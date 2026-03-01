import HeroSlider from "./components/home/HeroSlider";
import HomeQuickLinksGrid from "./components/home/HomeQuickLinksGrid";
import HomeTaglineAndPractice from "./components/home/HomeTaglineAndPractice";
import HomeIntroSection from "./components/home/HomeIntroSection";
import HomeMeetTheTeam from "./components/home/HomeMeetTheTeam";
import HomeServicesSection from "./components/home/HomeServicesSection";
import HomeBlogSection from "./components/home/HomeBlogSection";
import HomeCTASection from "./components/home/HomeCTASection";
import HomeEmailSection from "./components/home/HomeEmailSection";

export const metadata = {
  title: "Best Pediatric Dentist in Texas | Dental Clinif of Texas",
  description: "Trusted pediatric dental clinic in Karachi offering implants, root canal, and hygiene treatments.",
};

const HomePage = () => {

  return (
    <div className="bg-white">
      <HeroSlider/>

      <HomeQuickLinksGrid/>
      <HomeTaglineAndPractice/>

      <HomeIntroSection/>
      <HomeMeetTheTeam/>
      <HomeServicesSection/>
      <HomeBlogSection/>
      <HomeCTASection/>
      <HomeEmailSection/>
    </div>
  );
};

export default HomePage