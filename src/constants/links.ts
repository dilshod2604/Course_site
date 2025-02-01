export const nav_links = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "О нас",
    href: "/about",
  },
  {
    name: "Курсы",
    href: "/course",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
];
import { FaRegUser, FaUser, FaStar, FaRegStar } from "react-icons/fa";
import { PiChatsCircleFill, PiChatsCircleLight } from "react-icons/pi";
import { MdEmail, MdOutlineMailOutline } from "react-icons/md";
import { IoSettingsOutline, IoSettings } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { BiSolidGroup } from "react-icons/bi";
import { BiGroup } from "react-icons/bi";

interface ISideBar {
  name: string;
  href: string;
  fillIcon: IconType;
  outlineIcon: IconType;
}

export const side_bar_links: ISideBar[] = [
  {
    name: "Профиль",
    href: "/profile",
    fillIcon: FaUser,
    outlineIcon: FaRegUser,
  },
  {
    name: "Чат",
    href: "/profile/chat",
    fillIcon: PiChatsCircleFill,
    outlineIcon: PiChatsCircleLight,
  },
  {
    name: "Курсы",
    href: "/profile/course",
    fillIcon: MdEmail,
    outlineIcon: MdOutlineMailOutline,
  },
  {
    name: "Оценить",
    href: "/profile/rate",
    fillIcon: FaStar,
    outlineIcon: FaRegStar,
  },
  {
    name: "Настройки",
    href: "/profile/settings",
    fillIcon: IoSettings,
    outlineIcon: IoSettingsOutline,
  },
];
export const admin_side_bar_links: ISideBar[] = [
  {
    name: "Профиль",
    href: "/admin",
    fillIcon: FaRegUser,
    outlineIcon: FaUser,
  },
  {
    name: "Чат",
    href: "/profile/chat",
    fillIcon: PiChatsCircleFill,
    outlineIcon: PiChatsCircleLight,
  },
  {
    name: "Студенты",
    href: "/admin/adminStudent",
    fillIcon: BiSolidGroup,
    outlineIcon: BiGroup,
  },
  {
    name: "Курсы",
    href: "/admin/adminCourse",
    fillIcon: MdEmail,
    outlineIcon: MdOutlineMailOutline,
  },
  {
    name: "Оценить",
    href: "/profile/rate",
    fillIcon: FaStar,
    outlineIcon: FaRegStar,
  },
  {
    name: "Настройки",
    href: "/profile/settings",
    fillIcon: IoSettings,
    outlineIcon: IoSettingsOutline,
  },
];
