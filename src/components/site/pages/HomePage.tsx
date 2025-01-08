import React from "react";
import Welcome from "./sections/home/welcome/Welcome";
import AboutCouse from "./sections/home/about_course/AboutCouse";
import AccessCourses from "./sections/home/access_course/AccessCourses";
import Reviews from "../shared/reviews/Reviews";
import JoinUs from "../shared/join_us/JoinUs";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <AboutCouse />
      <AccessCourses />
      <Reviews />
      <JoinUs />
    </>
  );
};

export default HomePage;
