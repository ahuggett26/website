import coverImage from "../../../../../resources/images/portfolio/quizzler-cover-image.png";
import PortfolioProject from "../PortfolioProject";
import { TExpress, TNodeJs, TReact, TSqlite, TTypeScript } from "../Technology";

class QuizzlerProject implements PortfolioProject {
  technologies = [
    new TReact(),
    new TTypeScript(),
    new TNodeJs(),
    new TExpress(),
    new TSqlite(),
  ];
  backgroundImg = coverImage;
  title = "Quizzler";
  shortDesc = "Flashcard-style geography quiz app";
  implDetails = `The intention of this project was to work a bit more with nodejs and express - 
    using a TS backend with a react frontend to make a full TS stack. 
    I used npm for package management and trialed using a monorepo for managing the front and backend, 
    including a shared package for common types & functions. 
    I also used the opportunity to work more with different AI tools, trialling Claude, Cursor and Copilot separetely.
    All code was fully reviewed and scrutinised (often being rewritten), but this helped me to understand better how I
    could use these tools to improve overall efficiency.`;
  keyFeatures = [
    "Daily quiz, resetting at 12am UTC, where every user gets same pseudo-random questions",
    "Variety of geography-based quiz questions, including population comparison & flags",
    "Practice mode, generating completely random questions as often as you like",
  ];
  githubLink = "https://github.com/ahuggett26/quizzler";
  deploymentLink = "https://ajh-quizzler.netlify.app/";
  lastUpdated = new Date("28 April 2026");
}

export default QuizzlerProject;
