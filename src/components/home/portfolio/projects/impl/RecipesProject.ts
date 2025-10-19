import recipesImage from "../../../../../resources/images/portfolio/recipes-app-cover-image.jpg";
import PortfolioProject from "../PortfolioProject";
import { TBootstrap, TFirebase, TReact } from "../Technology";

class RecipesProject implements PortfolioProject {
  title = "Recipe Catalog";
  shortDesc = "Save, store & re-create your favorite recipes.";
  keyFeatures = [
    "Save favourite recipes in own database",
    "Search recipes by name or ingredients",
    "Generate mobile-friendly recipe view with QR code",
    "View nutritional content for ingredients & recipes",
  ]
  implDetails = 
    `It was made using React with TypeScript primarily, using Google Firebase for 
        database servies and Bootstrap with CSS for UI styling.`;
  motivation = 
    `Previously storing my favourite recipes as bookmarks in my browser - I found
        it difficult to find specific recipes (especially given the ingredients I have
        available) and I found it sometimes difficult to replicate the recipes on my phone.
        This app seeks to solve these issues.`;
  technologies = [new TReact(), new TFirebase(), new TBootstrap()];
  backgroundImg = recipesImage;
  githubLink = "https://github.com/ahuggett26/recipes-webapp";
  lastUpdated = new Date("6 May 2025");
}

export default RecipesProject;
