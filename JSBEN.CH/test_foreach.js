
/** le Setup , 
 *  le Boilerplate
 *  instancier SearchService
 */

//* besoin d'un objet Recipes
//* et de la methode launch() qui va :

class SearchService {
    constructor(recipes) {
        this.recipes = recipes;
    }

    launch() {
        this.recipesRecovered = new Set();
        //* va intialiser un []  vide qui contiendra  les resultats de la recherche
        this.searchParams = new SearchParams(); 
        //* instancie un objet SearchParam

        //* les conditions de type function:
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
/****************** SECTION *****************
 ********************************************/
//! l'instanciation du RecipeDataProvider
const recipeDataProvider = new RecipeDataProvider(); 

//! l'appel de la classe SearchService
const searchService = new SearchService(recipeDataProvider.recipes); 

//!l'appel de la méthode launch()
searchService.launch(); 
