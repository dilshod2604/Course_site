import React from "react";
import scss from "./Dashboard.module.scss";
import AllCourses from "@/src/components/site/pages/sections/courses/popular_courses/AllCourses";
const Dashboard = () => {
  return (
    <div className={scss.Dashboard}>
      <div className={scss.content}>
        <center>Dashboard</center>
        {/* <AllCourses/> */}
      </div>
    </div>
  );
};

export default Dashboard;
