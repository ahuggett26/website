import { useState } from "react";
import cv from "../../../resources/pdf/CV.pdf";
import styles from "./Contact.module.scss";

/**
 * Page containing contact details.
 *
 * @returns JSX element of component
 */
const Contact = () => {
  const [emailValid, setEmailValid] = useState("<init>");
  const [nameValid, setNameValid] = useState("<init>");
  const [subjectValid, setSubjectValid] = useState("<init>");
  const [messageValid, setMessageValid] = useState("<init>");

  function validateEmail() {
    console.log("validating email");
    const email = (document.getElementById("email-inp") as HTMLInputElement);
    setEmailValid(email.reportValidity() ? "" : email.validationMessage);
  }

  function validateName() {
    console.log("validating name");
    const name = (document.getElementById("name-inp") as HTMLInputElement);
    setNameValid(name.reportValidity() ? "" : name.validationMessage);
  }

  function validateSubject() {
    console.log("validating subject");
    const subject = (document.getElementById("subj-inp") as HTMLInputElement);
    setSubjectValid(subject.reportValidity() ? "" : subject.validationMessage);
  }

  function validateMessage() {
    console.log("validating email");
    const message = (document.getElementById("message-inp") as HTMLInputElement);
    setMessageValid(message.reportValidity() ? "" : message.validationMessage);
  }

  const anyInvalid = [emailValid, nameValid, subjectValid, messageValid]
    .find((val) => val.length > 0) !== undefined;

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
        <label htmlFor="name">Your Name</label>
        <input id="name-inp" type="text" name="name" required maxLength={50} onChange={validateName} />
        {nameValid.length > 0 && nameValid !== "<init>" && <p className={styles.warning}>{nameValid}</p>}

        <label htmlFor="email">Your Email</label>
        <input id="email-inp" type="email" name="email" required onChange={validateEmail} />
        {emailValid.length > 0 && emailValid !== "<init>" && <p className={styles.warning}>{emailValid}</p>}

        <label htmlFor="subject">Subject</label>
        <input id="subj-inp" type="text" name="subject" required maxLength={50} onChange={validateSubject} />
        {subjectValid.length > 0 && subjectValid !== "<init>" && <p className={styles.warning}>{subjectValid}</p>}

        <label htmlFor="message">Message</label>
        <textarea id="message-inp" name="message" spellCheck required maxLength={500} onChange={validateMessage}></textarea>
        <p className={styles["char-limit-prompt"]}>500 chars max</p>
        {messageValid.length > 0 && messageValid !== "<init>" && <p className={styles.warning}>{messageValid}</p>}

        <button disabled={anyInvalid} type="submit" className={styles.submit}>Send</button>
      </form>
      <p className={styles.ps}>P.S please don&apos;t try sell me your services for improving my website or SEO - I&apos;m not interested!</p>
    </div>
  );
};

export default Contact;
