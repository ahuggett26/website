import { useState } from "react";
import styles from "./CoverPage.module.scss";

/**
 * Page containing contact details.
 *
 * @returns JSX element of component
 */
const CoverPage = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseX, setMouseX] = useState(-1);
  const [mouseY, setMouseY] = useState(-1);

  return (
    <div
      className={styles.container}
      onMouseMove={(e) => {
        setMouseX(e.pageX);
        setMouseY(e.pageY);
      }}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
    >
      <div
        className={styles.magnifier}
        style={{
          visibility: mouseDown ? "visible" : "hidden",
          top: `${mouseY - 50}px`,
          left: `${mouseX - 50}px`,
        }}
      />
      <div className={styles.primary}>
        <h1>Andrew Huggett</h1>
        <h3>Software Engineer</h3>

        <div className={styles["scroll-prompt"]}>
          <p>Scroll for more</p>
          <i className="bi bi-chevron-double-down"></i>
        </div>
      </div>
      <div className={styles.skills}></div>
    </div>
  );
};

export default CoverPage;
