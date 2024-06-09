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
  /** A longer description explaining what the project is/how it was made. */
  longDesc: string[];
  /** Related links for more about the project. */
  links: string[];
  /** Date of last update of the project. */
  lastUpdated: Date;
}

export default PortfolioProject;
