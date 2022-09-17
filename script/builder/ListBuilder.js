class ListBuilder {
	refreshListSection(searchResult) {
		document.getElementById("ingredientsList").innerHTML = this.getHtmlList(
			searchResult.ingredients,
			"Ingredients",
			"ingredient"
		);
		document.getElementById("ustensilsList").innerHTML = this.getHtmlList(
			searchResult.ustensils,
			"Ustensils",
			"ustensil"
		);
		document.getElementById("appliancesList").innerHTML = this.getHtmlList(
			searchResult.appliances,
			"Appareils",
			"appareil"
		);
	}

	getHtmlList(elements, title, name) {
		const listHtml = `
		<div class="dropList">
			<button class="toggleList">${title}
			<i class="fas fa-chevron-down chevronDown toggleList"></i>
			</button>
			<div class="dropdown-content">
				<div class= "tags">
					<input type="text" class="filterInputList" placeholder="recherchez un ${name}">
					<i class="fas fa-chevron-up chevronDown toggleList"></i>
				</div>
				<ul class="listTags">${this.listElements(elements)}</ul>
			</div>
		</div>
		`;
		return listHtml;
	}

	listElements(elements) {
		//console.log(elements);
		let list = "";
		elements.forEach((element) => {
			//console.log(element);
			list += `<li class="list-item">${element.toLowerCase()}</li>`;
		});
		return list;
	}
}
export default ListBuilder;
