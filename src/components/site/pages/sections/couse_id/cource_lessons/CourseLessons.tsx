import React from "react";
import scss from "./CourseLessons.module.scss";
const CourseLessons = () => {
  return (
    <section className={scss.CourseLessons}>
      <div className="container">
        <div className={scss.welcome_content}>CourseLessons</div>
      </div>
    </section>
  );
};

export default CourseLessons;

