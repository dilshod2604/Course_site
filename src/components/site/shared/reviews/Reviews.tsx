import React from "react";
import scss from "./Reviews.module.scss";
const Reviews = () => {
  return (
    <section className={scss.Reviews}>
      <div className="container">
        <div className={scss.welcome_content}>Reviews</div>
      </div>
    </section>
  );
};

export default Reviews;
