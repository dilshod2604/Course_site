"use client";
import React, { useState } from "react";
import scss from "./MyProfile.module.scss";
import Image from "next/image";
import {
  useGetMeQuery,
  useUpdateUserProfileMutation,
} from "@/src/redux/api/auth";
import { Bounce, ToastContainer, toast } from "react-toastify";

interface ProfleData {
  name: string | undefined;
  banner: File | null;
}

const MyProfile = () => {
  const { data } = useGetMeQuery();
  const [upDateUserProfile, { isLoading }] = useUpdateUserProfileMutation();
  const [isEditClicked, setIsEditClicked] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string | undefined>(data?.avatar);
  const [profileData, setProfileData] = useState<ProfleData>({
    banner: null,
    name: data?.name,
  });

  const convertToBase64 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if ((file && file.type === "image/png") || file?.type === "image/jpeg") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target?.result as string;
        setAvatar(base64String);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a PNG or JPG file.");
    }
  };

  const handleEdit = async () => {
    if (isEditClicked) {
      try {
        const data = {
          name: profileData.name,
          avatar,
        };
        const res = await upDateUserProfile(data);
        if (res.data?.id) {
          setIsEditClicked(false);
          toast.success("Ваш профил успешно изменен", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else {
          toast.error("Ощибка при обновлении вашего профмля", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      } catch (error) {
        console.log(error);
        toast.error("Ощибка при обновлении вашего профмля", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else {
      setIsEditClicked(true);
    }
  };

  return (
    <section className={scss.MyProfile}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
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
                  src={
                    avatar
                      ? avatar
                      : data?.avatar
                      ? data.avatar
                      : "/default-avatar.png"
                  }
                  alt="avatar"
                  width={100}
                  height={100}
                />
              </div>
              <div className={scss.profile_name}>
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
                  <p className={scss.name}>{data?.name}</p>
                )}
              </div>
            </div>
            <button
              className={scss.edit_button}
              onClick={handleEdit}
              disabled={isLoading}
            >
              {isEditClicked ? "Сохранить" : "Редактировать"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
