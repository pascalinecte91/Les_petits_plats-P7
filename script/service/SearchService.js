import SearchResult from './../entity/SearchResult.js';
import CardRecipeBuilder from './../builder/CardRecipeBuilder.js';
import ListBuilder from './../builder/ListBuilder.js';
import SearchParams from './SearchParams.js';
import AlertMessage from './../builder/AlertMessage.js';

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
		Array.from(this.recipes).map((recipe) => {
			//array d 'object (3)
			if (
				recipe.isValidSearchInput(this.searchParams.input) &&
				recipe.hasIngredients(this.searchParams.ingredients) &&
				recipe.hasUstensils(this.searchParams.ustensils) &&
				recipe.hasAppliances(this.searchParams.appliances)
			) {
				this.recipesRecovered.add(recipe);
				//console.log(this.recipesRecovered);
			}
		});
		// fin de recherche
		this.searchResult = new SearchResult(this.recipesRecovered);
		this.cardRecipeBuilder.refreshCardSection(this.searchResult.recipes);
		this.listBuilder.refreshListSection(this.searchResult, this.searchParams);
		this.alertMessage.refresh(this.searchResult);
	}
}
export default SearchService;
