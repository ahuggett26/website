import coverImage from "../../../../../resources/images/portfolio/sunlight-hours-cover-image.png";
import PortfolioProject from "../PortfolioProject";
import { TScala } from "../Technology";

class SunlightHoursProject implements PortfolioProject {
    technologies = [new TScala()]
    backgroundImg = coverImage;
    title = "Sunlight Hours";
    shortDesc = "Calculate sunlight hours for any location";
    implDetails =
        `A command line interface (CLI) tool written in Scala. It utilises
        a number of open APIs, most notably geolocation, to fetch sunrise and sunset times. 
        Then computes the total sunlight hours accordingly.`;
    keyFeatures = [
        "Visual display of sunlight hours in CLI",
        "Find sunlight hours for your current location",
        "Translate sunlight hours for different time zones",
        "Shows current time in relation to sunrise/sunset times",
    ];
    githubLink = "https://github.com/ahuggett26/sunHours";
    lastUpdated = new Date("26 September 2025");
}

export default SunlightHoursProject;