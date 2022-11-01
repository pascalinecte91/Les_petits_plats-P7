import { recipes } from '../../data/recipes.js';
import RecipeDto from './../dto/RecipeDto.js';

/**
 * mon dataProvider va charger mon fichier recipe
 * et va faire des recipeDto
 */

class RecipeDataProvider {
	constructor() {
		this.recipes = new Set();
		recipes.map((recipe) => {
			this.recipes.add(new RecipeDto(recipe));	
		});
	}
}
export default RecipeDataProvider;
