import { recipes } from "../../data/recipes.js";
import RecipeDto from "./../dto/RecipeDto.js";

class RecipeDataProvider {
  constructor() {
    this.recipes = new Set();

    recipes.map((recipe) => {
      this.recipes.add(new RecipeDto(recipe));
    });
  }
}
export default RecipeDataProvider;
