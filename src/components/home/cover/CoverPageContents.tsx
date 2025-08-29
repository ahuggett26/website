import React from "react";
import styles from "./CoverPageContents.module.scss";

/**
 * General contents for the cover page 
 *
 * @returns JSX element of component
 */
const CoverPageContents = () => {
  return (
    <>
      <div className={styles.primary}>
        <h1>Andrew Huggett</h1>
        <h3>Software Engineer</h3>

        <div className={styles["scroll-prompt"]}>
          <p>Scroll for more</p>
          <i className="bi bi-chevron-double-down"></i>
        </div>
      </div>
      <div className={styles.skills}></div>
    </>
  );
};

export default CoverPageContents;
