class RecipeDto {
  constructor(recipeData) {
    //this.recipeData = recipeData;
    //[ name, servings, time, description, appliance ] = recipeData;
    this.name = recipeData.name;
    this.servings = recipeData.servings;
    this.time = recipeData.time;
    this.description = recipeData.description;
    this.ustensils = new Set();
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