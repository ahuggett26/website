import websiteImage from "../../../../../resources/images/portfolio/website-cover-image.jpg";
import PortfolioProject from "../PortfolioProject";
import { TReact, TSass, TTypeScript } from "../Technology";

class WebsiteProject implements PortfolioProject {
  title = "ahuggett.uk";
  shortDesc = "My website - self-made and custom written.";
  longDesc = [
    `Implemented as a longer-form version of a CV, this website is originally
        intended to serve as a central location for viewing my education and experience
        in a simple to view format. Here, I can add in more information allowing my
        CV to be shorter & more impactful.`,

    `In light of that, I have chosen to make my website in as custom a way as
        possible, using React and custom CSS, even in more complex components such as
        the image carousel on the home page, or the timeline components in the
        Education and Experience pages.`,

    `I have designed the website myself, using Figma. I intend for this to be a 
        living website, as such it may get updated, expanded, or even used to host 
        other projects at a later point.`,

    `The website is deployed using Netlify, and hosted at my own custom domain. 
        The code can be viewed on Github using the link below.`,
  ];
  technologies = [new TReact(), new TTypeScript(), new TSass()];
  backgroundImg = websiteImage;
  links = ["https://github.com/ahuggett26/website"];
  lastUpdated = new Date("26 May 2024");
}

export default WebsiteProject;
