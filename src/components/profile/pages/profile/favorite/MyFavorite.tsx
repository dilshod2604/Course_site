import { FC } from "react";
import scss from "./MyFavorite.module.scss";

const MyFavorite: FC = () => {
 return (
  <section className={scss.MyFavorite}>
   <div className="container">
    <div className={scss.content}>MyFavorite</div>
   </div>
  </section>
 );
};

export default MyFavorite;
