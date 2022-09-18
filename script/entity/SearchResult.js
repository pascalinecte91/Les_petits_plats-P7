

class SearchResult {
	constructor(recipesFiltered) {
	
		this.recipes = recipesFiltered;
		this.ingredients = new Set();
		this.ustensils = new Set();
		this.appliances = new Set();
	
		//? MAP va remplir un nouv array avec les resultats de l'appel

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
