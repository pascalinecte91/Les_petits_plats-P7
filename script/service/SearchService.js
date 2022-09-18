import SearchResult from './../entity/SearchResult.js';
import CardRecipeBuilder from './../builder/CardRecipeBuilder.js';
import ListBuilder from './../builder/ListBuilder.js';
import SearchParams from './SearchParams.js';

class SearchService {
	constructor(recipes) {
		this.recipes = recipes;
		this.cardRecipeBuilder = new CardRecipeBuilder();
		this.listBuilder = new ListBuilder();
	}

	launch() {
		this.recipesFiltered = new Set();
		this.searchParams = new SearchParams();

		// debut de recherche
		Array.from(this.recipes).map((recipe) => {
			//console.log(recipe.name);
			//console.log(this.searchParams); array d 'object (3)
			if (
				recipe.isValidSearchInput(this.searchParams.input) &&
				recipe.hasIngredients(this.searchParams.ingredients) &&
				recipe.hasUstensils(this.searchParams.ustensils) &&
				recipe.hasAppliances(this.searchParams.appliances)
			) {
				this.recipesFiltered.add(recipe);
			}
		});

		// fin de recherche

		this.searchResult = new SearchResult(this.recipesFiltered);
		this.cardRecipeBuilder.refreshCardSection(this.searchResult.recipes);
		this.listBuilder.refreshListSection(this.searchResult);
	}
}

export default SearchService;
