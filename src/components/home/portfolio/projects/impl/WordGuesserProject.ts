import coverImage from "../../../../../resources/images/portfolio/word-guesser-cover-image.png";
import PortfolioProject from "../PortfolioProject";
import { TScala, TSwing } from "../Technology";

class WordGuesserProject implements PortfolioProject {
    technologies = [new TScala(), new TSwing()];
    backgroundImg = coverImage;
    title = "Word Guesser";
    shortDesc = "Guess the word from its definitions";
    implDetails =
        `A desktop application written in Scala using the Swing framework for the GUI.
        It leverages a word dictionary taken from the built-in Unix words.txt, pulls a 
        random word to guess and calls the Free Dictionary API to fetch word definitions.`;
    keyFeatures = [
        "Hangman-style word guess display",
        "Definitions displayed in helpful sidebar, with the word itself obfuscated",
        "Tracks number of attempts and words guessed"
    ];
    githubLink = "https://github.com/ahuggett26/wordGuess";
    lastUpdated = new Date("26 September 2025");
}

export default WordGuesserProject;
