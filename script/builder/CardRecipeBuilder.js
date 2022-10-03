class CardRecipeBuilder {
	refreshCardSection(recipes) {
		let cardsHtml = '';
		Array.from(recipes).map((recipe) => {
			cardsHtml += this.getHtmlCard(recipe);
		});
		document.getElementById('recipesContainer').innerHTML = cardsHtml;
	}

	getHtmlCard(recipe) {
		// console.log(recipe);
		let picture = '';

		picture = recipe.name.toLowerCase().replace(/ /g, '_');
		const html = `
	<figure class="card-figure">
			<img src="./assets/images/${picture}.jpg" alt="gallery" class="media-recipe">
				<div class="card-info">
					<h3 class="card-title">${recipe.name}</h3>
					<span>
					<i class="far fa-clock"></i>
					<h3 class="card-title">${recipe.time} min
					</span>
				</div>
				<figcaption class="detail">
					<div class="card-ingred">${this.ingredientHtml(recipe)}
					</div>
					<div class="card-desc">${recipe.description}
					</div>
				</figcaption>
		
	</figure>`;
		return html;
	}

	ingredientHtml(recipe) {
		let htmlContent = '';
		// console.log(recipe.ingredients);
		for (const ingredient of recipe.ingredientsData) {
			const ingredientQuantity = ingredient.quantity
				? ingredient.unit
					? `:&nbsp;${ingredient.quantity}&nbsp;${ingredient.unit}`
					: `:&nbsp;${ingredient.quantity}`
				: '';
			htmlContent += `<p><strong>${ingredient.ingredient}</strong>${ingredientQuantity}</p>`;
		}
		return htmlContent;
	}
}
export default CardRecipeBuilder;
