import styles from "./Header.module.scss";
import HeaderLong from "./HeaderLong";
import HeaderShort from "./HeaderShort";

/**
 * The header to display at the top of each page.
 *
 * Contains navigation links to other pages.
 *
 * @returns JSX element of component
 */
const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles["header-full"]}>
        <HeaderLong />
      </div>
      <div className={styles["header-short"]}>
        <HeaderShort />
      </div>
    </header>
  );
};

export default Header;
