import styles from "./TimelineItem.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { InstanceInTime } from "./Timeline";
import { MouseEventHandler } from "react";

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
};

interface Props {
  instance: InstanceInTime;
  selected: boolean;
  onClick: MouseEventHandler;
}

const TimelineItem = (props: Props): JSX.Element => {
  const pointerClass = "timeline-pointer" + (props.selected ? "-active" : "");
  const iconClass = "timeline-icon" + (props.selected ? "-active" : "");
  return (
    <>
      {!props.selected ? null : (
        <div className={styles["timeline-dates"]}>
          {props.instance.startDate.toLocaleDateString("en-GB", dateOptions)}
          &nbsp; - &nbsp;
          <br />
          {props.instance.endDate
            ? props.instance.endDate.toLocaleDateString("en-GB", dateOptions)
            : "current"}
        </div>
      )}

      <div className={styles["timeline-center"]}>
        <LazyLoadImage
          src={props.instance.iconSrc}
          style={{
            backgroundColor: props.instance.iconBackground,
            padding: props.instance.iconPadding ? "4px" : 0,
          }}
          className={styles[iconClass]}
          onClick={props.onClick}
        />
        <span className={styles[pointerClass]} />
      </div>
    </>
  );
};

export default TimelineItem;
