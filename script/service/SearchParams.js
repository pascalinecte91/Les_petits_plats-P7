
import SearchResult from './../entity/SearchResult.js';

class SearchParams {
	constructor(recipesSelected) {
	
		this.imputIngredient = new Set();
		this.inputUstensil = new Set();
		this.inputAppliance = new Set();
        this.inputSearchAll = document.getElementById('inputSearch')
	
		Array.from(recipesFiltered).map((recipe) => {
			//console.log(recipesFiltered);
			Array.from(recipe.ingredients).map((ingredient) => {
				this.ingredients.add(ingredient.ingredient);
				//console.log(ingredient.ingredient);
			});
			Array.from(recipe.ustensils).map((ustensil) => {
				this.ustensils.add(ustensil);
				//console.log(ustensil);
			});
			Array.from(recipe.appliances).map((appliance) => {
				this.appliances.add(appliance);
				//console.log(appliance);
			});
		});
	}
}

export default SearchResult;
