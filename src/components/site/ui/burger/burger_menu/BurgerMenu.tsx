"use client";
import React from "react";
import scss from "./BurgerMenu.module.scss";
import { nav_links } from "@/src/constants/links";
import Link from "next/link";
import { useBurgerStore } from "@/src/store/useBurgerStore";
import { motion } from "framer-motion";
import ProfileButton from "../../profile_button/ProfileButton";
import { useGetMeQuery } from "@/src/redux/api/auth";
const BurgerMenu = () => {
  const { setIsOpen, isOpen } = useBurgerStore();
  const { data } = useGetMeQuery();
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
        {data && <ProfileButton />}
        <nav className={scss.burger_nav}>
          {nav_links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>
        {data ? (
          <div className={scss.profile_actions}>
            <Link href="/profile">Мой профил</Link>
            {data?.role === "ADMIN" && <Link href="/admin">Админ</Link>}
          </div>
        ) : (
          <div className={scss.auth_btn}>
            <Link href="/sign-in" className={scss.sign_in}>
              Войти
            </Link>
            <Link href="/sign_up" className={scss.sign_up}>
              Присоединяйся
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BurgerMenu;
