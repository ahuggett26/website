import { LazyLoadImage } from "react-lazy-load-image-component";

import githubLogoWhite from "../../../resources/images/portfolio/icons/github-logo-white.svg";
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
        <h2>{props.project.title}</h2>
        <div className={styles.hideable}>
          <LazyLoadImage
            className={styles["main-img"]}
            src={props.project.backgroundImg}
            width={400}
            height={200}
          />
          <p>{props.project.longDesc ?? props.project.shortDesc}</p>
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
        <h3>Key Features:</h3>
        <ul className={styles["key-features"]}>
          {props.project.keyFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        {props.project.motivation && (
          <>
            <h3>Motivation:</h3>
            <p>{props.project.motivation}</p>
          </>
        )}
        {props.project.implDetails && (
          <>
            <h3>Implementation Details:</h3>
            <p>{props.project.implDetails}</p>
          </>
        )}
        {createLinkElement("github-link", <LazyLoadImage src={githubLogoWhite} height={20} />, "View Code on GitHub", props.project.githubLink)}
        {createLinkElement("deployment-link", <i className="bi bi-rocket-takeoff-fill" />, "View Latest Deployment", props.project.deploymentLink)}
        {createLinkElement("docs-link", <i className="bi bi-journal-text" />, "View Documentation", props.project.docsLink)}
      </div>
    </div>
  );
};

/**
 * Function to create a generic link element for the project display.
 * 
 * @param className The class name to apply to the link
 * @param icon The icon to display alongside the link text
 * @param linkText The text to display for the link
 * @param linkUrl The URL the link should point to.
 * @returns A JSX element for the link, or null if no linkUrl is provided
 */
function createLinkElement(className: string, icon: JSX.Element, linkText: string, linkUrl?: string) {
  if (!linkUrl) return null;
  return (
    <div className={styles["link-wrapper"]}>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className={styles[className]}>
        {icon}
        {linkText}
      </a>
    </div>
  );
}

export default FullProjectDisplay;
