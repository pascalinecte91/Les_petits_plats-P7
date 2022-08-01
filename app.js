import RecipeDataProvider from "./script/dataProvider/RecipeDataProvider.js";
import SearchService from "./script/service/SearchService.js";
import BuildCardRecipe from "./script/builder/BuildCardRecipe.js";

const recipeDataProvider = new RecipeDataProvider();
const searchService = new SearchService(recipeDataProvider.recipes);
let result = searchService.launch();
console.log(searchService);
console.log(result);

var cardsHtml = "";
var builder = new BuildCardRecipe();

Array.from(result.recipes).map((recipe) => {
  cardsHtml += builder.getHtmlCard(recipe);
});
document.getElementById("recipesContainer").innerHTML = cardsHtml;
