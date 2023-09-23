import { ReactNode, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./FieldClashersHome.module.scss";
import index from "./index.md";

const FieldClashersHome = () => {
  const [indexMarkdown, setIndexMarkdown] = useState("");

  useEffect(() => {
    document.title = "About Field Clashers";
    fetch(index)
      .then((res) => res.text())
      .then((text) => setIndexMarkdown(text));
  }, []);

  return (
    <div className={styles["field-clashers-home-background"]}>
      <ReactMarkdown
        className={styles.markdown}
        children={indexMarkdown}
        remarkPlugins={[remarkGfm]}
        components={{
          // Disable eslint - it's complaining that the heading doesn't have content, which isn't true
          h2: ({ ...props }) => (
            // eslint-disable-next-line
            <h2 id={getIdFromReactNode(props.children[0])} {...props} />
          ),
          h3: ({ ...props }) => (
            // eslint-disable-next-line
            <h3 id={getIdFromReactNode(props.children[0])} {...props} />
          ),
        }}
      />
    </div>
  );

  /**
   *
   * @param node
   */
  function getIdFromReactNode(node: ReactNode): string {
    if (!node) return "";
    return node
      .toString()
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("&", "");
  }
};

export default FieldClashersHome;
