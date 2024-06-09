import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./HighlightedProject.module.scss";
import PortfolioProject from "./projects/PortfolioProject";

interface Properties {
  /** Portfolio Project to be 'highlighted' */
  project: PortfolioProject;
  /** True if this portfolio project should be 'highlighted', with a larger image. */
  isHighlighted: boolean;
  /** Function to perform on click of the portfolio project highlight. */
  onClick: () => void;
}

/**
 * A view of the portfolio project in a highlighted preview display.
 *
 * @param props {@link Properties}
 * @returns JSX element of highlighted portfolio project
 */
const HighlightedProject = (props: Properties) => {
  const primaryDisplay = props.isHighlighted
    ? styles["primary-highlight"]
    : undefined;
  return (
    <>
      <div className={`${styles["dot-display"]} ${primaryDisplay}`}></div>
      <div
        className={`${styles["highlight-display"]} ${primaryDisplay}`}
        onClick={props.onClick}
      >
        <LazyLoadImage
          src={props.project.backgroundImg}
          className={styles.img}
        />
        {!props.isHighlighted && (
          <h3 className={styles.title}>{props.project.title}</h3>
        )}
        {props.isHighlighted && (
          <>
            <h2 className={styles.title}>{props.project.title}</h2>
            <div className={styles["short-desc"]}>
              {props.project.shortDesc}
            </div>
            {props.project.technologies.length > 0 && (
              <div className={styles["tech-icons"]}>
                {props.project.technologies.map((tech, index) => (
                  <LazyLoadImage
                    key={props.project.title + "_icon_" + index}
                    src={tech.iconSrc}
                    height={24}
                    className={styles["icon"]}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default HighlightedProject;
