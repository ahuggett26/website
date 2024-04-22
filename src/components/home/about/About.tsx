import { useEffect } from "react";
import image1 from "../../../resources/images/about/estonia-fountain.jpg";
import image2 from "../../../resources/images/about/georgia-batumi.jpg";
import image3 from "../../../resources/images/about/georgia-roadside.jpg";
import image4 from "../../../resources/images/about/montreal-bridge.jpg";
import image5 from "../../../resources/images/about/niagara-whirlpool.jpg";
import image6 from "../../../resources/images/about/squamish-forest.jpg";
import image7 from "../../../resources/images/about/stanley-park.jpg";
import image8 from "../../../resources/images/about/vancouver-lake.jpg";
import ImageCarousel, { Image } from "../../common/ImageCarousel";
import styles from "./About.module.scss";

/**
 * A view for display at /about.
 *
 * @returns JSX element of component
 */
const About = () => {
  useEffect(() => {
    document.title = "About - ahuggett.uk";
  });

  const images = [
    new Image(image1, "A fountain in Estonia"),
    new Image(image2, "A town in Georgian hills"),
    new Image(image3, "Some mountains in Georgia"),
    new Image(image4, "A bridge in Montreal"),
    new Image(image5, "A whirlpool near Niagara"),
    new Image(image6, "Sky Pilot Trail, Squamish"),
    new Image(image7, "A split bridge in Stanley Park"),
    new Image(image8, "A lake in Vancouver"),
  ];
  const hoverText =
    "Here are some of my favourite pictures that I've taken on my travels.";
  return (
    <div className={styles["about-container"]}>
      <p>
        My name is Andrew Huggett, I am a software engineer from the south of
        England.
        <br />I currently work for Diffblue, an Oxford based company that
        produces an AI unit test writing solution for Java and Kotlin projects.
      </p>
      <div className={styles["image-carousel"]}>
        <ImageCarousel images={images} hoverText={hoverText} />
      </div>
      <p>
        I work across the tech stack, but my expertise is in on the front-end,
        in particular with user-facing code. Java is my most used language, but
        I am well versed in TypeScript, HTML, CSS & Kotlin, among others.
      </p>
      <p>
        During my weekends and days off, I have a range of personal coding
        projects that I work on. Take a look at the Portfolio tab (coming soon)
        for a look at some of these projects.
      </p>
      <p>
        One of my main joys in life is football. I have been a Brighton fan
        since promotion from League 1 at the Withdean and a season ticket holder
        since 2011. Whenever there is a home game, I try to make my way down to
        the AMEX with my dad.
      </p>
    </div>
  );
};

export default About;
