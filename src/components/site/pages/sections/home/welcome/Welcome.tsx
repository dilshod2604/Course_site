import React from "react";
import scss from "./Welcome.module.scss";
const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.welcome_content}>Welcome</div>
      </div>
    </section>
  );
};

export default Welcome;