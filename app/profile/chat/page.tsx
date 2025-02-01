import ChatPage from "@/src/components/profile/pages/chat/ChatPage";
import ChatsSelect from "@/src/components/profile/pages/chat/ChatsSelect";
import React from "react";
import scss from "../../../src/assets/chat.module.scss"

const page = () => {
  return (
    <div className={scss.chat}>
      <ChatsSelect/>
      <ChatPage />
    </div>
  );
};

export default page;
