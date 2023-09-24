import { useEffect } from "react";
import diffblueLogo from "../../../resources/images/experience/diffblue-logo.svg";
import googleLogo from "../../../resources/images/experience/google-logo.svg";
import Timeline, { InstanceInTime } from "../../common/Timeline";
import diffblueMd from "./Diffblue.md";
import styles from "./Experience.module.scss";
import googleMd from "./Google.md";

/**
 * A view for display at /education.
 *
 * @returns JSX element of component
 */
const Experience = () => {
  useEffect(() => {
    document.title = "Experience - ahuggett.uk";
  });

  const educationInstances = [
    new InstanceInTime(
      new Date("Mar 2022"),
      undefined,
      diffblueLogo,
      "#002147",
      false,
      diffblueMd,
    ),
    new InstanceInTime(
      new Date("Oct 2018"),
      new Date("Oct 2021"),
      googleLogo,
      undefined,
      true,
      googleMd,
    ),
  ];
  return (
    <div className={styles["experience-container"]}>
      <Timeline instances={educationInstances} />
    </div>
  );
};

export default Experience;
