import { PropsWithChildren } from "react";
import styles from "./MovingGradientCover.module.scss";

/**
 * Matrix-style cover page.
 *
 * @returns JSX element of component
 */
const MovingGradientCover = (props: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
};

export default MovingGradientCover;
