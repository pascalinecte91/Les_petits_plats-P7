class AlertMessage {
	refresh(searchResult) {
		let alertMessage = document.getElementById('resultSort');
		let qteRecipe =[...searchResult.recipes].length; 
		
		if (qteRecipe < 1) {
				alertMessage.innerHTML =
				'Aucune "recette" ne correspond, veuillez recommencer !<i class="far fa-times-circle tagMsg"></i>';
			
		} else {
			
			alertMessage.innerHTML = `Nous avons trouvé ${qteRecipe}  recette${
				qteRecipe > 1 ? 's' : ''
			} qui correspond${
				qteRecipe > 1 ? 'ent' : ''
			} ! <i class="far fa-times-circle tagMsg"></i> `;
		}
	}
	
}

export default AlertMessage;