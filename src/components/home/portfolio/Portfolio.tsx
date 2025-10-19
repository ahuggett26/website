import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FullProjectDisplay from "./FullProjectDisplay";
import HighlightedProject from "./HighlightedProject";
import styles from "./Portfolio.module.scss";
import PortfolioProject from "./projects/PortfolioProject";
import { highlightProjects, portfolioProjects } from "./projects/PortfolioProjects";

/**
 * Portfolio page containing completed projects to show off.
 *
 * @returns JSX element of portfolio
 */
const Portfolio = () => {
  const highlights = highlightProjects;
  const [focussedProject, setFocussedProject] = useState<PortfolioProject>();
  const [keyHighlight, setKeyHighlight] = useState(0);

  const iterateKeyHighlight = () => {
    setKeyHighlight((prev) => (prev + 1 >= highlights.length ? 0 : prev + 1));
  };

  return (
    <div className={styles.portfolio}>
      <div className={styles.highlights}>
        {highlights.map((project, index) => (
          <HighlightedProject
            key={project.title}
            project={project}
            isHighlighted={index === keyHighlight}
            onClick={() => setFocussedProject(project)}
          />
        ))}
      </div>
      <div className={styles["progress-bar"]}>
        <div
          className={styles["progress-bar-active"]}
          onAnimationIteration={iterateKeyHighlight}
        ></div>
      </div>

      <div className={styles["all-projects"]}>
        <h3>All Projects</h3>
        <div className={styles.grid}>
          {portfolioProjects
            .sort((a, b) => b.lastUpdated.getTime() - a.lastUpdated.getTime())
            .map((project) => (
              <div key={project.title} onClick={() => setFocussedProject(project)} className={styles.project}>
                <LazyLoadImage src={project.backgroundImg} height={80} />
                <h4>{project.title}</h4>
                <p>{project.shortDesc}</p>
              </div>
            ))}
        </div>
      </div>

      <div className={styles["single-full-screen"]}>
        <FullProjectDisplay
          project={focussedProject}
          closeProject={() => setFocussedProject(undefined)}
        />
      </div>
    </div>
  );
};

export default Portfolio;
