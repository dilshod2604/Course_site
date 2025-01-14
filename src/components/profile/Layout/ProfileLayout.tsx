import React, { ReactNode } from "react";
import scss from "./ProfileLayout.module.scss";

import ProfileHeader from "./profile_header/ProfileHeader";
import SIdeBar from "./side_bar/SIdeBar";
const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={scss.ProfileLayout}>
      <ProfileHeader />
      <div className={scss.profile_main_box}>
        <SIdeBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default ProfileLayout;
