class SearchParams {
	constructor() {
		this.ingredients = new Set();
		this.ustensils = new Set();
		this.appliances = new Set();
		this.input = document.getElementById('inputSearch').value;

		Array.from(document.querySelectorAll('#tagList .tag-ingredients')).map(
			(tagElement) => {
				this.ingredients.add(tagElement.innerText.trim());
				//console.log('exemple d\'un TAG ingredient (li) =', tagElement);
			}
		);
		Array.from(document.querySelectorAll('#tagList .tag-ustensils')).map(
			(tagElement) => {
				this.ustensils.add(tagElement.innerText.trim());
			}
		);
		Array.from(document.querySelectorAll('#tagList .tag-appliances')).map(
			(tagElement) => {
				this.appliances.add(tagElement.innerText.trim());
			}
		);
	}

	isValid() {
		//*console.log('nombre = d\'elements dans l\'objet SET:',this.ingredients.size);
		return (
			this.ingredients.size > 0 ||
			this.ustensils.size > 0 ||
			this.appliances.size > 0 ||
			this.input.trim() != ''
			);
			
		}
}

export default SearchParams;
