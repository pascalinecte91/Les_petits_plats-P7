import SearchResult from "./../entity/SearchResult.js";
import CardRecipeBuilder from "./../builder/CardRecipeBuilder.js";
import ListBuilder from "./../builder/ListBuilder.js";
import SearchParams from "./SearchParams.js";
import AlertMessage from "./../builder/AlertMessage.js";
import { replaceSpecialChars } from "./utils.js";
import { recipes } from "./../../data/recipes.js";

class SearchService {
    constructor(recipes) {
        this.recipes = recipes;
        this.cardRecipeBuilder = new CardRecipeBuilder();
        this.listBuilder = new ListBuilder();
        this.alertMessage = new AlertMessage();
    }

    launch() {
        this.recipesRecovered = new Set();
        this.searchParams = new SearchParams();
        // debut de recherche
        if (this.searchParams.input.length < 3) {
            this.searchParams.input = "";
            //  caracteres dans l input )
        }
        if (this.searchParams.isValid()) {
            this.recipes.forEach((recipe) => {
                // conditions de type function qui return true / false
                let isRecovered =
                    recipe.isValidSearchInput(this.searchParams.input) &&
                    recipe.hasIngredients(this.searchParams.ingredients) &&
                    recipe.hasUstensils(this.searchParams.ustensils) &&
                    recipe.hasAppliances(this.searchParams.appliances);
                if (isRecovered) {
                // si true = ajoute 
                    this.recipesRecovered.add(recipe);
                }
            });
        } else {
            this.recipesRecovered = this.recipes;
        }
        // fin de recherche
        this.searchResult = new SearchResult(this.recipesRecovered);
        this.cardRecipeBuilder.refreshCardSection(this.recipesRecovered);
        this.listBuilder.refreshListSection(
            this.searchResult,
            this.searchParams
        );
        this.alertMessage.refresh(this.searchResult);
        if (this.recipesRecovered.size < this.recipes.size) {
            document.getElementById("resultSort").classList.add("showInput");
        } else {
            document.getElementById("resultSort").classList.remove("showInput");
        }
    }
}
export default SearchService;
