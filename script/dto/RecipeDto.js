import { replaceSpecialChars } from './../service/utils.js';
/**
 *!  recipeData = toutes  les recipes 
 *!  console.log(recipeData.ustensils) = tous les ustensils des recettes
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
		this.ingredientsData = new Set(); // collection

		recipeData.ingredients.map((data) => {
			//* collection d'ingredients
			this.ingredientsData.add(data);
			this.ingredients.add(data.ingredient);	
		});

		recipeData.ustensils.map((ustensil) => {
			this.ustensils.add(ustensil);
		});
		//* les appliances = string
		this.appliances.add(recipeData.appliance);
	}

	isValidSearchInput(inputValue) {
		let value = inputValue.toLowerCase();
		let valueEscape = replaceSpecialChars(value);
		// si , filtre dans le [des ingred]

		//!  EXPLICATION  MENTOR */
		let searchFilter = [...this.ingredients].filter((ingredient) => {
			return replaceSpecialChars(ingredient.toLowerCase()).includes(value);
		});
		let isIngredExist = searchFilter.length > 0;
		return (isIngredExist ||
			replaceSpecialChars(this.name.toLowerCase()).includes(valueEscape) ||
			replaceSpecialChars(this.description.toLowerCase()).includes(valueEscape)
		);
	}

	convertObjectToArrayInLowerCase(objectSet) {
		let arrayElement = Array.from(objectSet).map((element) => {
			//console.log('TOUT =',element);
			return replaceSpecialChars(element.toLowerCase());
		});
		return arrayElement;
	}

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
