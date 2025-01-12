import Image from "next/image";
import scss from "./Gallery.module.scss";
import img1 from "../../../../../../assets/Rectangle(1).png"
import img2 from "../../../../../../assets/Rectangle(2).png"
import img3 from "../../../../../../assets/Rectangle(3).png"
import img4 from "../../../../../../assets/Rectangle(4).png"

const Gallery = () => {
  return (
    <div className={scss.gallery}>
      <div className={scss.card}>
        <Image
          src={img1}
          alt="Image 1"
          width={150}
          height={250}
          className={scss.image}
        />
      </div>
      <div className={scss.card}>
        <Image
          src={img2}
          alt="Image 2"
          width={150}
          height={250}
          className={scss.image}
        />
      </div>
      <div className={scss.card}>
        <Image
          src={img3}
          alt="Image 3"
          width={150}
          height={250}
          className={scss.image}
        />
      </div>
      <div className={scss.card}>
        <Image
          src={img4}
          alt="Image 4"
          width={150}
          height={250}
          className={scss.image}
        />
      </div>
    </div>
  );
};

export default Gallery;
