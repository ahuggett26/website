import fieldClashersImage from "../../../../../resources/images/portfolio/field-clashers-cover-image.jpg";
import PortfolioProject from "../PortfolioProject";
import { TCSharp, TUnity } from "../Technology";

class FieldClashersProject implements PortfolioProject {
  title = "Field Clashers";
  shortDesc = "Tactical tic-tac-toe football based auto battler";
  longDesc = [
    `A football-based auto-battler inspired by Super Auto Pets,
        this is a game where a player can field their favourite premier league team
        and employ their own tactics to overcome their opponents.`,

    `It has a simplistic, abstracted design, where players are represented by 
        single dots on a pitch, in formation. A 'match' is split into quarters, within 
        which each team has the ability to score if they can each beat the opposition.
        As with a typical football match, the team who scores the most goals wins.`,

    `There are a few different game modes - in tournament mode, a "cup" scenario
        plays out, where teams are bracketed. Each game must have a winner (a game may 
        end in penalties) and each game will be replaced with a next until only 2 teams
        remain for the final.`,

    `----`,

    `The game was developed with Unity, written in C#. As it was developed to work 
        through Steam, there are many features developed in co-operation with the C# 
        Steamworks API, for example Online Matchmaking and Achievement Collection.`,

    `As with my website, this was custom designed using Figma and ever asset used
        was custom made. All code was likewise written by myself over the course of 
        about a year.`,
  ];
  backgroundImg = fieldClashersImage;
  technologies = [new TUnity(), new TCSharp()];
  links = [
    "https://www.ahuggett.uk/apps/field-clashers",
    "https://store.steampowered.com/app/2204470/Field_Clashers/",
  ];
  lastUpdated = new Date("31 March 2023");
}

export default FieldClashersProject;
