import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderShort.module.scss";

/**
 * @returns JSX element of component
 */
const HeaderShort = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Creates an link item for the header menu.
   *
   * @param title The title to give the menu item.
   * @param to Where the link should navigate to.
   * @returns A JSX element for the menu link item.
   */
  const menuLink = (title: string, to: string) => (
    <Link
      className={styles["menu-link"]}
      to={to}
      onClick={() => setMenuOpen(false)}
    >
      {title}
    </Link>
  );

  return (
    <span>
      <h1 className={styles.title}>ahuggett.uk</h1>
      <button
        className={styles["menu-button"]}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <i className="bi bi-list"></i>
      </button>
      {menuOpen && (
        <div className={styles.menu}>
          {menuLink("About", "/about")}
          <hr />
          {menuLink("Education", "/education")}
          <hr />
          {menuLink("Experience", "/experience")}
          <hr />
          {menuLink("Portfolio", "/portfolio")}
        </div>
      )}
    </span>
  );
};

export default HeaderShort;
