"use client";
import React from "react";
import scss from "./BurgerMenu.module.scss";
import { nav_links } from "@/src/constants/links";
import Link from "next/link";
import { useBurgerStore } from "@/src/store/useBurgerStore";
import { motion } from "framer-motion";
const BurgerMenu = () => {
  const { setIsOpen, isOpen } = useBurgerStore();
  return (
    <div className={scss.BurgerMenu} onClick={() => setIsOpen(!isOpen)}>
      <motion.div
        className={scss.content}
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: 1,
          x: isOpen ? 0 : "100%",
          transition: {
            duration: 0.5,
          },
        }}
      >
        <nav className={scss.burger_nav}>
          {nav_links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>
        <div className={scss.auth_btn}>
          <Link href="/sign-in" className={scss.sign_in}>
            Войти
          </Link>
          <Link href="/sign_up" className={scss.sign_up}>
            Присоединяйся
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default BurgerMenu;
