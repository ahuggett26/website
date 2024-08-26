import cv from "../../../resources/pdf/CV.pdf";
import styles from "./Contact.module.scss";

/**
 * Page containing contact details.
 *
 * @returns JSX element of component
 */
const Contact = () => {
  const email = "ahuggett.process316@passinbox.com";
  const cvTitle = "Andrew Huggett CV";
  return (
    <div className={styles.container}>
      <h2>More information</h2>
      <p>
        Download a public copy of my CV here:{" "}
        <a href={cv} download={cvTitle}>
          {cvTitle}
        </a>
      </p>
      <h2>Get in contact</h2>
      <p>
        You can email me at the following address:{" "}
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        <i>
          Note: I have linked an email alias for potential spam protection.
          Emails will be sent via the alias to my real address.
        </i>
      </p>
    </div>
  );
};

export default Contact;
