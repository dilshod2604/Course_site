import React, { ReactNode } from "react";
import scss from "./AuthLayout.module.scss";
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={scss.Layout_auth}>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
