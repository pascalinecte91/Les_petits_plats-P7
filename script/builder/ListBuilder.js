class ListBuilder {
	constructor(searchResult) {
		//console.log(this.listIngredients(elements));
		this.searchResult = searchResult;
	}
	refreshListSection(searchResult) {
		//console.log(searchResult);
		let ingredientListHtml = this.getHtmlList(searchResult.ingredients);
		let ustensilListHtml = this.getHtmlList(searchResult.ustensils);
		let applianceListHtml = this.getHtmlList(searchResult.appliances);
		document.getElementById('ingredientList').innerHTML = ingredientListHtml;
	}
	getHtmlList(elements) {
		//console.dir(elements);
		const listHtml = `
		<div class="btn-group">
			<button class="btn dropdown-toggle" type="button" id="dropdownButtonBlue" data-bs-toggle="dropdown" 
			aria-expanded="false">Ingredients
			</button>
			<ul class="dropdown-menu" aria-labelledby="dropdownButtonBlue">${this.listIngredients(
				elements
			)}</ul>
		</div>`;
		return listHtml;
	}

	listIngredients(ingredients) {
		// let ingredientList = new Set();
		let listIngred = '';
		ingredients.forEach((ingredient) => {
			console.log(ingredient);
			// ingredientList.add(ingredient.ingredient)
			listIngred += `<li class="list-item ">${ingredient}</li>`;
		});
		return listIngred;
	}
}

export default ListBuilder;
