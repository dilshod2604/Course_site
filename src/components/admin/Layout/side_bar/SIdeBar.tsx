import React from "react";
import scss from "./SIdeBar.module.scss";
import AdminNavigation from "@/src/components/profile/ui/sidebar_navigation/AdminNavigation";
const SIdeBar = () => {
  return (
    <div className={scss.SIdeBar}>
       <div className="container">
       <div className={scss.content}>
        <AdminNavigation/>
      </div>
       </div>
    </div>
  );
};

export default SIdeBar;
