import React from "react";
import scss from "./CourseWelcome.module.scss";
const CourseWelcome = () => {
  return (
    <section className={scss.CourseWelcome}>
      <div className="container">
        <div className={scss.welcome_content}>CourseWelcome</div>
      </div>
    </section>
  );
};

export default CourseWelcome;
