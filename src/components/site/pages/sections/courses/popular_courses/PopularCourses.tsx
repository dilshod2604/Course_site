import React from "react";
import scss from "./PopularCourses.module.scss";
const PopularCourses = () => {
  return (
    <section className={scss.PopularCourses}>
      <div className="container">
        <div className={scss.welcome_content}>PopularCourses</div>
      </div>
    </section>
  );
};

export default PopularCourses;
