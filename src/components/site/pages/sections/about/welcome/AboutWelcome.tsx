"use client";
import React from "react";
import scss from "./AboutWelcome.module.scss";
import raketa from "../../../../../../assets/Снимок экрана 2025-01-09 130716.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { VscChevronLeft } from "react-icons/vsc";

const AboutWelcome = () => {
  const route = useRouter();
  return (
    <section className={scss.AboutWelcome}>
      <div className="container">
        <h2 onClick={() => route.push("/")}>
          <VscChevronLeft />
        </h2>
        <div className={scss.welcome_content}>
          <h1>
            Мы являемся топливом для вашего бизнеса, готовы дать вам образование
            и поднять ваш бренд до небес.
          </h1>
          <div className={scss.welcome_image}>
            <Image src={raketa} alt="Raketa" className={scss.image_raketa} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWelcome;
