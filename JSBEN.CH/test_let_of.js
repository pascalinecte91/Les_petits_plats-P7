class SearchService {
    constructor(recipes) {
        this.recipes = recipes;
    }

    launch() {
        //! va initialiser un [] vide
        //! qui contiendra le resultat de la recherche
        this.recipesRecovered = new Set();
        //! instancie  un objet searchParams
        this.searchParams = new SearchParams();

        for (let recipe of this.recipes) {
            if (
                recipe.isValidSearchInput(this.searchParams.input) &&
                recipe.hasIngredients(this.searchParams.ingredients) &&
                recipe.hasUstensils(this.searchParams.ustensils) &&
                recipe.hasAppliances(this.searchParams.appliances)
            ) {
                this.recipesRecovered.add(recipe);
            }
        }
    }
}
/**************** SECTION ***************
 ****************************************/
//! l'instanciation du RecipeDataProvider
const recipeDataProvider = new RecipeDataProvider(); 

//! l'appel de la classe SearchService
const searchService = new SearchService(recipeDataProvider.recipes); 

//!l'appel de la méthode launch()
searchService.launch(); 
