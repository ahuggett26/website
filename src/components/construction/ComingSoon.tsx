import { useEffect } from "react";
import styles from "./ComingSoon.module.scss";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "ahuggett.uk";
  });

  return (
    <div className={styles["construction-container"]}>
      <div className={styles.info}>
        <h2 className={styles.title}>Coming soon</h2>
        <div className={styles["construction-emoji"]}>🏗️</div>
        <div className={styles.description}>
          Thank you for your interest!
          <br />
          This section of the website is currently in construction but will be
          up soon.
          <br />
        </div>
      </div>
      <div className={styles.background} />
    </div>
  );
};

export default ComingSoon;
