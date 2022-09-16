import SearchResult from './../entity/SearchResult.js';

class SearchService {
	constructor(recipes) {
		this.recipes = recipes;
	}

	launch() {
		this.recipesFiltered = new Set();
		this.recipesFiltered.add([...this.recipes][0]);
		this.recipesFiltered.add([...this.recipes][1]);
		this.recipesFiltered.add([...this.recipes][7]);
		this.recipesFiltered.add([...this.recipes][6]);
		this.recipesFiltered.add([...this.recipes][9]);
		this.recipesFiltered.add([...this.recipes][22]);
		//this.recipesFiltered = this.recipes;

		//this.recipesFiltered = new Set([...this.recipes])
		// return new SearchResult(this.recipesFiltered);

		let searchResult = new SearchResult(this.recipesFiltered);
		//console.log(searchResult);
		

		return searchResult;
	}
}

export default SearchService;