import { ReactNode, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./FieldClashersHome.module.scss";
import index from "./index.md";

/**
 * Component for the Field Clashers documentation.
 *
 * @returns JSX element of the component
 */
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
            <h2 id={getHeaderId(props.children[0])} {...props} />
          ),
          h3: ({ ...props }) => (
            // eslint-disable-next-line
            <h3 id={getHeaderId(props.children[0])} {...props} />
          ),
        }}
      />
    </div>
  );

  /**
   * Generates a valid id for the header represented by the node.
   *
   * This id is required to enable navigation to a header via ..url#header-name.
   *
   * @param node
   * @returns The id for the given header
   */
  function getHeaderId(node: ReactNode): string {
    if (!node) return "";
    return node
      .toString()
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("&", "");
  }
};

export default FieldClashersHome;
