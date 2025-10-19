import { Technology } from "./Technology";

/**
 * Interface containing information required for displaying a portfolio project.
 */
interface PortfolioProject {
  /** Icons representing the key technologies used in the project. */
  technologies: Technology[];
  /** Background image to display for the project. */
  backgroundImg: string;
  /** Project title (or descriptor). */
  title: string;
  /** A short, 1 or 2 line description of the project. */
  shortDesc: string;
  /** 
   * A *slightly* longer description explaining what the project is/how it was made.
   * 
   * Note, full explanations should be found in github readme or at project links.
   */
  longDesc?: string;
  /** Optional details about implementation (e.g libraries/technolgies etc). */
  implDetails?: string;
  /** Optional details about motivation of project. */
  motivation?: string;
  /** A list of key features of the project. */
  keyFeatures: string[];
  /** Optional GitHub link for the project. */
  githubLink?: string;
  /** Optional link for where the project is deployed (e.g. website url or app store/steam link). */
  deploymentLink?: string;
  /** Optional link where extra documentation can be found (likely internal url). */
  docsLink?: string;
  /** Date of last update of the project. */
  lastUpdated: Date;
}

export default PortfolioProject;
