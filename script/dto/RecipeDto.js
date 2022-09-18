import { recipes } from '../../data/recipes.js';

class RecipeDto {
	constructor(recipeData) {
		//console.log(recipeData.ustensils);
		//? toutes  les recipes = recipeData
		this.recipeData = recipeData;
		this.name = recipeData.name;
		this.servings = recipeData.servings;
		this.time = recipeData.time;
		this.description = recipeData.description;
		this.ustensils = new Set();
		this.appliances = new Set();
		this.ingredients = new Set();

		recipeData.ingredients.map((ingredient) => {
			this.ingredients.add(ingredient);
		});

		recipeData.ustensils.map((ustensil) => {
			console.log(recipeData.ustensils);
			this.ustensils.add(ustensil);
		});

		// les appliances = string
		this.appliances.add(recipeData.appliance);
	}

	isValidSearchInput(tag) {
		return this.name.includes(tag) || this.description.includes(tag);
	}

	hasIngredients(tags) {
		const ingredients = [];
		let recipeIngredients = Array.from(this.ingredients);
		recipeIngredients.forEach((element) => {
			ingredients.push(element.ingredient.toLowerCase());
		});
		let isValid = [...tags].every((tags) => ingredients.includes(tags));
		//console.log(tags);
		return isValid;
	}

	hasUstensils(tags) {
		let ustensils = [];
		let recipeUstensils = Array.from(this.ustensils);
		console.log(recipeUstensils);
		recipeUstensils.forEach((el) => {
			//console.log(el);
			ustensils.push(el.ustensil);
			console.log(el.ustensils);
		});
		let isValid = [...tags].every((tags) => ustensils.includes(tags));
		//console.log(tags);
		return isValid;
	}

	hasAppliances(terms) {
		//tous les terms doivent  etre dans this.appliances
		// true = tous inclus
		// false = un ou plusieurs non inclus
		//console.log(terms);
		//console.log(this.appliances);
		return true;
	}
}

export default RecipeDto;
