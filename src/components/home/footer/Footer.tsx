import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

/**
 * Footer to display added information/links at the bottom of the page.
 *
 * @returns JSX element of component
 */
const Footer = () => {
  return (
    <>
      <hr />
      <p className={styles["footer-details"]}>
        <Link to="/contact">Click here</Link> for my condensed CV & contact
        details
      </p>
    </>
  );
};

export default Footer;
