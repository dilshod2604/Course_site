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
import { useRouter } from "next/navigation";
import { Dropdown, MenuProps } from "antd";
import avatar from "../../../../assets/avatar/avatar.jpg";
import { RiAdminLine, RiUser6Line } from "react-icons/ri";

const Header = () => {
  const { isOpen } = useBurgerStore();
  const { data } = useGetMeQuery();
  const router = useRouter();

  const items: MenuProps["items"] = data?.role === "ADMIN" 
    ? [
        {
          key: "1",
          label: (
            <Link
              className="flex items-center gap-x-4"
              // target="_blank"
              rel="noopener noreferrer"
              href="/admin"
            >
              <RiAdminLine /> Админ
            </Link>
          ),
        },
      ]
    : data?.role === "USER"
    ? [
        {
          key: "2",
          label: (
            <Link
              className="flex items-center gap-x-4"
              // target="_blank"
              rel="noopener noreferrer"
              href="/profile"
            >
              <RiUser6Line /> Мой профиль
            </Link>
          ),
        },
      ]
    : [];

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.header_content}>
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            onClick={() => router.push("/")}
          />
          <Navigation />
          <div className={scss.header_login}>
            {data?.email ? (
              <Dropdown
                menu={{ items }}
                placement="bottom"
                arrow={{ pointAtCenter: true }}
              >
                <Image
                  src={avatar}
                  alt="avatar"
                  width={50}
                  height={50}
                  className={scss.dropdown_avatar}
                />
              </Dropdown>
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