import React from "react";
import Header from "./components/header";
import HeroSlider from "./components/slider";
import WhyChooseUs from "./components/whyChooseUS";
import Services from "./components/services";
import RecentProjects from "./components/projects";
import HowItWorks from "./components/howItWorks";
import Footer from "./components/footer";
import AboutUsSection from "./components/aboutUs";

const page = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <WhyChooseUs />
      <Services />
      <RecentProjects />
      <HowItWorks />
      <AboutUsSection />
      <Footer />
    </div>
  );
};

export default page;
