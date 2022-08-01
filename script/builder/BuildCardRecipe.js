class BuildCardRecipe {
  ingredientHtml(recipe) {
    let htmlContent = "";
    console.log(recipe.ingredients);
    for (let ingredient of recipe.ingredients) {
      let ingredientQuantity = ingredient.quantity
        ? ingredient.unit
          ? `&nbsp;: ${ingredient.quantity}&nbsp;${ingredient.unit}`
          : `&thinsp;: ${ingredient.quantity}`
        : "";
      htmlContent +=`<p><strong> ${ingredient.ingredient}</strong> ${ingredientQuantity}</p>`;
    }
    return htmlContent;
  }

  getHtmlCard(recipe) {
    console.log(recipe);
    let picture = "";
    picture = recipe.name.toLowerCase().replace(/\s/g, "");
    const html = `
    <figure class="card-figure">
      <div class="card-body">
        <img src= "./assets/images/${picture}.jpg" alt="gallery" class="media-recipe">
        <div class="card-info">
          <h3 class="card-title">${recipe.name}</h3>
          <span><i class="far fa-clock"></i>
          <h3 class="card-title">${recipe.time} min</span>
        </div>
        <figcaption class="detail">
          <div class="card-ingred">${this.ingredientHtml(recipe)}</div>
          <div class="card-desc">${recipe.description}</div>
        </figcaption>
      </div>
    </figure>`;
    return html;
  }
}
export default BuildCardRecipe;
