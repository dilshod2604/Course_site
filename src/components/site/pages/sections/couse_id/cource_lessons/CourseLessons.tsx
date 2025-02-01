"use client";
import React, { useState } from "react";
import scss from "./CourseLessons.module.scss";
import Image from "next/image";
import { lessons } from "@/src/constants/lessons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const CourseLessons = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleBlock = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className={scss.CourseLessons}>
      <div className="container">
        <div className={scss.welcome_context_lessons}>
          {lessons.map((el, index) => (
            <>
              <div key={index} className={scss.text}>
                <div className={scss.lesson}>
                  <h3>{el.title}</h3>
                  <button onClick={() => toggleBlock(index)}>
                    {activeIndex === index ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </button>
                </div>
              </div>
              {activeIndex === index &&
                el.video.map((video, videoIndex) => (
                  <>
                    <div key={`${el.id}-${videoIndex}`} className={scss.blocks}>
                      <div
                        className={scss.block_images}
                        onClick={() => router.push(`/video/${el.id}`)}
                      >
                        <Link
                          className={scss.images}
                          href={`/course/${el.id}`}
                          passHref
                        >
                          <Image
                            src={el.image || "/default-image.png"}
                            alt="img"

                          />
                          <h3> {video.title}</h3>
                          <h5>{video.description}</h5>
                        </Link>
                        <Link
                          className={scss.images}
                          href={`/course/${el.id}`}
                          passHref
                        >
                          <Image
                            src={el.image || "/default-image.png"}
                            alt="img"

                          />
                          <h3> {video.title}</h3>
                          <h5>{video.description}</h5>
                        </Link>
                        <Link
                          className={scss.images}
                          href={`/course/${el.id}`}
                          passHref
                        >
                          <Image
                            src={el.image || "/default-image.png"}
                            alt="img"

                          />
                          <h3> {video.title}</h3>
                          <h5>{video.description}</h5>
                        </Link>
                      </div>
                    </div>
                  </>
                ))}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseLessons;
