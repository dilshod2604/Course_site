import { FC } from "react";
import scss from "./ChatsSelect.module.scss";
import Image from "next/image";
import logo1 from "../../../../assets/chat1.png";
import logo2 from "../../../../assets/chat2.png";
import logo3 from "../../../../assets/chat3.png";
import logo4 from "../../../../assets/chat4.png";
import logo5 from "../../../../assets/chat5.png";
import logo6 from "../../../../assets/chat6.png";
import logo7 from "../../../../assets/chat7.png";

const ChatsSelect: FC = () => {
  return (
    <section className={scss.ChatsSelect}>
      {/* <div className="container"> */}
      <div className={scss.content}>
        <div className={scss.chat}>
          <Image src={logo1} alt="logo" width={40} height={40} />
          <div className={scss.chatText}>
            <h2>Друзья навеки</h2>
            <p>Привет ребята!</p>
          </div>
        </div>
        <div className={scss.chat}>
          <Image src={logo2} alt="logo" width={40} height={40} />
          <div className={scss.chatText}>
            <h2>Однокурссники</h2>
            <p>Рад видеть вас</p>
          </div>
        </div>
        <div className={scss.chat}>
          <Image src={logo3} alt="logo" width={40} height={40} />
          <div className={scss.chatText}>
            <h2>Девчонки</h2>
            <p>какие планы на сегодня</p>
          </div>
        </div>
        <div className={scss.chat}>
          <Image src={logo4} alt="logo" width={40} height={40} />
          <div className={scss.chatText}>
            <h2>Бека</h2>
            <p>Где ты?</p>
          </div>
        </div>
        <div className={scss.chat}>
          <Image src={logo5} alt="logo" width={40} height={40} />
          <div className={scss.chatText}>
            <h2>Ира</h2>
            <p>Хорошо!</p>
          </div>
        </div>
        <div className={scss.chat}>
          <Image src={logo6} alt="logo" width={40} height={40} />
          <div className={scss.chatText}>
            <h2>Азамат</h2>
            <p>Привет</p>
          </div>
        </div>
        <div className={scss.chat}>
          <Image src={logo7} alt="logo" width={40} height={40} />
          <div className={scss.chatText}>
            <h2>Бегимай</h2>
            <p>я приеду сегодня</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ChatsSelect;
