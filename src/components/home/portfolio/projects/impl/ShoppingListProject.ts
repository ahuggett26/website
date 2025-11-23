import coverImage from "../../../../../resources/images/portfolio/shopping-list-cover-image.png";
import PortfolioProject from "../PortfolioProject";
import { TAndroid, TJava, TKotlin } from "../Technology";

class ShoppingListProject implements PortfolioProject {
    technologies = [
        new TAndroid(),
        new TJava(),
        new TKotlin()
    ];
    backgroundImg = coverImage;
    title = "Shopping List";
    shortDesc = "A simple and clean shopping list app for Android";
    implDetails =
        `This is an Android application built with Android Studio, using Java and Kotlin.
        The UI is built with XML fragments and drawables. Data persistence is handled
        with a local Mongodb database via RealmDB.`;
    keyFeatures = [
        "Auto-complete suggestions based on previous lists",
        "Drag and drop to reorder items",
        "Tap to cross off items once shop is started",
        "Ability to save prices once shop is complete to track spending over time"
    ];
    githubLink = "https://github.com/ahuggett26/ShoppingList";
    lastUpdated = new Date("28 October 2023");
}

export default ShoppingListProject;
