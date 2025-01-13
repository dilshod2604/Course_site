import React from "react";
import scss from "./AccessCourses.module.scss";
import { courses } from "../../../../../../constants/couse";
import Image from "next/image";
import time from "../../../../../../assets/access_course/time.svg";
import lesson from "../../../../../../assets/access_course/lesson.svg";
import progress from "../../../../../../assets/access_course/progress.svg";
import { MdArrowForwardIos } from "react-icons/md";

const AccessCourses = () => {
  return (
    <section className={scss.AccessCourses}>
      <div className="container">
        <div className={scss.welcome_content}>
          <h1 className={scss.welcome_title}>Доступные курсы</h1>
          <span className={scss.welcome_description}>
            Мы предоставляем множество функций, которые вы можете использовать.
            Постепенное накоплениеинформация
          </span>
          <div className={scss.accessCourses_block}>
            {courses.map((el, index) => (
              <div key={index} className={scss.accessCourses_item}>
                <Image src={el.image} alt="img" width={329} height={300} />
                <div className={scss.accessCourses_item_info}>
                  <h3 className={scss.item_title}>{el.title}</h3>
                  <span className={scss.item_description}>
                    {el.description}
                  </span>
                  <div className={scss.time}>
                    <span>
                      <Image
                        src={time}
                        alt="img"
                        width={16}
                        height={16}
                        className={scss.item_image}
                      />
                      {el.time}
                    </span>
                    <span>
                      <Image
                        src={lesson}
                        alt="img"
                        width={16}
                        height={16}
                        className={scss.item_image}
                      />
                      {el.lessons}
                    </span>
                    <span>
                      <Image
                        src={progress}
                        alt="img"
                        width={16}
                        height={16}
                        className={scss.item_image}
                      />
                      Прогресс
                    </span>
                  </div>
                  <button>
                    Узнать больше
                    <MdArrowForwardIos />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessCourses;
