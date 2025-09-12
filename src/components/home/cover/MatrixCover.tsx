import { PropsWithChildren, useState } from "react";
import styles from "./MatrixCover.module.scss";

/**
 * Matrix-style cover page.
 *
 * @returns JSX element of component
 */
const MatrixCover = (props: PropsWithChildren) => {
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
      {props.children}
    </div>
  );
};

export default MatrixCover;
