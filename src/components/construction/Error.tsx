import { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import styles from "./Error.module.scss";

/**
 * Component to display when the app has an error (e.g incorrect URL).
 *
 * @returns JSX element of component
 */
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
 * Header to display in the error component.
 *
 * @param error The error we have encountered.
 * @returns JSX element of header.
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
 * Details about the error that we should show to the user.
 *
 * @param error The error we have encountered.
 * @returns JSX element of error details.
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
