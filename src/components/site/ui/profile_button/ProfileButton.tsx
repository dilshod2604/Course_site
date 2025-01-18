import Image from "next/image";
import React, { FC } from "react";
import avatar from "../../../../assets/avatar/avatar.jpg";
import scss from "./ProfileButton.module.scss";
interface ProfileButtonProps {
  handleClikc?: () => void;
}
const ProfileButton: FC<ProfileButtonProps> = ({ handleClikc }) => {
  return (
    <div className={scss.ProfileButton}>
      <Image
        src={avatar}
        alt="avatar"
        width={50}
        height={50}
        className={scss.avatar}
        onClick={handleClikc}
      />
    </div>
  );
};

export default ProfileButton;
