import SearchResult from './../entity/SearchResult.js';
import CardRecipeBuilder from './../builder/CardRecipeBuilder.js';
import ListBuilder from './../builder/ListBuilder.js';
import SearchParams from './SearchParams.js';
import AlertMessage from './../builder/AlertMessage.js';
import { replaceSpecialChars } from './utils.js';


class SearchService {
	constructor(recipes) {
		this.recipes = recipes;
		this.cardRecipeBuilder = new CardRecipeBuilder();
		this.listBuilder = new ListBuilder();
		this.alertMessage = new AlertMessage();

		// if (this.input.length >= 3) {
				
		// document.getElementById('resultSort').classList.add('showInput');
		// } else {
		// document.getElementById('resultSort').classList.remove('showInput');
		// }

	}

	launch() {
		this.recipesRecovered = new Set();
		this.searchParams = new SearchParams();
	
		if (this.searchParams.isValid()) {
			Array.from(this.recipes).map((recipe) => {
				//array d 'object (3)
				let isRecovered = recipe.isValidSearchInput(this.searchParams.input)
				&& recipe.hasIngredients(this.searchParams.ingredients) 
				if (isRecovered){
					this.recipesRecovered.add(recipe);	
				}
			});
		} else {
			this.recipesRecovered = this.recipes;
		}
		// debut de recherche
		
		// fin de recherche
		this.searchResult = new SearchResult(this.recipesRecovered);
		this.cardRecipeBuilder.refreshCardSection(this.recipesRecovered);
		this.listBuilder.refreshListSection(this.searchResult, this.searchParams);
		this.alertMessage.refresh(this.searchResult);	
	}
	
}
export default SearchService;
