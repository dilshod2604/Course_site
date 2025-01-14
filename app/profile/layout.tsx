import ProfileLayout from "@/src/components/profile/Layout/ProfileLayout";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <ProfileLayout>{children}</ProfileLayout>;
};

export default Layout;
