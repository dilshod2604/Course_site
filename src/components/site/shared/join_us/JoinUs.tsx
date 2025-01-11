import scss from "./JoinUs.module.scss";
const JoinUs = () => {
  return (
    <section className={scss.JoinUs}>
      <div className="container">
        <div className={scss.welcome_content}>
          <h1>Присоединяйся к нам</h1>
          <p>
            Мы предоставляем множество функций, которые вы можете <br />
            использовать. Постепенное накопление информация
          </p>
          <div className={scss.join_input}>
            <input type="text" placeholder="Твой Email" />
            <button>Подписка</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
