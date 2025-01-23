import { FC } from "react";
import scss from "./AdminCourses.module.scss";

const AdminCourses: FC = () => {
 return (
  <section className={scss.AdminCourses}>
   <div className="container">
    <div className={scss.content}>AdminCourses</div>
   </div>
  </section>
 );
};

export default AdminCourses;
