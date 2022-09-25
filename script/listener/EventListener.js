import { recipes } from '../../data/recipes.js';
import CardRecipeBuilder from '../builder/CardRecipeBuilder.js';
import ListBuilder from '../builder/ListBuilder.js';
import RecipeDto from '../dto/RecipeDto.js';
import AlertMessage from './../builder/AlertMessage.js'; 

/**
 *? Ecoute chaque évenement
 *? - Recherche  Recettes  barre principale
 *? - ouverture fermeture des 3 listes
 *? - Recherche  dans chaque liste
 *? - click  affiche et supprime Tag  
 */

class EventListener {
	constructor(searchService) {
		this.searchService = searchService;
	}

	listen() {
		this.searchGlassList();
		this.toggleList();
		this.filterTag();
		this.addTag();
		this.removeTag();
	}

//* recherche  recette input loupe 
	searchGlassList() {
		document.querySelector('#inputSearch').addEventListener('keyup', (e) => {
		let searchInput = e.target;
		let searchValue = searchInput.value;
			// Si plus grand  que 3 caractere
			if (searchValue.length >= 3) {
			this.searchService.launch();
			document.getElementById('resultSort').classList.add('showInput');
			} else {
			document.getElementById('resultSort').classList.remove('showInput');
			}	
		})
	};

//* click button OPEN  - CLOSED (toogle) de l'une des 3 listes click
	toggleList() {
		document.querySelector('#searchBtn').addEventListener('click', (e) => {
			const target = e.target;
			//console.log(target);
			// si on clique sur un des 3 boutons
			if (target.classList.contains('toggleList')) {
				let isActive = target
					.closest('.elementsList')
					.classList.contains('active');
				//console.log(isActive);
				//On ferme toutes les listes ouvertes sauf celle qu'on click
				document.querySelectorAll('.elementsList').forEach((element) => {
					if (!isActive) {
						element.classList.remove('active');
					}
				});
				// ouvre ou ferme la liste concernée
				// on depose la classe sur la div parente toggleList
				target.closest('.elementsList').classList.toggle('active');
			}
		});
	}

//* recherche dans les listes
	filterTag() {
		// On ecoute sur la saisi au clavier
		document.querySelector('#searchBtn').onkeyup = (e) => {
			//ce qu'on inscrit dans l input
			let inputHtml = e.target;
			// si ce qu'on ecoute est contenu dans la class
			if (inputHtml.classList.contains('filterInputList')) {
				// on recupere  les valeurs inscrites dans l input
				let inputValue = inputHtml.value;
				// on affiche et on check les elements deja trouvé dans la liste et
				document
					.querySelectorAll('.elementsList.active .list-item')
					.forEach((element) => {
						//console.log(element);
						const elementValueList = element.innerHTML;
						//console.log(elementValueList);
						// si il existe , indexOf  renverra à l element trouvé (sa valeur)
						let isNotEmpty = elementValueList.indexOf(inputValue) >= 0; // si yen a pas zero
						if (isNotEmpty) {
							// si elementValueList n'est pas vide :  effacer la classe HIDE
							element.classList.remove('hidden');
						} else {
							//sinon  on l'a remet
							element.classList.add('hidden');
						}
					});
			}
		};
	}

//* affichage tags	
	addTag() {
		document.querySelector('#searchBtn').addEventListener('click', (e) => {
			const target = e.target;
			//console.log(target); // li
			if (target.classList.contains('list-item')) {
				const elementValue = target.innerHTML;
				//console.log(elementValue);
				let dataType = target.closest('.elementsList').dataset.type
				//console.log('elementsList');
				let tagHtmlList = `
				<li class="elementTag tag-${dataType}">${elementValue} <i class="far fa-times-circle tag"></i></li>`;
				document.getElementById('tagList').innerHTML += tagHtmlList;
				this.searchService.launch();
			}
		});
	}

//* Close tag 
	removeTag() {
		document.querySelector('#tagList').addEventListener('click', (e) => {
			const target = e.target;

			if (target.classList.contains('tag')) {
				target.closest('.elementTag').remove();
				this.searchService.launch();
			}
		});
	}
}
export default EventListener;
