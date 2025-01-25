"use client";
import React from "react";
import scss from "./FreeCourses.module.scss";
import Image from "next/image";
import time from "../../../../../assets/access_course/time.svg";
import lesson from "../../../../../assets/access_course/lesson.svg";
import progress from "../../../../../assets/access_course/progress.svg";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { courses } from "@/src/constants/couse";
import { IoIosHeartEmpty } from "react-icons/io";
import { useFavoriteStore } from "@/src/store/useFavorite";
import { useRouter } from "next/navigation";
import CourseCard from "@/src/components/site/shared/courseCard/CourseCard";

const FreeCourses = () => {
  const addToFavorites = useFavoriteStore((state) => state.addToFavorites);
  const router = useRouter();

  const handleAddToFavorites = (course: any) => {
    addToFavorites(course); // Добавляем в избранное
    router.push("/favorites"); // Переходим на страницу избранных
  };
  return (
    <section className={scss.FreeCourses}>
      <div className="container">
        <div className={scss.welcome_content}>
          <div className={scss.FreeCourses_block}>
            {courses.map((el, videoIndex) => (
      <div
        key={`${el.id}-${videoIndex}`}
        className={scss.FreeCourses_item}
      >
        <Image src={el.image} alt="img" width={329} height={300} />
        <p className={scss.item_lll}>{el.lll}</p>
        <button onClick={() => handleAddToFavorites(el)}>
          <IoIosHeartEmpty />
        </button>

        <div className={scss.FreeCourses_item_info}>
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
            {/* {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                handleAddToFavorites={handleAddToFavorites}
              />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeCourses;