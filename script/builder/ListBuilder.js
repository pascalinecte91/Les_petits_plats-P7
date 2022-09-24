class ListBuilder {
	refreshListSection(searchResult, searchParams) {
		document.getElementById('ingredientsList').innerHTML = this.getHtmlList(
			searchResult.ingredients,
			searchParams.ingredients,
			'Ingredients',
			'ingredient'
		);
		document.getElementById('ustensilsList').innerHTML = this.getHtmlList(
			searchResult.ustensils,
			searchParams.ustensils,
			'Ustensils',
			'ustensil'
		);
		document.getElementById('appliancesList').innerHTML = this.getHtmlList(
			searchResult.appliances,
			searchParams.appliances,
			'Appareils',
			'appareil'
		);
	}

	getHtmlList(elements, selectedTags, title, name) {
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
				<ul class="listTags">${this.listElements(elements, selectedTags)}</ul>
			</div>
		</div>
		`;
		return listHtml;
	}

	listElements(elements, selectedTags) {
		let list = '';
		elements.forEach((element) => {
			if (false === selectedTags.has(element)) {
				// if(selectedTags !== undefined && false === selectedTags.has(element)){
				//console.log(selectedTags);
				//console.log(element);
				list += `<li class="list-item">${element.toLowerCase()}</li>`;
			}
		});
		return list;
	}
}
export default ListBuilder;
