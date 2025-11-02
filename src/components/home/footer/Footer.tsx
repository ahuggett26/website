import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.scss";

/**
 * Footer to display added information/links at the bottom of the page.
 *
 * @returns JSX element of component
 */
const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/contact") {
    return <></>;
  }
  return (
    <>
      <hr />
      <p className={styles["footer-details"]}>
        <Link to="/contact">Contact Me</Link>
      </p>
    </>
  );
};

export default Footer;
