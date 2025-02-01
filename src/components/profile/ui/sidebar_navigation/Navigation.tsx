"use client";
import React from "react";
import scss from "./Navigation.module.scss";
import { side_bar_links } from "@/src/constants/links";
import { usePathname } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";
const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={scss.Navigation}>
      <ul className={scss.nav_links_lists}>
        {side_bar_links.map((link, index) => (
          <li key={index} className={scss.nav_list}>
            {pathname === link.href ? (
              <>
                <link.fillIcon className={scss.link_icon_active} />
                <Link href={link.href} className={scss.link_active}>
                  {link.name}
                </Link>
              </>
            ) : (
              <>
                <link.outlineIcon className={scss.link_icon} />
                <Link href={link.href} className={scss.link}>
                  {link.name}
                </Link>
              </>
            )}
          </li>
        ))}

        <li className={`${scss.nav_list} ${scss.help}`}>
          <FaQuestionCircle className={scss.link_icon} />
          <Link href="#" className={scss.link}>
            Помощь
          </Link>
        </li>

        <li className={scss.nav_list}>
          <CiLogout className={scss.link_icon} />
          <Link href="#" className={scss.link}>
            Выйти
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
