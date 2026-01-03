import coverImage from "../../../../../resources/images/portfolio/habit-tracker-cover-image.png";
import PortfolioProject from "../PortfolioProject";
import { TAndroid, TKotlin } from "../Technology";

class HabitTrackerProject implements PortfolioProject {
    technologies = [
        new TAndroid(),
        new TKotlin(),
    ];
    backgroundImg = coverImage;
    title = "Habit Tracker";
    shortDesc = "Form habits that stick with effective tracking";
    implDetails =
        `Since I have an Android device, I focussed on Android development. I built the UI using
        Jetpack Compose, with the logic written in Kotlin. Data is stored locally using a Room Database.`;
    motivation =
        `As the new year approached, resolutions tend to come up. While I personally do not
        believe in making resolutions, I did have a few activities that I wanted to do, but was 
        struggling to consistently complete within my daily routine. Therefore, to try and make 
        these tasks habitual, I wanted to build an app that can help keep me accountable, give me
        motivation and remind me to keep going.`;
    keyFeatures = [
        "Simple and clear UI",
        "Configure schedule for each habit",
        "Daily overview of habits to complete",
        "Streak tracking to motivate consistency"
    ];
    githubLink = "https://github.com/ahuggett26/HabitTracker";
    lastUpdated = new Date("03 January 2026");
}

export default HabitTrackerProject;
