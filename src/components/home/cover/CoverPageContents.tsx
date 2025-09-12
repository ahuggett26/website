import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import javaLogo from "../../../resources/images/portfolio/icons/java-logo.svg";
import kotlinLogo from "../../../resources/images/portfolio/icons/kotlin-logo.png";
import reactLogo from "../../../resources/images/portfolio/icons/react-logo.svg";
import sassLogo from "../../../resources/images/portfolio/icons/sass-logo-64.png";
import tsLogo from "../../../resources/images/portfolio/icons/ts-logo-128.png";
import styles from "./CoverPageContents.module.scss";

/**
 * General contents for the cover page 
 *
 * @returns JSX element of component
 */
const CoverPageContents = () => {

  const [scrollHeight, setScrollHeight] = useState(0);
  const [headerOpacity, setHeaderOpacity] = useState(0);

  useEffect(() => {
    document.title = "Andrew Huggett - Software Engineer";

    window.addEventListener("scroll", () => {
      console.log("scrolling");
      const scrollY = window.scrollY;
      setScrollHeight(scrollY);

      const vH = document.documentElement.clientHeight;
      const minH = 160; // px
      const half = vH / 2;
      if (scrollY <= half) {
        setHeaderOpacity(0);
      } else if (scrollY >= vH - minH) {
        setHeaderOpacity(1);
      } else {
        const range = vH - minH - half;
        const newOpacity = (scrollY - half) / range;
        setHeaderOpacity(newOpacity);
      }
    });
  }, []);

  return (
    <>
      <div className={styles.primary}
        style={{
          "--scroll-height": scrollHeight + "px",
          "--prompt-visibility": (scrollHeight > 0 ? "hidden" : "visible"),
          "--header-opacity": headerOpacity
        } as React.CSSProperties}>
        <h1>Andrew Huggett</h1>
        <h2>Software Engineer</h2>

        <div className={styles["scroll-prompt"]}>
          <p>Scroll for more</p>
          <i className="bi bi-chevron-double-down"></i>
        </div>
      </div>
      <div className={styles["primary-flow"]}></div>
      <div className={styles.about}>
        <h2>About Me</h2>
        <p>
          <i>TODO: This is written by copilot: review & rewrite</i><br />
          Im a software engineer with a passion for creating efficient and
          scalable applications. I enjoy working with modern technologies and
          continuously learning to improve my skills. In my free time, I like to
          explore new programming languages and frameworks, as well as contribute
          to open-source projects.
        </p>
        <Link to="/about" className={styles.link}>
          See full page
          <i className="bi bi-arrow-right-short"></i>
        </Link>
      </div>
      <div className={styles.skills}>
        <h2>Key Skills</h2>
        <div className={styles["skill-wrapper"]}>
          <div className={styles.skill}>
            <LazyLoadImage key="java_intro_icon" src={javaLogo} height={96} className={styles.icon} />
            <h3>Java</h3>
          </div>
          <div className={styles.skill}>
            <LazyLoadImage key="react_intro_icon" src={reactLogo} height={96} className={styles.icon} />
            <h3>React</h3>
          </div>
          <div className={styles.skill}>
            <LazyLoadImage key="ts_intro_icon" src={tsLogo} height={96} className={styles.icon} />
            <h3>TypeScript</h3>
          </div>
        </div>
        <div className={styles["skill-wrapper"]}>
          <div className={styles.skill}>
            <LazyLoadImage key="sass_intro_icon" src={sassLogo} height={48} className={styles.icon} />
            <h3>Sass</h3>
          </div>
          <div className={styles.skill}>
            <LazyLoadImage key="react_intro_icon" src={kotlinLogo} height={48} className={styles.icon} />
            <h3>Kotlin</h3>
          </div>
        </div>
      </div>
      <div className={styles.projects}>
        <h2>Recent projects</h2>
        <div className={styles.project}>
          <LazyLoadImage key="java_intro_icon" src={javaLogo} height={96} className={styles.icon} />
          <h3>My Website</h3>
        </div>
        <div className={styles.project}>
          <LazyLoadImage key="react_intro_icon" src={reactLogo} height={96} className={styles.icon} />
          <h3>Recipes Web App</h3>
        </div>
        <div className={styles.project}>
          <LazyLoadImage key="ts_intro_icon" src={tsLogo} height={96} className={styles.icon} />
          <h3>Field Clashers game</h3>
        </div>
      </div>
    </>
  );
};

export default CoverPageContents;
