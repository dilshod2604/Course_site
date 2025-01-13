import React from "react";
import AboutWelcome from "./sections/about/welcome/AboutWelcome";
import Founders from "./sections/about/our_founders/Founders";
import JoinUs from "../shared/join_us/JoinUs";
import Gallery from "./sections/about/welcome/Gallery";

const AboutPage = () => {
  return (
    <>
      <AboutWelcome />
      <Gallery/>
      <Founders />
      <JoinUs />
    </>
  );
};

export default AboutPage;
