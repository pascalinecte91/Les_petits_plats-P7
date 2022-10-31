import SearchResult from "./../entity/SearchResult.js";
import CardRecipeBuilder from "./../builder/CardRecipeBuilder.js";
import ListBuilder from "./../builder/ListBuilder.js";
import SearchParams from "./SearchParams.js";
import AlertMessage from "./../builder/AlertMessage.js";
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
		if (this.searchParams.input.length < 3) {
        this.searchParams.input = "";
		}

        //! size  sur un objet SET
        for(let i = 0; i < this.recipes.size ; i++) {
            let isRecovered =
            this.recipes.isValidSearchInput(this.searchParams.input) &&
            this.recipes.hasIngredients(this.searchParams.ingredients) &&
            this.recipes.hasUstensils(this.searchParams.ustensils) &&
            this.recipes.hasAppliances(this.searchParams.appliances);
            if(this.isRecovered(recipe)) {
                this.recipesRecovered.add(recipe);
            }
		}
		// fin de recherche
		this.searchResult = new SearchResult(this.recipesRecovered);
    this.cardRecipeBuilder.refreshCardSection(this.recipesRecovered);
    this.listBuilder.refreshListSection(this.searchResult, this.searchParams);
    this.alertMessage.refresh(this.searchResult);
    if (this.recipesRecovered.size < this.recipes.size) {
        document.getElementById("resultSort").classList.add("showInput");
    } else {
        document.getElementById("resultSort").classList.remove("showInput");
    }
    }
}
export default SearchService;