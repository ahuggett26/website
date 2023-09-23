import { useEffect } from "react";
import Timeline, { InstanceInTime } from "../../common/Timeline";
import diffblueLogo from "../../../resources/images/experience/diffblue-logo.svg";
import googleLogo from "../../../resources/images/experience/google-logo.svg";
import diffblueMd from "./Diffblue.md";
import googleMd from "./Google.md";
import styles from "./Experience.module.scss";

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
