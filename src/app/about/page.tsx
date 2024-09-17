import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import AboutUsFirst from "./components/firstSection";
import ServiceSection from "./components/serviceSection";
import HandymanServicesSection from "./components/thirdSection";
import ExpertTeamSection from "./components/fourthSection";
import StatsSection from "./components/fifthSection";
import TestimonialsSection from "./components/sixthSection";
import WhyChooseUsSection from "./components/seventhSection";

const AboutUsPage = () => {
  return (
    <section>
      <AboutUsFirst />
      <ServiceSection />
      <HandymanServicesSection />
      <ExpertTeamSection />
      <StatsSection />
      <TestimonialsSection />
    </section>
  );
};

export default AboutUsPage;
