"use client";
import React from "react";
import scss from "./ProfileHeader.module.scss";
import Image from "next/image";
import logo from "../../../../assets/logo/logo.png";
import { GoBell } from "react-icons/go";
import { useGetMeQuery } from "@/src/redux/api/auth";

const ProfileHeader = () => {
  const { data } = useGetMeQuery();
  return (
    <div className={scss.ProfileHeader}>
      <div className={scss.content}>
        <div className={scss.header_logo}>
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>
        <div className={scss.header_actions}>
          <div className={scss.bell_icon}>
            <GoBell size={20} />
          </div>

          <div className={scss.header_avatar}>
            <Image
              src={data?.avatar as string}
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
