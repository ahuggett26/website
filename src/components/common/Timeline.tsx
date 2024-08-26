import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./Timeline.module.scss";
import TimelineItem from "./TimelineItem";

/** Object representing an instance for display in the Timeline component */
export class InstanceInTime {
  /** Date that the instance started. */
  startDate: string;
  /** Date that the instance ended. If undefined, it is assumed the instance is ongoing. */
  endDate: string | undefined;
  /** Icon representing the instance. */
  iconSrc: string;
  /** Background color for the icon. If undefined, no background is added. */
  iconBackground: string | undefined;
  /** True if internal padding for the icon should be added. */
  iconPadding: boolean;
  /** Markdown contents to display when the instance is selected. */
  mdContents: string;

  constructor(
    start: string,
    end: string | undefined,
    icon: string,
    iconBack: string | undefined,
    iconPadding: boolean,
    markdown: string,
  ) {
    this.startDate = start;
    this.endDate = end;
    this.iconSrc = icon;
    this.iconBackground = iconBack;
    this.iconPadding = iconPadding;
    this.mdContents = markdown;
  }
}

interface Props {
  /** Instances for display in the timeline component. */
  instances: InstanceInTime[];
}

/**
 * Timeline component.
 *
 * Displays multiple {@link InstanceInTime} objects. Each instance has a navigable button in a left panel,
 * with markdown text in the larger right panel containing text of the currently selected instance.
 *
 * @param props {@link Props}
 * @returns JSX element of component
 */
const Timeline = (props: Props) => {
  const [activeInstance, setActiveInstance] = useState(0);
  const [instanceMd, setInstanceMd] = useState("");

  /**
   * Updates the markdown of the timeline when a new timeline item is displayed.
   *
   * @param instanceNo The index in the timeline that we want the markdown for.
   */
  async function updateMarkdownString(instanceNo: number) {
    const markdown = props.instances[instanceNo].mdContents;
    fetch(markdown)
      .then((res) => res.text())
      .then((text) => setInstanceMd(text));
  }

  useEffect(() => {
    updateMarkdownString(0);
  }, []);

  return (
    <div className={styles["timeline-container"]}>
      <div className={styles["left-controls"]}>
        {props.instances.map((instance, index) => (
          <React.Fragment key={"timeline-item-" + index}>
            <TimelineItem
              instance={instance}
              selected={index === activeInstance}
              onClick={() => {
                updateMarkdownString(index);
                setActiveInstance(index);
              }}
            />
            {index === props.instances.length - 1 ? null : (
              <span className={styles["item-separator"]} />
            )}
          </React.Fragment>
        ))}
      </div>
      <hr />
      <div className={styles["right-pane"]}>
        <ReactMarkdown
          className="markdown"
          children={instanceMd}
          remarkPlugins={[remarkGfm]}
          linkTarget="_blank"
        />
      </div>
    </div>
  );
};

export default Timeline;
