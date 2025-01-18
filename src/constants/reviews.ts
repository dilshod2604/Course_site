import image1 from "../assets/reviews/ivan.svg";
import image2 from "../assets/reviews/amy.svg";
import image3 from "../assets/reviews/kim.svg";
import { StaticImageData } from "next/image";

interface IReviews {
  name: string;
  image: StaticImageData;
  country: string;
  text: string;
  reiting: string;
}

export const reviews: IReviews[] = [
  {
    name: "Viezh Robert",
    image: image1,
    country: "Warsaw, Poland",
    text: "«Вау… Я очень рад использовать этот VPN, он оказался больше, чем мои ожидания, и до сих пор не было никаких проблем. (Название) всегда лучший».",
    reiting: "4.5",
  },
  {
    name: "Yessica Christy",
    image: image2,
    country: "Shanxi, China",
    text: "«Мне это нравится, потому что я люблю путешествовать далеко и все еще могу подключаться к высокой скорости».",
    reiting: "4.5",
  },
  {
    name: "Kim Young Jou",
    image: image3,
    country: "Seoul, South Korea",
    text: "«Это очень необычно для моего бизнеса, которому в настоящее время требуется виртуальная частная сеть с высоким уровнем безопасности».",
    reiting: "4.5",
  },
  {
    // name: "Viezh Robert",
    name: "QWERTYUIOP[",
    image: image1,
    country: "Warsaw, Poland",
    text: "«Вау… Я очень рад использовать этот VPN, он оказался больше, чем мои ожидания, и до сих пор не было никаких проблем. (Название) всегда лучший».",
    reiting: "4.5",
  },
  {
    name: "Yessica Christy",
    image: image2,
    country: "Shanxi, China",
    text: "«Мне это нравится, потому что я люблю путешествовать далеко и все еще могу подключаться к высокой скорости».",
    reiting: "4.5",
  },
  {
    name: "Kim Young Jou",
    image: image3,
    country: "Seoul, South Korea",
    text: "«Это очень необычно для моего бизнеса, которому в настоящее время требуется виртуальная частная сеть с высоким уровнем безопасности».",
    reiting: "4.5",
  },
];
