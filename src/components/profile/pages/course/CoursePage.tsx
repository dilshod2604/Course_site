import React from "react";
import scss from "./CoursePage.module.scss";
import FreeCourses from "../profile/freeCourses/FreeCourses";
const CoursePage = () => {
  return (
    <section className={scss.CoursePage}>
      <div className={scss.welcome_content}>
        <FreeCourses />
      </div>
    </section>
  );
};

export default CoursePage;
