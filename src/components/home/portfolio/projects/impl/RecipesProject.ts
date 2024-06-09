import recipesImage from "../../../../../resources/images/portfolio/recipes-app-cover-image.jpg";
import PortfolioProject from "../PortfolioProject";
import { TBootstrap, TFirebase, TReact } from "../Technology";

class RecipesProject implements PortfolioProject {
  title = "Recipe Catalog";
  shortDesc = "Save, store & re-create your favorite recipes.";
  // longDesc = "TODO: write a full description";
  longDesc = [
    `A recipe book in application form - this web app will enable you to
        record, save and replay your favourite recipes.`,

    `To start, once connected to your firebase project, you can record a chosen recipe
        with the + button in the top left. Multiple inputs are available, including 
        nutritional information, ingredients and cooking times.`,

    `Once saved, you can then find your recipe in the app - there are 2 seperate methods
        with which to find a recipe - you can search via recipe name (using the primary 
        search box), or you can search via ingredient. With the latter search functaionality,
        the "main" ingredients of each recipe will be searched in order to help you find
        recipes that use ingredients you have in stock.`,

    `Finally, once you've decided on the recipes that you want to use, you might want to 
        get the recipe up on your mobile so it is a bit easier to follow in the kitchen -
        to quickly do this, you can scan the QR code on the recipe page to see a mobile-first
        viewing, with only the key information needed to replicate the recipe. If you've
        chosen to reduce (or increase) the amount of servings, this will also be reflected
        in the ingredient counts.`,

    `----`,

    `This app was made to satisfy my own wants for saving & re-making recipes. I was 
        previously storing my favourite recipes as bookmarks in my browser, however I found
        it difficult to find specific recipes (especially given the ingredients I have
        available) and I found it sometimes difficult to replicate the recipes on my phone.`,

    `It was made using React with TypeScript primarily, using Google Firebase for 
        database servies and Bootstrap with CSS for UI styling.`,
  ];
  technologies = [new TReact(), new TFirebase(), new TBootstrap()];
  backgroundImg = recipesImage;
  links = ["https://github.com/ahuggett26/recipes-webapp"];
  lastUpdated = new Date("1 April 2024");
}

export default RecipesProject;
