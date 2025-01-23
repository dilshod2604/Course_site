import user from "../assets/course_id/user.svg";
import user2 from "../assets/course_id/user2.svg";
import user3 from "../assets/course_id/user3.svg";
import user4 from "../assets/course_id/user4.svg";

import { StaticImageData } from "next/image";

interface IMessage {
  id: number;
  name: string;
  message: string;
  description: string;
  image: StaticImageData;
  time: string;
  time2: string;
}

export const message: IMessage[] = [
  {
    id: 1,
    image: user,
    name: "Ира",
    time: "12:00",
    message: "Крутой урок мне понравилось",
    description: "Ответить",
    time2: "2 часа  назад",
  },
  {
    id: 1,
    image: user2,
    name: "Ира",
    time: "12:00",
    message: "Все классно! Спасибо",
    description: "Ответить",
    time2: "2 часа  назад",
  },
  {
    id: 1,
    image: user3,
    name: "Ира",
    time: "12:00",
    message: "Крутой урок мне понравилось",
    description: "Ответить",
    time2: "2 часа  назад",
  },
  {
    id: 1,
    image: user4,
    name: "Ира",
    time: "12:00",
    message: "Расскажите подробнее",
    description: "Ответить",
    time2: "2 часа  назад",
  },
];
