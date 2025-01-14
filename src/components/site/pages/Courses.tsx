import React from "react";
import CourseWelcome from "./sections/courses/welcome/CourseWelcome";
import PopularCourses from "./sections/courses/popular_courses/PopularCourses";
import Reviews from "../shared/reviews/Reviews";
import JoinUs from "../shared/join_us/JoinUs";

const Courses = () => {
  return (
    <>
      <CourseWelcome />
      <PopularCourses />
      <Reviews />
      <JoinUs />
    </>
  );
};

export default Courses;
