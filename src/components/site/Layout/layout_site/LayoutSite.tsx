import React, { ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const LayoutSite = ({ children }: { children: ReactNode }) => {
  return (
    <div className={scss.Layout_site}>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default LayoutSite;
