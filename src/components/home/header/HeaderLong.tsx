import { Link } from "react-router-dom";
import styles from "./HeaderLong.module.scss";

/**
 * The header to display at the top of each page.
 *
 * Contains navigation links to other pages.
 *
 * @returns JSX element of component
 */
const HeaderLong = () => {
  return (
    <>
      <h1 className={styles.title}>Andrew Huggett</h1>
      <nav className={styles["tabs-holder"]}>
        <ul className={styles.tabs}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderLong;
