import React, { useEffect, useState } from "react";
import styles from "./Timeline.module.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TimelineItem from "./TimelineItem";

export class InstanceInTime {
  startDate: Date;
  endDate: Date | undefined;
  iconSrc: string;
  iconBackground: string | undefined;
  iconPadding: boolean;
  mdContents: string;

  constructor(
    start: Date,
    end: Date | undefined,
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
  instances: InstanceInTime[];
}

const Timeline = (props: Props) => {
  const [activeInstance, setActiveInstance] = useState(0);
  const [instanceMd, setInstanceMd] = useState("");

  /**
   *
   * @param instanceNo
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
