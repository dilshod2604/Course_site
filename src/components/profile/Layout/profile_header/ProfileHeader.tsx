"use client";
import React, { useEffect, useState } from "react";
import scss from "./ProfileHeader.module.scss";
import Image from "next/image";
import logo from "../../../../assets/logo/logo.png"; // Импорт логотипа
import { GoBell } from "react-icons/go"; // Импорт иконки уведомлений
import { useGetMeQuery } from "@/src/redux/api/auth"; // Хук для получения данных о текущем пользователе
import { useRouter } from "next/navigation";

const ProfileHeader = () => {
  const router = useRouter()
  // Получаем данные о пользователе через хук useGetMeQuery
  const { data } = useGetMeQuery();
  // Стейт для хранения аватара пользователя
  const [avatar, setAvatar] = useState<string | undefined>(null);

  useEffect(() => {
    // При монтировании компонента загружаем аватар из localStorage, если он там есть
    const storedAvatar = localStorage.getItem("userAvatar");
    if (storedAvatar) {
      setAvatar(storedAvatar); // Если аватар найден в localStorage, устанавливаем его
    } else if (data?.avatar) {
      setAvatar(data.avatar); // Если аватар нет в localStorage, используем аватар из данных пользователя
    }
  }, [data?.avatar]); // Эффект срабатывает при изменении данных о пользователе

  return (
    <div className={scss.ProfileHeader}>
      <div className={scss.content}>
        {/* Логотип в хедере */}
        <div className={scss.header_logo}>
          <Image onClick={() => router.push("/")} src={logo} alt="logo" width={50} height={50} />
        </div>
        <div className={scss.header_actions}>
          {/* Иконка уведомлений */}
          <div className={scss.bell_icon}>
            <GoBell size={20} />
          </div>

          {/* Аватар пользователя */}
          <div className={scss.header_avatar}>
            <Image
              src={avatar || "/default-avatar.png"} // Если аватар есть, показываем его, иначе показываем дефолтный
              alt="profile"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
