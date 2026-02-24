"use client";

import HeroSlider from "./components/home/HeroSlider";
import HomeQuickLinksGrid from "./components/home/HomeQuickLinksGrid";
import HomeTaglineAndPractice from "./components/home/HomeTaglineAndPractice";
import HomeIntroSection from "./components/home/HomeIntroSection";
import HomeMeetTheTeam from "./components/home/HomeMeetTheTeam";
import HomeServicesSection from "./components/home/HomeServicesSection";
import HomeBlogSection from "./components/home/HomeBlogSection";
import HomeCTASection from "./components/home/HomeCTASection";
import HomeEmailSection from "./components/home/HomeEmailSection";
import { homeSlides } from "./data/mockData";
const { useState, useEffect } = require("react");

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % homeSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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