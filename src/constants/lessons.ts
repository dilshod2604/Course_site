import { StaticImageData } from "next/image";
import image1 from "../assets/course_id/video.png";

interface video {
  title: string;
  description: string;
  locked: boolean;
  duration: string;
  video: string;
  image: StaticImageData;
}
interface ILessons {
  id: number; // Add unique id for each course if needed. For this example, I've kept it as number.
  title: string;
  image: StaticImageData;
  description: string;
  duration: string;
  video: video[];
}

export const lessons: ILessons[] = [
  {
    id: 1,
    title: "Урок 1 : Ознакомление",
    image: image1,
    description: "Как ставить о оценивать задачи",
    duration: "01:23:45",
    video: [
      {
        title: "1. Ознакомление",
        image: image1,
        description: "Как ставить о оценивать задачи",
        locked: false,
        video: "https://youtu.be/YjuaFefiQe4?si=UMpiY9HHM6AH3_00",
        duration: "01:23:45",
      },

      // Add more videos here if needed.
    ],
  },
  {
    id: 2,
    title: "Урок 2 : Методы бизнеса",
    image: image1,
    description: "Как ставить о оценивать задачи",
    duration: "01:30:00",
    video: [
      {
        title: "2. Методы бизнеса",
        image: image1,
        description: "Как ставить о оценивать задачи",
        locked: false,
        video: "https://youtu.be/YjuaFefiQe4?si=UMpiY9HHM6AH3_00",
        duration: "01:30:00",
      },

      // Add more videos here if needed.
    ],
  },
  {
    id: 3,
    title: "Урок 3 : Как начать зарабатывать больше",
    image: image1,
    description: "Как ставить о оценивать задачи",
    duration: "01:45:00",
    video: [
      {
        title: "3. Как начать зарабатывать больше",
        image: image1,
        description: "Как ставить о оценивать задачи",
        locked: false,
        video: "https://youtu.be/YjuaFefiQe4?si=UMpiY9HHM6AH3_00",
        duration: "01:45:00",
      },

      // Add more videos here if needed.
    ],
  },
  {
    id: 4,
    title: "Урок 4 : Заключение",
    image: image1,
    description: "Как ставить о оценивать задачи",
    duration: "01:00:00",
    video: [
      {
        title: "Заключение",
        image: image1,
        description: "Как ставить о оценивать задачи",
        locked: false,
        video: "https://youtu.be/YjuaFefiQe4?si=UMpiY9HHM6AH3_00",
        duration: "01:00:00",
      },

      // Add more videos here if needed.
    ],
  },
];
