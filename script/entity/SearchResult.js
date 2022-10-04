/*
 ** array.from  fait un tableau à partir d'un objet iterable
 ** met les ingredients ou ustensils ou appl
 */

class SearchResult {
	constructor(recipesRecovered) {
		this.recipes = recipesRecovered;
		this.ingredients = new Set();
		this.ustensils = new Set();
		this.appliances = new Set();
console.log(this);
		Array.from(recipesRecovered).map((recipe) => {
			Array.from(recipe.ingredients).map((ingredient) => {
				this.ingredients.add(ingredient.toLowerCase());
				//* liste de tous les ingredients
			});
			Array.from(recipe.ustensils).map((ustensil) => {
				this.ustensils.add(ustensil.toLowerCase());
				//* liste de tous les ustensiles
			});
			Array.from(recipe.appliances).map((appliance) => {
				this.appliances.add(appliance.toLowerCase());
				//* liste de tous les appareils
			});
		});	
	}
}
export default SearchResult;
