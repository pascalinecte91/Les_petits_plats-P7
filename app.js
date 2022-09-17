import RecipeDataProvider from "./script/dataProvider/RecipeDataProvider.js";
import SearchService from "./script/service/SearchService.js";
import EventListener from "./script/listener/EventListener.js";

const recipeDataProvider = new RecipeDataProvider();
const searchService = new SearchService(recipeDataProvider.recipes);
const eventListener = new EventListener(searchService);

eventListener.listen();
searchService.launch();


