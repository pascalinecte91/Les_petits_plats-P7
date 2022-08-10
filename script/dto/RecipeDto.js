class RecipeDto {
	constructor(recipeData) {
	//console.log(recipeData.ustensils);
		this.recipeData = recipeData;
		//const card = ([name, servings, time, description, appliance ]) 
		//! toutes  les recipes = recipeData
		//console.log(recipeData);
		this.name = recipeData.name;
		this.servings = recipeData.servings;
		this.time = recipeData.time;
		this.description = recipeData.description;
		this.ustensils = new Set(recipeData.ustensils);
		this.appliances = new Set();
		this.ingredients = new Set();
		this.appliances.add(recipeData.appliance);
		recipeData.ustensils.map((ustensil) => {
			this.ustensils.add(ustensil);
		});
		recipeData.ingredients.map((ingredient) => {
			this.ingredients.add(ingredient);
		});
	}
}

export default RecipeDto;

