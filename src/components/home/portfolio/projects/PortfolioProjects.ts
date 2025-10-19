import FieldClashersProject from "./impl/FieldClashersProject";
import RecipesProject from "./impl/RecipesProject";
import SunlightHoursProject from "./impl/SunlightHoursProject";
import WebsiteProject from "./impl/WebsiteProject";
import PortfolioProject from "./PortfolioProject";

/** All portfolio projects to be displayed in the portfolio page. */
const portfolioProjects: PortfolioProject[] = [];
/**
 * Projects to be highlighted in the highlight preview.
 * Aim for 3 total highlighted projects.
 */
const highlightProjects: PortfolioProject[] = [];

const website = new WebsiteProject();
portfolioProjects.push(website);
highlightProjects.push(website);

const recipes = new RecipesProject();
portfolioProjects.push(recipes);
highlightProjects.push(recipes);

const fieldClashers = new FieldClashersProject();
portfolioProjects.push(fieldClashers);
highlightProjects.push(fieldClashers);

portfolioProjects.push(new SunlightHoursProject());

export { portfolioProjects, highlightProjects };
