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
		this.ingredientsData = new Set();
		recipeData.ingredients.map((data) => {
			this.ingredientsData.add(data);
			this.ingredients.add(data.ingredient);
		});
		//console.log(this.ingredientsData);
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
			return element.toLowerCase().normalizer;
		});
		return arrayElement;
	}

	// normalizer(string) {
	// 	return string
	// 	.replace(/[\u0300-\u036f]/g, "")
	// 	.replace(/[.,!;:?]/g,"");
	// 	console.log(normalizer);
	// }

	isInRecipe(selectedTags, recipeElements) {
		let selectedTagsArray = this.convertObjectToArrayInLowerCase(selectedTags);
		let recipeElementsArray =
			this.convertObjectToArrayInLowerCase(recipeElements);

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