"use client";
import React from "react";
import scss from "./PopularCourses.module.scss";
import Image from "next/image";
import Link from "next/link";
import time from "../../../../../../assets/access_course/time.svg";
import lesson from "../../../../../../assets/access_course/lesson.svg";
import progress from "../../../../../../assets/access_course/progress.svg";
import { MdArrowForwardIos } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";
import { popularCourses } from "@/src/constants/popularCourses";


const PopularCourses = () => {
  const router = useRouter();
  const { id } = useParams();

  return (
    <section className={scss.PopularCourses}>
      <div className="container">
        <div className={scss.welcome_content}>
          <div className={scss.content_text}>
            <h1>Популярные курсы</h1>
            <p>
              Мы предоставляем множество функций, которые вы можете
              использовать. Постепенное накопление информации.
            </p>
            <div className={scss.courses_btn}>
              <button onClick={() => router.push("/all-courses")}>
                Все курсы
              </button>

              <button>Управление компанией</button>
              <button>Командаобразование</button>
              <button>Маркетинг</button>
              <button>Продажи</button>
            </div>
          </div>
          <div className={scss.popularCourses_block}>
            {popularCourses.slice(0, 3).map((el, index) => (
              <div key={index} className={scss.popularCourses_item}>
                <Image src={el.image} alt="img" width={329} height={300} />
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
                  <Link href={`/course/da`}>

                    <button>
                      Узнать больше
                      <MdArrowForwardIos />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link href={"/all-courses"}>
            <button className={scss.all_courses_button}>Смотреть больше</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
