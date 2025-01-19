import React from "react";
import scss from "./SIdeBar.module.scss";
import Navigation from "@/src/components/profile/ui/sidebar_navigation/Navigation";
import AdminNavigation from "@/src/components/profile/ui/sidebar_navigation/AdminNavigation";
const SIdeBar = () => {
  return (
    <div className={scss.SIdeBar}>
      <div className={scss.content}>
        {/* <Navigation /> */}
        <AdminNavigation/>
      </div>
    </div>
  );
};

export default SIdeBar;
