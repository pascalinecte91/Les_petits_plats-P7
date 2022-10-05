/*
 *? TRI
 ** array.from  fait un tableau à partir d'un objet iterable
 ** met les ingredients ou ustensils ou appliances
 ** à la recherche dans l input
 */

class SearchResult {
	constructor(recipesRecovered) {
		this.recipes = recipesRecovered;
		this.ingredients = new Set();
		this.ustensils = new Set();
		this.appliances = new Set();
		
		Array.from(recipesRecovered).map((recipe) => {
			
			Array.from(recipe.ingredients).map((ingredient) => {
				//console.log(recipe.ingredients);   			
				//!FLO  PK 5 TABLEAUX DE CHAQUE INGREDIENTS *5 COMME NBRE ING
				this.ingredients.add(ingredient.toLowerCase());
				//*console.log('liste  = ',ingredient);
			});													
			//! FLO PK  L APPELER RESULT ET PK AVOIR FAIT CETTE ETAPE COMME CA
			Array.from(recipe.ustensils).map((ustensil) => {
				this.ustensils.add(ustensil.toLowerCase());
				//console.log(this.ustensils);
			});
			Array.from(recipe.appliances).map((appliance) => {
				this.appliances.add(appliance.toLowerCase());
			});
		});
	}
}
export default SearchResult;
