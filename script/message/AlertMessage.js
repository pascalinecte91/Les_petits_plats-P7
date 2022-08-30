import SearchResult from "./../entity/searchResult.js";

class AlertMessage {
	refresh(searchResult) {
		const quantitySearch = searchResult.length;
		//console.log(searchResult);
		const alertMessage = document.getElementById('sortMsg');
		console.log(quantitySearch);
		if (quantitySearch === 0) {
			alertMessage.innerHTML = 'Aucune recette! Merci de refaire une recherche';
		} else {
			alertMessage.innerHTML = ` il y a ${quantitySearch}  recette${
				quantitySearch > 1 ? 's' : ''
			} pour votre recherche.`;
		}
	}
}

export default AlertMessage;
