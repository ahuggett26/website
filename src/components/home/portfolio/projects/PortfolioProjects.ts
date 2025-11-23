import CommuteComputeProject from "./impl/CommuteComputeProject";
import FieldClashersProject from "./impl/FieldClashersProject";
import RecipesProject from "./impl/RecipesProject";
import ShoppingListProject from "./impl/ShoppingListProject";
import SunlightHoursProject from "./impl/SunlightHoursProject";
import WebsiteProject from "./impl/WebsiteProject";
import WordGuesserProject from "./impl/WordGuesserProject";
import PortfolioProject from "./PortfolioProject";

/** All portfolio projects to be displayed in the portfolio page. */
const portfolioProjects: PortfolioProject[] = [];
/**
 * Projects to be highlighted in the highlight preview.
 * Aim for 3 total highlighted projects.
 */
const highlightProjects: PortfolioProject[] = [];

const highlight1 = new WebsiteProject();
portfolioProjects.push(highlight1);
highlightProjects.push(highlight1);

const highlight2 = new RecipesProject();
portfolioProjects.push(highlight2);
highlightProjects.push(highlight2);

const highlight3 = new ShoppingListProject();
portfolioProjects.push(highlight3);
highlightProjects.push(highlight3);

portfolioProjects.push(new CommuteComputeProject());
portfolioProjects.push(new FieldClashersProject());
portfolioProjects.push(new SunlightHoursProject());
portfolioProjects.push(new WordGuesserProject());

export { portfolioProjects, highlightProjects };
