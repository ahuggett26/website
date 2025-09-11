import { useState } from "react";
import CoverPageContents from "./CoverPageContents";
import MatrixCover from "./MatrixCover";
import MovingGradientCover from "./MovingGradientCover";

/**
 * Page containing contact details.
 *
 * @returns JSX element of component
 */
const CoverPage = () => {
  return (
    <MovingGradientCover>
      <CoverPageContents />
    </MovingGradientCover>
  );
};

export default CoverPage;
