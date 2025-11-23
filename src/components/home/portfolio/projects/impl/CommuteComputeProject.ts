import coverImage from "../../../../../resources/images/portfolio/commute-compute-cover-image.png";
import PortfolioProject from "../PortfolioProject";
import { TMaterialUi, TNextJs, TReact, TTailwindCss, TTypeScript } from "../Technology";

class CommuteComputeProject implements PortfolioProject {
    technologies = [
        new TReact(),
        new TTypeScript(),
        new TMaterialUi(),
        new TNextJs(),
        new TTailwindCss()
    ];
    backgroundImg = coverImage;
    title = "Commute Compute";
    shortDesc = "What could you do if you didn't have a commute?";
    implDetails =
        `I used this project as a chance to learn some new UI technologies.
        With my familiar React/TypeScript backbone, this app uses Material UI components
        and Tailwind CSS for styling with Next.js for building and deploying.`;
    motivation =
        `Frustrated by my long commute, and the time I felt I was losing, 
        I wanted to create a tool that allowed me to visualise over a longer period of time
        what could be done with that time if it were used differently.`;
    keyFeatures = [
        "Visual time context comparison with notable events & activities",
        "Dark and light mode",
        "Calculation across varying input methods"
    ];
    githubLink = "https://github.com/ahuggett26/commute-compute";
    deploymentLink = "https://lustrous-selkie-737b4f.netlify.app/";
    lastUpdated = new Date("23 November 2025");
}

export default CommuteComputeProject;
