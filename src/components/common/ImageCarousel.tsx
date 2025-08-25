import { useState, useMemo, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./ImageCarousel.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import randomiseArrayIndices from "./randomise";

interface Props {
  /** All images that should be inside the image carousel. */
  images: Image[];
  /** Text to display on hover of the carousel. */
  hoverText: string;
  /** If true, randomise the input image array */
  randomise?: boolean;
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
  const [animationKey, setAnimationKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Create a randomized index mapping if randomise is enabled
  const indexMapping = useMemo(() => {
    if (!props.randomise) {
      return props.images.map((_, index) => index);
    }
    return randomiseArrayIndices(props.images.length);
  }, [props.images, props.randomise]);

  const nextImageIndex = (imageIndex + 1) % props.images.length;

  // Auto-advance functionality
  useEffect(() => {
    if (props.images.length <= 1) return;

    const startTimer = () => {
      // Clear existing timer
      if (timerRef.current) clearTimeout(timerRef.current);

      // Restart CSS animation by changing key
      setAnimationKey((prev) => prev + 1);

      // Set timer for image advance
      timerRef.current = setTimeout(() => {
        setImageIndex((prev) => (prev + 1) % props.images.length);
      }, 10000);
    };

    startTimer();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [imageIndex, props.images.length]);

  const handleImageChange = (newIndex: number) => {
    setImageIndex(newIndex);
    // Reset animation by changing key
    setAnimationKey((prev) => prev + 1);
  };

  // original image resolution: 4/3
  // original image size: 4032x3024
  // current image resolution: 16/9
  // current image size: 1344x756
  const mappedIndex = indexMapping[imageIndex];
  const image = props.images[mappedIndex];
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
        {indexMapping.map((_mappedId, displayIndex) => {
          const key = "image-carousel-radio-" + displayIndex;
          const holderClass =
            displayIndex === nextImageIndex
              ? `${styles["radio-btn-holder"]} ${styles["next-image"]}`
              : styles["radio-btn-holder"];

          return (
            <span
              className={holderClass}
              key={
                displayIndex === nextImageIndex ? `${key}-${animationKey}` : key
              } // Force re-render for animation restart
            >
              <input
                type="radio"
                name="currImg"
                checked={displayIndex === imageIndex}
                onChange={() => handleImageChange(displayIndex)}
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
