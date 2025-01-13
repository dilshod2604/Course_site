"use client";
import React from "react";
import scss from "./Header.module.scss";
import Navigation from "../../ui/nav/Navigation";
import { FaArrowRight } from "react-icons/fa";
import BurgerButton from "../../ui/burger/burger_btn/BurgerButton";
import Image from "next/image";
import logo from "../../../../assets/logo/logo.png";
import { useBurgerStore } from "@/src/store/useBurgerStore";
import BurgerMenu from "../../ui/burger/burger_menu/BurgerMenu";
import Link from "next/link";
import { useGetMeQuery } from "@/src/redux/api/auth";
import ProfileButton from "../../ui/profile_button/ProfileButton";
const Header = () => {
  const { isOpen } = useBurgerStore();
  const { data } = useGetMeQuery();
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.header_content}>
          <Image src={logo} alt="logo" width={50} height={50} />
          <Navigation />
          <div className={scss.header_login}>
            {data?.email ? (
              <ProfileButton />
            ) : (
              <>
                <Link href="/sign-in" className={scss.sign_in}>
                  Войти
                </Link>
                <Link href="/sign-up" className={scss.sign_up}>
                  Присоединяйся
                  <FaArrowRight size={15} className={scss.arrow_right_icon} />
                </Link>
              </>
            )}
          </div>
          <BurgerButton />
        </div>
      </div>
      {isOpen && <BurgerMenu />}
    </header>
  );
};

export default Header;
