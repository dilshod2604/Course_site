"use client";
import React, { useState, useEffect } from "react";
import scss from "./MyProfile.module.scss";
import Image from "next/image";
import {
  useGetMeQuery,
  useUpdateUserProfileMutation,
} from "@/src/redux/api/auth";
import { Bounce, ToastContainer, toast } from "react-toastify";
import FreeCourses from "./freeCourses/FreeCourses";
import { useRouter } from "next/navigation";

interface ProfileData {
  name: string | undefined;
  banner: File | null;
}

const MyProfile = () => {
  const { data } = useGetMeQuery();
  const router = useRouter();
  const [upDateUserProfile, { isLoading }] = useUpdateUserProfileMutation();

  const [isEditClicked, setIsEditClicked] = useState(false);
  const [avatar, setAvatar] = useState<string | undefined>(null);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: data?.name,
    banner: null,
  });

  // Функция для показа ошибок через toast
  const notifyError = (message: string) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      theme: "light",
      transition: Bounce,
    });

  const convertToBase64 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Проверяем тип файла (PNG или JPG)
      if (!["image/png", "image/jpeg"].includes(file.type)) {
        notifyError("Пожалуйста, выберите PNG или JPG файл.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target?.result as string;
        setAvatar(base64Image); // Обновляем стейт с аватаром
        localStorage.setItem("userAvatar", base64Image); // Сохраняем аватар в localStorage
      };
      reader.readAsDataURL(file); // Преобразуем файл в base64
    }
  };

  // Функция для обработки изменения профиля
  const handleEdit = async () => {
    if (isEditClicked) {
      try {
        const updateData = { name: profileData.name, avatar }; // Данные для обновления
        const res = await upDateUserProfile(updateData); // Обновляем профиль через мутацию
        if (res.data?.id) {
          setIsEditClicked(false); // Выключаем режим редактирования
          toast.success("Ваш профиль успешно изменен", {
            position: "top-right",
            autoClose: 5000,
            theme: "light",
            transition: Bounce,
          });
        } else {
          notifyError("Ошибка при обновлении профиля");
        }
      } catch (error) {
        console.error(error);
        notifyError("Ошибка при обновлении профиля");
      }
    } else {
      setIsEditClicked(true); // Включаем режим редактирования
    }
  };

  // Используем useEffect для загрузки аватара при монтировании компонента
  useEffect(() => {
    // Проверяем наличие аватара в localStorage
    const storedAvatar = localStorage.getItem("userAvatar");
    if (storedAvatar) {
      setAvatar(storedAvatar); // Если есть, устанавливаем его в стейт
    } else if (data?.avatar) {
      setAvatar(data.avatar); // Если нет в localStorage, устанавливаем аватар из данных пользователя
    }
  }, [data?.avatar]);

  return (
    <section className={scss.MyProfile}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className={scss.content}>
        <div className={scss.profile}>
          <div className={scss.profile_banner}></div>
          <div className={scss.profile_info_box}>
            <div className={scss.profile_info}>
              <div className={scss.profile_avatar}>
                {/* Инпут для загрузки аватара */}
                <input
                  type="file"
                  className={scss.avatar_input}
                  accept="image/png, image/jpeg"
                  onChange={convertToBase64} // Вызываем функцию при изменении файла
                />
                {/* Отображаем аватар */}
                <Image
                  src={avatar || "/default-avatar.png"} // Если есть аватар, показываем его, иначе показываем дефолтный
                  alt="avatar"
                  width={100}
                  height={100}
                />
              </div>
              <div className={scss.profile_name}>
                {/* Если режим редактирования включен, отображаем инпут для редактирования имени */}
                {isEditClicked ? (
                  <input
                    type="text"
                    defaultValue={data?.name}
                    className={scss.name_input}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                  />
                ) : (
                  <p className={scss.name}>{data?.name}</p> // Если не в режиме редактирования, показываем имя
                )}
                <i>Student</i>
              </div>
            </div>
            {/* Кнопка для редактирования профиля */}
            <button
              className={scss.edit_button}
              onClick={handleEdit} // При клике вызываем функцию handleEdit
              disabled={isLoading} // Блокируем кнопку, если идет загрузка
            >
              {isLoading
                ? "Сохранение..." // Если идет загрузка, показываем "Сохранение..."
                : isEditClicked
                ? "Сохранить" // Если редактируем, показываем "Сохранить"
                : "Редактировать"}
            </button>
          </div>
        </div>
        <div className={scss.profile_courses_box}>
          <div className={scss.courses_btn}>
            <button>Мои курсы</button>
            <button onClick={() => router.push("/profile/favorites")}>Избранное</button>
          </div>
          <FreeCourses />
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
