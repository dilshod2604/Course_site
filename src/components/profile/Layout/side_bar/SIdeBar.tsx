import React from "react";
import scss from "./SIdeBar.module.scss";
import Navigation from "../../ui/sidebar_navigation/Navigation";
const SIdeBar = () => {
  return (
    <div className={scss.SIdeBar}>
      <div className={scss.content}>
        <Navigation />
      </div>
    </div>
  );
};

export default SIdeBar;
