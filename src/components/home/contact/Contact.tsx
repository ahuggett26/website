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
        A proper contact page is on its way!
        <br />
        In the meantime, feel free to send me a message:{" "}
        <a href={`mailto:${email}`}>{email}</a>
        <br />
        <br />
        Note: For spam prevention, I have linked an aliased email address - once
        this page is complete, the alias will be deleted.
      </p>
    </div>
  );
};

export default Contact;
