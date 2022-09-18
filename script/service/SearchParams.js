
class SearchParams {
	constructor() {
		this.ingredients = new Set();
		this.ustensils = new Set();
		this.appliances = new Set();
        this.input = document.getElementById('inputSearch').value;

		Array.from(document.querySelectorAll('#tagList .tag-ingredients')).map((tagElement) => {
            this.ingredients.add(tagElement.innerText.trim())
			//console.log(tagElement);
        });

		Array.from(document.querySelectorAll('#tagList .tag-ustensils')).map((tagElement) => {
            this.ustensils.add(tagElement.innerText.trim())
			//console.log(tagElement);
        });

		Array.from(document.querySelectorAll('#tagList .tag-appliances')).map((tagElement) => {
            this.appliances.add(tagElement.innerText.trim())
			//console.log(tagElement);
		});

		

		
	}
}

export default SearchParams;
