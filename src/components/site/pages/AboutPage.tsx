import React from "react";
import AboutWelcome from "./sections/about/welcome/AboutWelcome";
import Founders from "./sections/about/our_founders/Founders";
import JoinUs from "../shared/join_us/JoinUs";

const AboutPage = () => {
  return (
    <>
      <AboutWelcome />
      <Founders />
      <JoinUs />
    </>
  );
};

export default AboutPage;
