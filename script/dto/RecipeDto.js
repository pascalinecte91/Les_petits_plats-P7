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
		this.ingredientsData = new Set();

		recipeData.ingredients.map((data) => {
			this.ingredientsData.add(data);
			this.ingredients.add(data.ingredient);
		});

		recipeData.ustensils.map((ustensil) => {
			//console.log(recipeData.ustensils);
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
		this.description.toLowerCase().includes(value) 
		
	}

	convertObjectToArrayInLowerCase(objectSet) {
		let arrayElement = Array.from(objectSet).map((element) => {
			return element.toLowerCase();
		});
		return arrayElement;
	}

	isInRecipe(selectedTags, recipeElements) {
		let selectedTagsArray = this.convertObjectToArrayInLowerCase(selectedTags);
		let recipeElementsArray = this.convertObjectToArrayInLowerCase(recipeElements);

		return selectedTagsArray.every((selectedTag) => recipeElementsArray.includes(selectedTag));
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