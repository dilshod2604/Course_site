// "use client";
// import React from "react";
// import scss from "./AdminHeader.module.scss";
// import Image from "next/image";
// import logo from "../../../../assets/logo/logo.png";
// import { GoBell } from "react-icons/go";
// import { useGetMeQuery } from "@/src/redux/api/auth";
// import { useRouter } from "next/navigation";
// const AdminHeader = () => {
//   const { data } = useGetMeQuery();
//   const router = useRouter()

//   return (
//     <div className={scss.AdminHeader}>
//       <div className={scss.content}>
//         <div className={scss.header_logo}>
//           <Image onClick={() => router.push("/")} src={logo} alt="logo" width={50} height={50} />
//         </div>
//         <div className={scss.header_actions}>
//           <div className={scss.bell_icon}>
//             <GoBell size={20} />
//           </div>

//           <div className={scss.header_avatar}>
//             <Image
//               src={data?.avatar as string}
//               alt="profile"
//               width={50}
//               height={50}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHeader;


"use client";
import React, { useEffect, useState } from "react";
import scss from "./AdminHeader.module.scss";
import Image from "next/image";
import logo from "../../../../assets/logo/logo.png";
import { GoBell } from "react-icons/go";
import { useGetMeQuery } from "@/src/redux/api/auth";
import { useRouter } from "next/navigation";

const AdminHeader = () => {
  const { data } = useGetMeQuery();
  const router = useRouter();
  const [avatar, setAvatar] = useState<string>("/default-avatar.png");

  useEffect(() => {
    const storedAvatar = localStorage.getItem("userAvatar");
    if (storedAvatar) {
      setAvatar(storedAvatar);
    } else if (data?.avatar) {
      setAvatar(data.avatar);
    }
  }, [data?.avatar]);

  return (
    <div className={scss.AdminHeader}>
      <div className={scss.content}>
        <div className={scss.header_logo}>
          <Image onClick={() => router.push("/")} src={logo} alt="logo" width={50} height={50} />
        </div>
        <div className={scss.header_actions}>
          <div className={scss.bell_icon}>
            <GoBell size={20} />
          </div>
          <div className={scss.header_avatar}>
            <Image src={avatar} alt="profile" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
