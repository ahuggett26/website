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
      "Mar 2022",
      "Aug 2025",
      diffblueLogo,
      "#002147",
      false,
      diffblueMd,
    ),
    new InstanceInTime(
      "Oct 2018",
      "Oct 2021",
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
