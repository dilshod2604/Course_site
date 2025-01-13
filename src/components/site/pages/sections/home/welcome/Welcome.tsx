import React from "react";
import scss from "./Welcome.module.scss";
import Image from "next/image";
import boy from "../../../../../../assets/Welcome/Boy.png";
import fixed from "../../../../../../assets/Welcome/fixed-width.png";
import fixed_2 from "../../../../../../assets/Welcome/fixed-width_2.png";
import fixed_3 from "../../../../../../assets/Welcome/fixed-width_3.png";

const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.welcome_content}>
          <div className={scss.content_welcome}>
            <div className={scss.content_text}>
              <h1>Надо много учиться, чтобы знать хоть немного.</h1>
              <p>
                Обеспечьте сеть для всех ваших потребностей легко и весело,
                используя наши курсы.Откройте для себя интересные функции от
                нас.
              </p>
              <button>Начать</button>
            </div>
            <div className={scss.content_text_img}>
              <Image src={boy} alt="img" width={500} height={500} />
            </div>
          </div>
          <div className={scss.content_blocks}>
            <div className={scss.content_block_1}>
              <Image src={fixed} alt="img" width={70} height={76} />
              <h3>Пожизненный доступ</h3>
              <div className={scss.line}></div>
              <p>
                Постепенное накопление информация об атомном и мелкомасштабное
                поведение...
              </p>
            </div>
            <div className={scss.content_block_2}>
              <Image src={fixed_2} alt="img" width={70} height={76} />
              <h3>Сертифицированный преподаватель</h3>
              <div className={scss.line}></div>
              <p>
                Постепенное накопление информация об атомном и мелкомасштабное
                поведение...
              </p>
            </div>
            <div className={scss.content_block_3}>
              <Image src={fixed_3} alt="img" width={70} height={76} />
              <h3>Обучающие курсы</h3>
              <div className={scss.line}></div>
              <p>
                Постепенное накопление информация об атомном и мелкомасштабное
                поведение...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
