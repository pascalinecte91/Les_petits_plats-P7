class SearchService {
  constructor(recipes) {
    this.recipes = recipes;
  }

  launch() {
    this.recipesRecovered = new Set();
    this.searchParams = new SearchParams();

    Array.from(this.recipes).map((recipe) => {
      let isRecovered =
        recipe.isValidSearchInput(this.searchParams.input) &&
        recipe.hasIngredients(this.searchParams.ingredients) &&
        recipe.hasUstensils(this.searchParams.ustensils) &&
        recipe.hasAppliances(this.searchParams.appliances);
      if (isRecovered) {
        this.recipesRecovered.add(recipe);
      }
    });
    console.log(this.recipesRecovered);
  }
}

/************************************************************/
/************************************************************/

const recipeDataProvider = new RecipeDataProvider();
const searchService = new SearchService(recipeDataProvider.recipes);
searchService.launch();