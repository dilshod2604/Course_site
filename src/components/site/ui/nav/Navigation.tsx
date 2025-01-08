import React from "react";
import scss from "./Navigation.module.scss";
import { nav_links } from "@/src/constants/links";
import Link from "next/link";
const Navigation = () => {
  return (
    <nav className={scss.Navigation}>
      {nav_links.map((link) => (
        <Link key={link.href} href={link.href} className={scss.nav_link}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
