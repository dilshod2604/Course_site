import Image, { StaticImageData } from "next/image";
import scss from "./CourseCard .module.scss";
import time from "../../../../assets/access_course/time.svg";
import lesson from "../../../../assets/access_course/lesson.svg";
import progress from "../../../../assets/access_course/progress.svg";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { courses } from "@/src/constants/couse";
import { IoIosHeartEmpty } from "react-icons/io";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    time: string;
    lessons: string;
    lll: string;
  };
  handleAddToFavorites: (course: any) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  course,
  handleAddToFavorites,
}) => {
  return (
    <div className={scss.FreeCourses_block}>
      {courses.map((el, videoIndex) => (
        <div key={`${el.id}-${videoIndex}`} className={scss.FreeCourses_item}>
          <Image src={el.image} alt="img" width={329} height={300} />
          <p className={scss.item_lll}>{el.lll}</p>
          <button onClick={() => handleAddToFavorites(el)}>
            <IoIosHeartEmpty />
          </button>

          <div className={scss.FreeCourses_item_info}>
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
  );
};

export default CourseCard;
