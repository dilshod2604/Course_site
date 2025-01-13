
import LayoutSite from "@/src/components/site/Layout/layout_site/LayoutSite";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default layout;
