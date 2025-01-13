import image1 from "../assets/access_course/product.png";
import image2 from "../assets/access_course/product2.png";
import image3 from "../assets/access_course/fixed.png";
import { StaticImageData } from "next/image";

interface ICorses {
  title: string;
  description: string;
  image: StaticImageData;
  time: string;
  lessons: string;
}

export const courses: ICorses[] = [
  {
    title: "Как ставить о оценивать задачи",
    description:
      "Мы ориентируемся на эргономику и ты где работаешь. Это всего лишь нажатие клавиши.",
    image: image1,
    time: "22ч 30мин",
    lessons: "64 урок",
  },
  {
    title: "Как ставить о оценивать задачи",
    description:
      "Мы ориентируемся на эргономику и ты где работаешь. Это всего лишь нажатие клавиши.",
    image: image2,
    time: "22ч 30мин",
    lessons: "64 урок",
  },
  {
    title: "Как ставить о оценивать задачи",
    description:
      "Мы ориентируемся на эргономику и ты где работаешь. Это всего лишь нажатие клавиши.",
    image: image3,
    time: "22ч 30мин",
    lessons: "64 урок",
  },
];
