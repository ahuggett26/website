import { useState } from "react";
import styles from "./ImageCarousel.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  images: Image[];
  hoverText: string;
}

export class Image {
  src: string;
  alt: string;

  constructor(src: string, alt: string) {
    this.src = src;
    this.alt = alt;
  }
}

const ImageCarousel = (props: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  /**
   *
   * @param imgIndex
   */
  function onImageChanged(imgIndex: number) {
    setImageIndex(imgIndex);
  }

  // original image resolution: 4/3
  // original image size: 4032x3024
  // current image resolution: 16/9
  // current image size: 1344x756
  const image = props.images[imageIndex];
  return (
    <div className={styles["image-carousel"]}>
      <div className={styles["image-holder"]}>
        <LazyLoadImage
          className={styles.image}
          src={image.src}
          alt={image.alt}
          effect="blur"
        />
        <div className={styles.hover}>{props.hoverText}</div>
      </div>
      <div className={styles["radio-buttons"]}>
        {props.images.map((_img, index) => {
          const key = "image-carousel-radio-" + index;
          return (
            <span className={styles["radio-btn-holder"]} key={key}>
              <input
                type="radio"
                name="currImg"
                defaultChecked={index === imageIndex}
                onChange={() => onImageChanged(index)}
              />
              <span className={styles["custom-radio"]} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
