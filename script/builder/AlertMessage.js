class AlertMessage {
	refresh(searchResult) {
		let alertMessage = document.getElementById('resultSort');
		let qteRecipe = [...searchResult.recipes].length;
		//console.log(searchResult);
		if (qteRecipe < 1) {
			alertMessage.innerHTML =
				'Aucune "recette" ne correspond, veuillez recommencer !';
		} else {
			alertMessage.innerHTML = `Nous avons trouvé ${qteRecipe}  recette${
				qteRecipe > 1 ? 's' : ''
			} qui match${qteRecipe > 1 ? 'ent' : ''} avec les caractères écrits.`;
		}
	}
}
export default AlertMessage;
