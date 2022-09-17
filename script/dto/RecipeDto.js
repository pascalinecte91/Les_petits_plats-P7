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

	isValidSearchInput(term) {
		return this.name.includes(term) ||
			this.description.includes(term);
	}
	
	hasIngredients(terms) {
		console.log(terms);
		console.log(this.ingredients);
		return true;
	}

	hasUstensils(terms) {
		console.log(terms);
		console.log(this.ustensils);
		return true;
	}

	hasAppliances(terms) {
		//tous les terms doivent  etre dans this.appliances
		// true = tous inclus 
		// false = un ou plusieurs non inclus 
		console.log(terms);
		console.log(this.appliances);
		return true;
	}
}

export default RecipeDto;

