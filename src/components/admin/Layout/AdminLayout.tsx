import React, { ReactNode } from "react";
import scss from "./AdminLayout.module.scss";

import SIdeBar from "./side_bar/SIdeBar";
import AdminHeader from "./admin_header/AdminHeader";
const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={scss.AdminLayout}>
      <AdminHeader />
      <div className={scss.admin_main_box}>
        <SIdeBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
