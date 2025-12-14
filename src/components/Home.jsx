import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";

import ImageSlider from "./ImageSlider";
import WorkFlow from "./WorkFlow";
import OurSerive from "./OurSerive";
import OurWork from "./OurWork";

import OurClient from "./OurClient";
import BannerFooter from "./BannerFooter";

const Home = () => {


  return (
    <Layout>
      
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
