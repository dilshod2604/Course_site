"use client";
import scss from "./AllCourses.module.scss";
import Image from "next/image";
import time from "../../../../../../assets/access_course/time.svg";
import lesson from "../../../../../../assets/access_course/lesson.svg";
import progress from "../../../../../../assets/access_course/progress.svg";
import { MdArrowForwardIos } from "react-icons/md";
import { useRouter } from "next/navigation";
import { VscChevronLeft } from "react-icons/vsc";
import { popularCourses } from "@/src/constants/popularCourses";

const AllCourses = () => {
  const route = useRouter();
  return (
    <section className={scss.AllCourses}>
      <div className="container">
        <h2 onClick={() => route.push("/course")}>
        <VscChevronLeft /> 
        </h2>
        <center>
          <h1>Все курсы</h1>
        </center>
        <div className={scss.popularCourses_block}>
          {popularCourses.map((el, index) => (
            <div key={index} className={scss.popularCourses_item}>
              <Image src={el.image} alt="img" width={329} height={300} />
              <p className={scss.item_lll}>{el.lll}</p>

              <div className={scss.popularCourses_item_info}>
                <h3 className={scss.item_title}>{el.title}</h3>
                <span className={scss.item_description}>{el.description}</span>
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
    </section>
  );
};

export default AllCourses;
