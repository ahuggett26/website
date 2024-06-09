import { useState } from "react";
import FullProjectDisplay from "./FullProjectDisplay";
import HighlightedProject from "./HighlightedProject";
import styles from "./Portfolio.module.scss";
import PortfolioProject from "./projects/PortfolioProject";
import { highlightProjects } from "./projects/PortfolioProjects";

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
