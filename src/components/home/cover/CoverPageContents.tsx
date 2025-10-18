import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import javaLogo from "../../../resources/images/portfolio/icons/java-logo.svg";
import kotlinLogo from "../../../resources/images/portfolio/icons/kotlin-logo.png";
import reactLogo from "../../../resources/images/portfolio/icons/react-logo.svg";
import sassLogo from "../../../resources/images/portfolio/icons/sass-logo-64.png";
import tsLogo from "../../../resources/images/portfolio/icons/ts-logo-128.png";
import { highlightProjects } from "../portfolio/projects/PortfolioProjects";
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
          I am a software engineer with a proficiency for Java and React with TypeScript.
          <br />My experience includes roles at Google, Diffblue (an AI startup) and FlexTrade (finance). I work as a full-stack developer, leaning towards front-end.
          <br />I am self-taught, but backed with a degree in Digital & Technology Solutions.
        </p>
        <Link to="/about" className={styles.navlink}>
          See full website
          <i className="bi bi-arrow-right-short"></i>
        </Link>
      </div>
      <div className={styles.skills}>
        <h2>Key Skills</h2>
        <div className={styles["skill-wrapper"]}>
          <div className={styles.skill}>
            <LazyLoadImage key="java_intro_icon" src={javaLogo} className={styles.icon} />
            <h3>Java</h3>
          </div>
          <div className={styles.skill}>
            <LazyLoadImage key="react_intro_icon" src={reactLogo} className={styles.icon} />
            <h3>React</h3>
          </div>
          <div className={styles.skill}>
            <LazyLoadImage key="ts_intro_icon" src={tsLogo} className={styles.icon} />
            <h3>TypeScript</h3>
          </div>
        </div>
        <div className={styles["skill-wrapper"]}>
          <div className={styles.skill}>
            <LazyLoadImage key="sass_intro_icon" src={sassLogo} className={styles.miniicon} />
            <h3>Sass</h3>
          </div>
          <div className={styles.skill}>
            <LazyLoadImage key="react_intro_icon" src={kotlinLogo} className={styles.miniicon} />
            <h3>Kotlin</h3>
          </div>
        </div>
      </div>
      <div className={styles.projects}>
        <h2>Recent projects</h2>
        <div className={styles["project-wrapper"]}>
          {highlightProjects.map((project) => (
            <div key={project.title} className={styles.project}>
              <LazyLoadImage key={project.title + "_icon"} src={project.backgroundImg} height={96} className={styles.icon} />
              <h3>{project.title}</h3>
              <p>{project.shortDesc}</p>
            </div>
          ))}
        </div>
        <Link to="/portfolio" className={styles.navlink}>
          See full portfolio
          <i className="bi bi-arrow-right-short"></i>
        </Link>
      </div>
    </>
  );
};

export default CoverPageContents;
