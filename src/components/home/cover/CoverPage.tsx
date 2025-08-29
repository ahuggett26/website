import { useState } from "react";
import CoverPageContents from "./CoverPageContents";
import MatrixCover from "./MatrixCover";

/**
 * Page containing contact details.
 *
 * @returns JSX element of component
 */
const CoverPage = () => {
  return (
    <MatrixCover>
      <CoverPageContents />
    </MatrixCover>
  );
};

export default CoverPage;
