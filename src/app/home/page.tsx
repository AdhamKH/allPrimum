"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import HeroSlider from "./components/slider";
import WhyChooseUs from "./components/whyChooseUS";
import Services from "./components/services";
import RecentProjects from "./components/projects";
import HowItWorks from "./components/howItWorks";
import Footer from "./components/footer";
import AboutUsSection from "./components/aboutUs";
import Loader from "@/conponents/loader";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for when the document has finished loading all styles and resources
    const handleLoad = () => {
      setLoading(false); // Stop loading once styles and other resources are loaded
    };

    if (document.readyState === "complete") {
      // If the document is already fully loaded, stop the loader immediately
      setLoading(false);
    } else {
      // Add a listener to handle when the page's resources have fully loaded
      window.addEventListener("load", handleLoad);
    }

    // Cleanup event listener
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {/* <Header /> */}
      <HeroSlider />
      <WhyChooseUs />
      <Services />
      <RecentProjects />
      <HowItWorks />
      <AboutUsSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Page;
