import Image from "next/image";
import React from "react";
import avatar from "../../../../assets/avatar/avatar.jpg";
import scss from "./ProfileButton.module.scss"
const ProfileButton = () => {
  return (
    <div className={scss.ProfileButton}>
      <Image src={avatar} alt="avatar" width={50} height={50} className={scss.avatar} />
    </div>
  );
};

export default ProfileButton;
