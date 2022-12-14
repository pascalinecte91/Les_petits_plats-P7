class SearchResult {
  constructor(recipesFiltered) {
    this.recipes = recipesFiltered;
    this.ingredients = new Set();
    this.ustensils = new Set();
    this.appliances = new Set();
   
    Array.from(recipesFiltered).map((recipe) => {
      Array.from(recipe.ingredients).map((ingredient) => {
        this.ingredients.add(ingredient);
      })
      Array.from(recipe.ustensils).map((ustensil) => {
        this.ustensils.add(ustensil);
      })
      Array.from(recipe.appliances).map((appliance) => {
        this.appliances.add(appliance);
      })
    });
  }
}

export default SearchResult;