import React from "react";
import Layout from "../layout/Layout";
import ImageSlider from "./ImageSlider";
import WorkFlow from "./WorkFlow";
import OurSerive from "./OurSerive";
import OurWork from "./OurWork";
import OurClient from "./OurClient";
import BannerFooter from "./BannerFooter";
import Action from "./Action";
import ButtonScrollTop from "./ButtonScrollTop";
import ClientCarousel from "./ClientCarousel";

const Home = () => {


  return (
    <Layout>
      
      <ImageSlider />
      <OurSerive />
      <Action />
      <WorkFlow />
      {/* <OurClient /> */}
      <ClientCarousel />
      <OurWork />
      <BannerFooter />
      <ButtonScrollTop />
    </Layout>
  );
};

export default Home;
