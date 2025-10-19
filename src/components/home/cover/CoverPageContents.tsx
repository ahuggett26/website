import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { highlightProjects } from "../portfolio/projects/PortfolioProjects";
import { TJava, TKotlin, TReact, TSass, TScala, TTypeScript } from "../portfolio/projects/Technology";
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
          {[new TJava(), new TReact(), new TTypeScript()].map(tech => (
            <div key={`${tech.name}_skill`} className={styles["big-skill"]}>
              <LazyLoadImage key={`${tech.name}_intro_icon`} src={tech.iconSrc} className={styles.icon} />
              <h3>{tech.name}</h3>
            </div>
          ))}
        </div>
        <div className={styles["skill-wrapper"]}>
          {[new TSass(), new TKotlin(), new TScala()].map(tech => (
            <div key={`${tech.name}_skill`} className={styles["small-skill"]}>
              <LazyLoadImage key={`${tech.name}_intro_icon`} src={tech.iconSrc} className={styles.icon} />
              <h3>{tech.name}</h3>
            </div>
          ))}
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
