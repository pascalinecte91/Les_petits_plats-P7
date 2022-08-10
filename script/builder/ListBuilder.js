class ListBuilder {
	
	refreshListSection(searchResult) {
		document.getElementById('ingredientList-blue').innerHTML = this.getHtmlList(searchResult.ingredients,'ingredients','Blue');
		document.getElementById('ustensilList-green').innerHTML = this.getHtmlList(searchResult.ustensils,'ustensils','Green');
		document.getElementById('applianceList-orange').innerHTML = this.getHtmlList(searchResult.appliances,'appareils','Orange');		
	}

	getHtmlList(elements, title, color) {
		const listHtml = `
		<div class="btn-group">
			<div id="myDropdown" class="dropdown-content">
				
					<button class="btn dropdown-toggle"  type="button" id="dropdownButton${color}" data-bs-toggle="dropdown" 
					aria-expanded="false">${title}</button>
					<div class="iconDown"><i class="fa fa-chevron-down"></i>
					</div>
					<div class="searchInput">
					<input  type="search"  name="" id="myInput"  class="filter-searchBar" placeholder="Rechercher un ustensil"/>
				</div>
				<ul class="dropdown-menu" aria-labelledby="dropdownButton${color}">${this.listElements(elements)}<i class="fa fa-chevron-down"></i>
				</ul>
			</div>
		</div>`;
		return listHtml;
		}

	listElements(elements) {
		//console.log(elements);
		let list = '';
		elements.forEach((element) => {
			list += `
			<li class="list-item">${element}</li>`;
			
		});
		return list;
	}
}


export default ListBuilder;