import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import styles from "./Error.module.scss";
import { useEffect } from "react";

const Error = () => {
  const error = useRouteError();

  useEffect(() => {
    document.title = "ahuggett.uk";
  });

  return (
    <div className={styles["error-container"]}>
      <div className={styles.information}>
        {getErrorHeader(error)}
        <div className={styles["siren-emoji"]}>🚨</div>
        <div className={styles.description}>
          <div>
            <b>Houston, we have a problem!</b>
          </div>
          <br />
          <div>{getErrorDetails(error)}</div>
        </div>
      </div>
      <div className={styles.background} />
    </div>
  );
};

/**
 *
 * @param error
 */
function getErrorHeader(error: unknown) {
  if (isRouteErrorResponse(error)) {
    return (
      <h1 className={styles.title}>{error.status + " " + error.statusText}</h1>
    );
  }
  console.error("Unknown error found:", error);
  return <h1 className={styles.title}>Error Found</h1>;
}

/**
 *
 * @param error
 */
function getErrorDetails(error: unknown) {
  if (isRouteErrorResponse(error) && error.error) {
    return (
      <>
        <div>This is what we know:</div>
        <code>{error.error.message}</code>
      </>
    );
  }
  return null;
}

export default Error;
