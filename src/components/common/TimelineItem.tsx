import { MouseEventHandler } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { InstanceInTime } from "./Timeline";
import styles from "./TimelineItem.module.scss";

/** Date formatting for the timeline instances. */
const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
};

interface Props {
  /** The timeline instance represented by this item. */
  instance: InstanceInTime;
  /** True if this timeline instance is currently selected. */
  selected: boolean;
  /** Action to perform when the instance is selected. */
  onClick: MouseEventHandler;
}

/**
 * A clickable timeline item.
 *
 * Representing an instance of time, this item is displayed in the Timeline component
 * and can be clicked to select the timeline instance for viewing.
 *
 * @param props {@link Props}
 * @returns JSX element of component
 */
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
