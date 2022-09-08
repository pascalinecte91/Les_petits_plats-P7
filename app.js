import RecipeDataProvider from "./script/dataProvider/RecipeDataProvider.js";
import SearchService from "./script/service/SearchService.js";
import CardRecipeBuilder from "./script/builder/CardRecipeBuilder.js";
import ListBuilder from "./script/builder/ListBuilder.js";
import EventListener from "./script/listener/EventListener.js";


const recipeDataProvider = new RecipeDataProvider();
const searchService = new SearchService(recipeDataProvider.recipes);

const eventListener = new EventListener(searchService);
eventListener.listen();

let result = searchService.launch();
//console.log(result);

new CardRecipeBuilder().refreshCardSection(result.recipes);

new ListBuilder().refreshListSection(result);
