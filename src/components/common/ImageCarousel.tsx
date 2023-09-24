import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./ImageCarousel.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  /** All images that should be inside the image carousel. */
  images: Image[];
  /** Text to display on hover of the carousel. */
  hoverText: string;
}

/** Data object to represent images in the ImageCarousel. */
export class Image {
  /** Source of the image. Can be local or http url. */
  src: string;
  /** Alt text to display when the image is not visible & read by screen readers. */
  alt: string;

  constructor(src: string, alt: string) {
    this.src = src;
    this.alt = alt;
  }
}

/**
 * An common image carousel component.
 *
 * This allows display of multiple images, with radio buttons for displaying each image.
 *
 * @param props {@link Props}
 * @returns JSX element of component
 */
const ImageCarousel = (props: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

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
                onChange={() => setImageIndex(index)}
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
