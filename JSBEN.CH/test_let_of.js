class SearchService {
    constructor(recipes) {
        this.recipes = recipes;
    }

    launch() {
        //! va initialiser un array vide
        //! qui apres, contiendra le resultat de la recherche
        this.recipesRecovered = new Set();
        //! instancie  un objet searchParams
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
    }
}
/****************************************
 ****************************************/
//! INSTANCIATION DU PROVIDER
const recipeDataProvider = new RecipeDataProvider(); 

//! L APPEL DE LA CLASSE SEARCHSERVICE
const searchService = new SearchService(recipeDataProvider.recipes); 

//!L APPEL DE LA METHODE LAUNCH()
searchService.launch(); 
