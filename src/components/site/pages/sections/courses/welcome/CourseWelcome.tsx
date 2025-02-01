"use client";
import scss from "./CourseWelcome.module.scss";
import photo from "../../../../../../assets/young man working on a laptop.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { VscChevronLeft } from "react-icons/vsc";
const CourseWelcome = () => {
  const route = useRouter();
  return (
    <section className={scss.CourseWelcome}>
      <div className="container">
        <h2 onClick={() => route.push("/")}>
          <VscChevronLeft />
        </h2>
        <div className={scss.welcome_content}>
          <div className={scss.welcome_text}>
            <h1>
              Развивайте свои навыки с помощью онлайн-курсов с онлайн-обучением
            </h1>
            <button>Присоединиться</button>
          </div>
          <Image src={photo} alt="photo" className={scss.welcome_photo} />
        </div>
      </div>
    </section>
  );
};

export default CourseWelcome;
