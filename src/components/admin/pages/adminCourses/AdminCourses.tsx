import { FC } from "react";
import scss from "./AdminCourses.module.scss";
import FreeCourses from "@/src/components/profile/pages/profile/freeCourses/FreeCourses";
import PaidCourses from "./paidCourses/PaidCourses";

const AdminCourses: FC = () => {
  return (
    <section className={scss.AdminCourses}>
      <div className="container">
        <div className={scss.content}>
          <FreeCourses />
          <PaidCourses />
        </div>
      </div>
    </section>
  );
};

export default AdminCourses;
