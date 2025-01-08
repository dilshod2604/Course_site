import React from "react";
import scss from "./AboutWelcome.module.scss";
const AboutWelcome = () => {
  return (
    <section className={scss.AboutWelcome}>
      <div className="container">
        <div className={scss.welcome_content}>AboutWelcome</div>
      </div>
    </section>
  );
};

export default AboutWelcome;
