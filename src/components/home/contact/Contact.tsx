import cv from "../../../resources/pdf/CV.pdf";
import styles from "./Contact.module.scss";

/**
 * Page containing contact details.
 *
 * @returns JSX element of component
 */
const Contact = () => {
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
      <h2>Social media</h2>
      <p>I am generally not active on any social media, but feel free to connect via linkedin:</p>
      <a href="https://www.linkedin.com/in/ajhuggett/" target="_blank" rel="noreferrer">linkedin.com/in/ajhuggett</a>
      <h2>Contact me</h2>
      <p>Or send me a message using the below form and I&apos;ll email back</p>
      <form name="contact" className={styles["contact-form"]} method="POST" data-netlify="true">
        <label htmlFor="email">Your Name</label>
        <input type="text" name="name" />

        <label htmlFor="email">Your Email</label>
        <input type="email" name="email" />

        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" />

        <label htmlFor="message">Message</label>
        <textarea name="message"></textarea>

        <button type="submit" className={styles.submit}>Send</button>
      </form>
      <p className={styles.ps}>P.S please don&apos;t try sell me your services for improving my website or SEO - I&apos;m not interested!</p>
    </div>
  );
};

export default Contact;
