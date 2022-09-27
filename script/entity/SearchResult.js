/**
 *? class qui retourne sous forme d' Objet Set
 */

class SearchResult {
	constructor(recipesRecovered) {
		this.recipes = recipesRecovered;
		this.ingredients = new Set();
		this.ustensils = new Set();
		this.appliances = new Set();

		Array.from(recipesRecovered).map((recipe) => {
			Array.from(recipe.ingredients).map((ingredient) => {
				this.ingredients.add(ingredient.toLowerCase());
				//console.log(ingredient);
			});
			Array.from(recipe.ustensils).map((ustensil) => {
				this.ustensils.add(ustensil.toLowerCase());
				//console.log(ustensil);
			});
			Array.from(recipe.appliances).map((appliance) => {
				this.appliances.add(appliance.toLowerCase());
				//console.log(appliance);
			});
		});
	}
}
export default SearchResult;
