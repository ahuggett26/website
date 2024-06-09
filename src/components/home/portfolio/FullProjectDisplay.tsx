import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./FullProjectDisplay.module.scss";
import PortfolioProject from "./projects/PortfolioProject";

interface Properties {
  /** The portfolio project to show in this diplay. */
  project?: PortfolioProject;
  /** Function to perform on 'close' action. */
  closeProject: () => void;
}

/**
 * Display to show off a portfolio project in a larger screen.
 *
 * This should be displayed when a viewer clicks on a portfolio project,
 * i.e they want to read more about it.
 *
 * @param props {@link Properties}
 * @returns JSX element of Full Project Display
 */
const FullProjectDisplay = (props: Properties) => {
  if (!props.project) {
    return null;
  }
  return (
    <div className={styles.background} onClick={props.closeProject}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-button"]} onClick={props.closeProject}>
          <i className="bi bi-x-circle"></i>
        </button>
        <h3>{props.project.title}</h3>
        <div className={styles.hideable}>
          <p>{props.project.shortDesc}</p>
          <LazyLoadImage
            className={styles["main-img"]}
            src={props.project.backgroundImg}
            width={400}
            height={200}
          />
        </div>
        <p>
          Last updated:{" "}
          {props.project.lastUpdated.toLocaleDateString("en-GB", {
            month: "long",
            year: "numeric",
          })}
        </p>
        <div className={`${styles.technologies} ${styles.hideable}`}>
          <p>Key technologies:</p>
          <ul className={styles["tech-list"]}>
            {props.project.technologies.map((tech) => (
              <li
                key={props.project?.title + tech.name}
                className={styles.technology}
              >
                <LazyLoadImage
                  src={tech.iconSrc}
                  className={styles["tech-icon"]}
                  height={20}
                />
                <span className={styles["tech-name"]}>{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["short-technologies"]}>
          Technologies:{" "}
          {props.project.technologies.map((tech) => tech.name).join(", ")}
        </div>
        <div className={styles["long-desc"]}>
          {props.project.longDesc.map((desc, i) => (
            <p key={`para-${i}`}>{desc}</p>
          ))}
        </div>
        {props.project.links.length > 0 && (
          <div className={styles.links}>
            <hr />
            <p>See also:</p>
            <ul className={styles["link-list"]}>
              {props.project.links.map((link) => (
                <li key={link}>
                  <a href={link}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullProjectDisplay;
