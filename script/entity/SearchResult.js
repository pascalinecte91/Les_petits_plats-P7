/*
 *? TRI
 ** array.from  fait un tableau à partir d'un objet iterable
 ** met les ingredients ou ustensils ou appliances
 ** à la recherche dans l input
 */

class SearchResult {
  constructor(recipesRecovered) {
    this.recipes = recipesRecovered;
    this.ingredients = new Set();
    this.ustensils = new Set();
    this.appliances = new Set();

    Array.from(recipesRecovered).map((recipe) => {
      //recipesRecovered = mes objets Set 50
      Array.from(recipe.ingredients).map((ingredient) => {
       // recipe.ingredients = [ ingredients de chaque objet SET]
        this.ingredients.add(ingredient.toLowerCase());
        //console.log('liste  = ',ingredient);
      });
      Array.from(recipe.ustensils).map((ustensil) => {
        this.ustensils.add(ustensil.toLowerCase());
        //console.log(this.ustensils);
      });
      Array.from(recipe.appliances).map((appliance) => {
        this.appliances.add(appliance.toLowerCase());
      });
    });
  }
}
export default SearchResult;
