import { FC } from "react";
import scss from "./PaidCourses.module.scss";
import Image from "next/image";
import time from "../../../../../assets/access_course/time.svg";
import lesson from "../../../../../assets/access_course/lesson.svg";
import progress from "../../../../../assets/access_course/progress.svg";
import { MdArrowForwardIos } from "react-icons/md";
import { popularCourses } from "@/src/constants/popularCourses";

const PaidCourses: FC = () => {
  return (
    <section className={scss.PaidCourses}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.popularCourses_block}>
            {popularCourses.map((el, index) => (
              <div key={index} className={scss.popularCourses_item}>
                <Image src={el.image} alt="img" width={300} height={280} />
                <p className={scss.item_lll}>{el.lll}</p>

                <div className={scss.popularCourses_item_info}>
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

export default PaidCourses;
