"use client";
import React, { useEffect, useRef, useState } from "react";
import scss from "./Reviews.module.scss";
import { reviews } from "../../../../constants/reviews";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Reviews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: size ? 320 : 600,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: size ? -320 : -600,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className={scss.Reviews}>
      <div className="container">
        <div className={scss.welcome_content}>
          <div className={scss.welcome_content_text}>
            <h2>Нам доверяют тысячи довольных учеников</h2>
            <p>
              Мы предоставляем множество функций, которые вы можете
              использовать. Постепенное накоплениеинформация
            </p>
          </div>
          <div className={scss.welcome_content_block}>
            {reviews.map((el) => (
              <>
                <div className={scss.reviews_content}>
                  <div className={scss.reviews_info}>
                    <Image src={el.image} alt="img" width={50} height={50} />
                    <div className={scss.reviews_text}>
                      <h3>{el.name}</h3>
                      <span className={scss.country}>{el.country}</span>
                    </div>
                    <p>
                      {el.reiting} <RiStarSFill />
                    </p>
                  </div>
                  <div className={scss.review_text}>{el.text}</div>
                </div>
              </>
            ))}
          </div>
          <div className={scss.buttons_arrow}>
            <div className={scss.blocks_arrows}>
              <div className={scss.blocks_arrow}></div>
              <div className={scss.blocks_arrow}></div>
              <div className={scss.blocks_arrow}></div>
            </div>
            <div className={scss.buttons}>
              <button onClick={scrollPrev} className={scss.arrow}>
                <FaArrowLeft />
              </button>
              <button onClick={scrollNext} className={scss.arrow}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
