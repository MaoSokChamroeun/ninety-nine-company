import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import WorkFlow from "./WorkFlow";
import OurSerive from "./OurSerive";
import OurWork from "./OurWork";
import ToastCard from "./Toast";
import OurClient from "./OurClient";
import BannerFooter from "./BannerFooter";

const Home = () => {
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenToast");
    if (!hasSeen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowToast(true);
      sessionStorage.setItem("hasSeenToast", "true");
    }
  }, []);

  return (
    <Layout>
      {showToast && (
        <ToastCard
          message="Ninety Nine Media & Advertising is a modern digital marketing and advertising 
          agency founded on October 10, 2024, with a mission to empower businesses in Cambodia to grow, scale, 
          and stand out in today’s fast-moving digital era."
          duration={5000} 
        />
      )}
      <ImageSlider />
      <OurSerive />
      <WorkFlow />
      <OurClient />
     
      <OurWork />
       <BannerFooter />
    </Layout>
  );
};

export default Home;
