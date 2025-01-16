import scss from "./CourseWelcome.module.scss";
import photo from "../../../../../../assets/young man working on a laptop.png";
import Image from "next/image";
const CourseWelcome = () => {
  return (
    <section className={scss.CourseWelcome}>
      <div className="container">
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
