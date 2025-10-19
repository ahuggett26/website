import fieldClashersImage from "../../../../../resources/images/portfolio/field-clashers-cover-image.jpg";
import PortfolioProject from "../PortfolioProject";
import { TCSharp, TUnity } from "../Technology";

class FieldClashersProject implements PortfolioProject {
  title = "Field Clashers";
  shortDesc = "Tactical football based auto battler game";
  longDesc =
    `A football-based auto-battler inspired by Super Auto Pets,
        this is a game where a player can field their favourite team
        and employ their own tactics to overcome their opponents.`;
  keyFeatures = [
    `Multiple game modes - play quick matches or enter tournaments`,
    `Online multiplayer - challenge friends and players worldwide`,
    `Custom team formation & setup`,
    `Local pool of 20 teams and 100+ unique players`,
  ]
  implDetails =
    `The game was developed with Unity, written in C#. 
        There is a local SQL Lite database, storing player stats and team info.
        Deployed through Steam, I developed utilised the C# Steamworks API for some features, 
        for example Online Matchmaking and Achievements.
        This was custom designed using Figma and every asset used was custom made.`;
  backgroundImg = fieldClashersImage;
  technologies = [new TUnity(), new TCSharp()];
  deploymentLink = "https://store.steampowered.com/app/2204470/Field_Clashers/";
  docsLink = "https://www.ahuggett.uk/apps/field-clashers";
  lastUpdated = new Date("31 March 2023");
}

export default FieldClashersProject;
