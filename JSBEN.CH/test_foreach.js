class SearchService {
    constructor(recipes) {
        this.recipes = recipes;
    }

    launch() {
        this.recipesRecovered = new Set(); 
        //! VA INITIALISER UN [] QUI CONTIENDRA LES RESULTATS DE LA RECHERCHE
        this.searchParams = new SearchParams(); 
        //! ELLE INSTANCIE UN OBJET SEARCHPARAM

        if (this.searchParams.isValid()) {
            this.recipes.forEach((recipe) => {
                let isRecovered =
                    recipe.isValidSearchInput(this.searchParams.input) &&
                    recipe.hasIngredients(this.searchParams.ingredients) &&
                    recipe.hasUstensils(this.searchParams.ustensils) &&
                    recipe.hasAppliances(this.searchParams.appliances);
                if (isRecovered) {
                    this.recipesRecovered.add(recipe);
                }
            });
        } else {
            this.recipesRecovered = this.recipes;
        }
    }
}
/********************************************
 ********************************************/
//! INSTANCIATION DU PROVIDER
const recipeDataProvider = new RecipeDataProvider(); 

//! L APPEL DE LA CLASSE SEARCHSERVICE
const searchService = new SearchService(recipeDataProvider.recipes); 

//!L APPEL DE LA METHODE LAUNCH()
searchService.launch(); 
