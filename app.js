import RecipeDataProvider from "./script/dataProvider/RecipeDataProvider.js";
import SearchService from "./script/service/SearchService.js";

const recipeDataProvider = new RecipeDataProvider();
const searchService = new SearchService(recipeDataProvider.recipes);
let result = searchService.launch();
//console.log(searchService);
//console.log(result);

Array.from(result.recipes).map((recipe) => {
  document.getElementById('recipesContainer').innerHTML += recipe.name;
});