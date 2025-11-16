import websiteImage from "../../../../../resources/images/portfolio/website-cover-image.jpg";
import PortfolioProject from "../PortfolioProject";
import { TReact, TSass, TTypeScript } from "../Technology";

class WebsiteProject implements PortfolioProject {
    title = "ahuggett.uk";
    shortDesc = "My website - self-made and custom written.";
    keyFeatures = [
        "Custom-built React & CSS (no bootstrap, no AI)",
        "Responsive design for mobile & desktop",
        "Image carousel with lazy loading",
        "Markdown formatted experience timeline (for easy updates)",
    ];
    motivation =
        `Implemented as a longer-form version of a CV, this website is originally
        intended to serve as a central location for viewing my education and experiences
        in a simple to view format. Here, I can add in more information allowing my
        CV to be shorter & more impactful. My portfolio of projects is also documented here,
        in an easy to view format. This is a living website, so it will get updated, expanded, 
        or may even host other projects at a later point.`;
    implDetails =
        `Designed with Figma and custom made with React and CSS (specifically Sass).
        The website is deployed using Netlify, and hosted at my own custom domain.`;
    technologies = [new TReact(), new TTypeScript(), new TSass()];
    backgroundImg = websiteImage;
    githubLink = "https://github.com/ahuggett26/website";
    lastUpdated = new Date("16 November 2025");
}

export default WebsiteProject;
