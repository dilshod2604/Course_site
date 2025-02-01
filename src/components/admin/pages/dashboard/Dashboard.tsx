"use client";

import React, { useState, useEffect } from "react";
import scss from "./Dashboard.module.scss";
import Image from "next/image";
import {
  useGetMeQuery,
  useUpdateAdminProfileMutation,
} from "@/src/redux/api/auth";
import { Bounce, ToastContainer, toast } from "react-toastify";
import AdminCourses from "../adminCourses/AdminCourses";
import AdmCoursesBox from "./admCoursesBox/AdmCoursesBox";

interface ProfileData {
  name: string;
  banner: File | null;
}

const Dashboard = () => {
  const { data } = useGetMeQuery();
  const [updateAdminProfile, { isLoading }] = useUpdateAdminProfileMutation();
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [avatar, setAvatar] = useState<string>("/default-avatar.png");
  const [profileData, setProfileData] = useState<ProfileData>({
    name: data?.name || "",
    banner: null,
  });

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
      if (!["image/png", "image/jpeg"].includes(file.type)) {
        notifyError("Пожалуйста, выберите PNG или JPG файл.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target?.result as string;
        setAvatar(base64Image);
        localStorage.setItem("userAvatar", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (isEditClicked) {
      try {
        if (data?.role !== "ADMIN") {
          notifyError("Только администратор может изменить профиль.");
          return;
        }

        const updateData = { name: profileData.name, avatar };
        const res = await updateAdminProfile(updateData);
        if (res.data?.id) {
          setIsEditClicked(false);
          toast.success("Ваш профиль успешно изменен", {
            toastId: "profile-update",
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
      setIsEditClicked(true);
    }
  };
  useEffect(() => {
    const storedAvatar = localStorage.getItem("userAvatar");
    if (storedAvatar) {
      setAvatar(storedAvatar);
    } else if (data?.avatar) {
      setAvatar(data.avatar);
    }
  }, [data?.avatar]);

  useEffect(() => {
    if (data) {
      setProfileData({
        name: data?.name || "",
        banner: null,
      });
    }
  }, [data]);

  if (!data) {
    return <div>Загрузка...</div>;
  }

  return (
    <section className={scss.Dashboard}>
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
                <input
                  type="file"
                  className={scss.avatar_input}
                  accept="image/png, image/jpeg"
                  onChange={convertToBase64}
                />
                <Image
                  src={avatar || "/default-avatar.png"}
                  alt="avatar"
                  width={100}
                  height={100}
                />
              </div>
              <div className={scss.profile_name}>
                {isEditClicked ? (
                  <input
                    type="text"
                    value={profileData.name}
                    className={scss.name_input}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                  />
                ) : (
                  <p className={scss.name}>{data?.name}</p>
                )}
                <i>Admin</i>
              </div>
            </div>
            <button
              className={scss.edit_button}
              onClick={handleEdit}
              disabled={isLoading}
            >
              {isLoading
                ? "Сохранение..."
                : isEditClicked
                ? "Сохранить"
                : "Редактировать"}
            </button>
          </div>
        </div>
        <AdmCoursesBox />
        <div className={scss.admin_courses_box}>
          <div className={scss.courses_btn}>
            <button>Все курсы</button>
          </div>
          <AdminCourses />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
