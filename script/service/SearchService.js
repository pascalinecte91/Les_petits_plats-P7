import SearchResult from "./../entity/SearchResult.js";

class SearchService {
  constructor(recipes) {
    this.recipes = recipes;
  }

  launch() {
    this.recipesFiltered = new Set();
    this.recipesFiltered.add([...this.recipes][0]);
    this.recipesFiltered.add([...this.recipes][1]);
    this.recipesFiltered.add([...this.recipes][7]);
/**
*note: 
*@hight   en cours */

    // let searchResult = new SearchResult(this.recipesFiltered);
   
    return searchResult;
  }
}

export default SearchService;