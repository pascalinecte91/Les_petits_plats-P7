/**
 *?  recipeData = toutes  les recipes = 
 *?  console.log(recipeData.ustensils) = tous les ustensils des recettes
 */

class RecipeDto {
	constructor(recipeData) {
		
		this.recipeData = recipeData;
		this.name = recipeData.name;
		this.servings = recipeData.servings;
		this.time = recipeData.time;
		this.description = recipeData.description;
		this.ustensils = new Set();
		this.appliances = new Set();
		this.ingredients = new Set();
		this.ingredientsData = new Set();  // collection

		recipeData.ingredients.map((data) => {
			this.ingredientsData.add(data);
			this.ingredients.add(data.ingredient);
			
		});
		
		recipeData.ustensils.map((ustensil) => {
			this.ustensils.add(ustensil);
			
		});

		// les appliances = string
		this.appliances.add(recipeData.appliance);
	}

	isValidSearchInput(inputValue) {
		let value = inputValue.toLowerCase();
		let searchFilter = [...this.ingredients].filter((ingredient) => {
			return ingredient.toLowerCase().includes(value);
		});
		return this.name.toLowerCase().includes(value) ||
			this.description.toLowerCase().includes(value);
			
	}

	convertObjectToArrayInLowerCase(objectSet) {
		let arrayElement = Array.from(objectSet).map((element) => {
			return element.toLowerCase();
		});
		return arrayElement;
	}

	// replaceSpecialChars(str) {
	// 	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')// Remove accents
	// 	.replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
	// 	.replace(/\-\-+/g, '-')	// Replaces multiple hyphens by one hyphen
	// 	.replace(/(^-+|-+$)/g, '') // Remove extra hyphens from beginning or end of the string
	// }
	

	isInRecipe(selectedTags, recipeElements) {
		let selectedTagsArray = this.convertObjectToArrayInLowerCase(selectedTags);
		let recipeElementsArray = this.convertObjectToArrayInLowerCase(recipeElements);

		return selectedTagsArray.every((selectedTag) =>
			recipeElementsArray.includes(selectedTag)
		);
	}

	hasIngredients(selectedTags) {
		return this.isInRecipe(selectedTags, this.ingredients);
	}

	hasUstensils(selectedTags) {
		return this.isInRecipe(selectedTags, this.ustensils);
	}

	hasAppliances(selectedTags) {
		return this.isInRecipe(selectedTags, this.appliances);
	}
}
export default RecipeDto;