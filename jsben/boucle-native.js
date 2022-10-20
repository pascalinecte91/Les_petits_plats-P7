class SearchService {
  constructor(recipes) {
    this.recipes = recipes;
  }
  launch() {
    this.recipesRecovered = new Set();
    this.searchParams = new SearchParams();

    for (let recipe of [...this.recipes]) {
      if (
        recipe.isValidSearchInput(this.searchParams.input) &&
        recipe.hasIngredients(this.searchParams.ingredients) &&
        recipe.hasUstensils(this.searchParams.ustensils) &&
        recipe.hasAppliances(this.searchParams.appliances)
      ) {
        this.recipesRecovered.add(recipe);
      }
    }

    console.log(this.recipesRecovered);
  }
}

/************************************************************/
/************************************************************/

const recipeDataProvider = new RecipeDataProvider();
const searchService = new SearchService(recipeDataProvider.recipes);
searchService.launch();