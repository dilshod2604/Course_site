import React from "react";
import scss from "./AboutCourse.module.scss";
import Image from "next/image";
import image1 from "../../../../../../assets/about_course/icon1.png";
import image2 from "../../../../../../assets/about_course/icon2.png";
import image3 from "../../../../../../assets/about_course/icon3.png";
const AboutCouse = () => {
  return (
    <section className={scss.AboutCouse}>
      <div className="container">
        <div className={scss.welcome_content}>
          <div className={scss.welcome_content_text}>
            <div className={scss.text_about_1}>
              <h1>Почему (название кур.)</h1>
              <p>
                Мы предоставляем множество функций, которые вы можете
                использовать. Постепенное накоплениеинформация
              </p>
            </div>
            <div className={scss.text_about_2}>
              <h1>100+</h1>
              <p>
                Мы предоставляем множество функций, которые вы можете
                использовать. Постепенное накоплениеинформация
              </p>
            </div>
            <div className={scss.text_about_2}>
              <h1>80+</h1>
              <p>
                Мы предоставляем множество функций, которые вы можете
                использовать. Постепенное накоплениеинформация
              </p>
            </div>
          </div>
          <div className={scss.welcome_content_icons}>
            <div className={scss.welcome_content_icon_1}>
              <Image src={image1} alt="img" width={60} height={60} />
              <div className={scss.welcome_content_icon_text_1}>
                <h4>Личное обучение</h4>
                <span>
                  Постепенное накоплениеинформация об атомном имелкомасштабное
                  поведение...
                </span>
              </div>
            </div>
            <div className={scss.welcome_content_icon_1}>
              <Image src={image2} alt="img" width={60} height={60} />
              <div className={scss.welcome_content_icon_text_1}>
                <h4>Интерактивные уроки</h4>
                <span>
                  Постепенное накоплениеинформация об атомном имелкомасштабное
                  поведение...
                </span>
              </div>
            </div>
            <div className={scss.welcome_content_icon_1}>
              <Image src={image3} alt="img" width={60} height={60} />
              <div className={scss.welcome_content_icon_text_1}>
                <h4>24/7 Поддержка учеников</h4>
                <span>
                  Постепенное накоплениеинформация об атомном имелкомасштабное
                  поведение...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCouse;
