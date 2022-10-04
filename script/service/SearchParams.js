class SearchParams {
	constructor() {
		this.ingredients = new Set();
		this.ustensils = new Set();
		this.appliances = new Set();
		this.input = document.getElementById('inputSearch').value;

		//console.log(this);
		Array.from(document.querySelectorAll('#tagList .tag-ingredients')).map(
			(tagElement) => {
				this.ingredients.add(tagElement.innerText.trim());
				//console.log(tagElement);
			}
		);

		Array.from(document.querySelectorAll('#tagList .tag-ustensils')).map(
			(tagElement) => {
				this.ustensils.add(tagElement.innerText.trim());
				//console.log(tagElement);
			}
		);

		Array.from(document.querySelectorAll('#tagList .tag-appliances')).map(
			(tagElement) => {
				console.log(tagElement);
				this.appliances.add(tagElement.innerText.trim());
				//console.log(tagElement);
			}
		);
	}

	isValid() {
		console.log(this.ingredients.size);
		return (
			this.ingredients.size > 0 ||
			this.ustensils.size > 0 ||
			this.appliances.size > 0 ||
			this.input.trim() != ''
		);
	}
}

export default SearchParams;
