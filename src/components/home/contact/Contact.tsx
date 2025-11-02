import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cv from "../../../resources/pdf/CV.pdf";
import styles from "./Contact.module.scss";

/**
 * Page containing contact details.
 *
 * @returns JSX element of component
 */
const Contact = () => {
  const navigate = useNavigate();
  const [emailValid, setEmailValid] = useState("<init>");
  const [nameValid, setNameValid] = useState("<init>");
  const [subjectValid, setSubjectValid] = useState("<init>");
  const [messageValid, setMessageValid] = useState("<init>");

  function validateEmail() {
    const email = (document.getElementById("email-inp") as HTMLInputElement);
    setEmailValid(email.reportValidity() ? "" : email.validationMessage);
  }

  function validateName() {
    const name = (document.getElementById("name-inp") as HTMLInputElement);
    setNameValid(name.reportValidity() ? "" : name.validationMessage);
  }

  function validateSubject() {
    const subject = (document.getElementById("subj-inp") as HTMLInputElement);
    setSubjectValid(subject.reportValidity() ? "" : subject.validationMessage);
  }

  function validateMessage() {
    const message = (document.getElementById("message-inp") as HTMLInputElement);
    setMessageValid(message.reportValidity() ? "" : message.validationMessage);
  }

  const getElement = (elemId: string) => {
    const elemVal = (document.getElementById(elemId) as HTMLInputElement).value;
    return encodeURIComponent(elemVal)
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({
        "form-name": "ajh-contact-form",
        name: getElement("name-inp"),
        email: getElement("email-inp"),
        subject: getElement("subj-inp"),
        message: getElement("message-inp"),
      })
    })
      .then(() => {
        alert("Message sent successfully.\n You will be redirected to the home page.");
        navigate("/");
      })
      .catch(() => alert("Something went wrong submitting the form. Please try again later."));

    evt.preventDefault();
  }

  const anyInvalid = [emailValid, nameValid, subjectValid, messageValid]
    .find((val) => val.length > 0) !== undefined;

  const cvTitle = "Andrew Huggett CV";
  return (
    <div className={styles.container}>
      <h2>More information</h2>
      <div>
        Download a public copy of my CV here:{" "}
        <a href={cv} download={cvTitle}>
          {cvTitle}
        </a>
        <p className={styles["cv-last-update"]}>Last updated: 6th August 2025</p>
      </div>
      <h2>Social media</h2>
      <p>I am generally not active on any social media, but feel free to connect via linkedin:</p>
      <a href="https://www.linkedin.com/in/ajhuggett/" target="_blank" rel="noreferrer">linkedin.com/in/ajhuggett</a>
      <h2>Contact me</h2>
      <p>Or send me a message using the below form and I&apos;ll email back</p>
      <form name="ajh-contact-form" className={styles["contact-form"]} onSubmit={handleSubmit} data-netlify={true}>
        <input type="hidden" name="form-name" value="ajh-contact-form" />

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
