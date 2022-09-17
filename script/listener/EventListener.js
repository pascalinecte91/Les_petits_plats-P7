import { recipes } from '../../data/recipes.js';
import CardRecipeBuilder from '../builder/CardRecipeBuilder.js';
import ListBuilder from '../builder/ListBuilder.js';
import AlertMessage from '../message/AlertMessage.js';

class EventListener {
	constructor(searchService) {
		this.searchService = searchService;
	}

	/**
	 * ecoute toutes  les evenements:
	 * toutes  les fonctions
	 *
	 */

	listen() {
		this.searchGlassList();
		this.toggleList();
		this.filterTag();
		this.addTag();
		this.removeTag();
	}

	/**
	 * à la recherche  d'une recette input loupe
	 * triera les recettes
	 * indiquera le nombre correspondant
	 * pour les afficher
	 */
	searchGlassList() {
		const searchInput = document.getElementById('inputSearch');

		searchInput.oninput = () => {
			const input = searchInput.value;
			// Si plus grand  que 1 caractere
			if (input.length >= 1) {
				this.searchService.launch();
			}
		};
	}

	/**
	 * click button ouverture  de l'une des 3 listes click
	 * click button fermeture de l'une des 3 listes click
	 */
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
	/**
	 * recherche sur l input à l'ouverture d une liste
	 * affichage des elements selon recherche de l input
	 */
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
						console.log(element);
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

	/**
	 * affichage du ou des tags selon recherche
	 * 1ere lettre majuscule
	 */
	addTag() {
		document.querySelector('#searchBtn').addEventListener('click', (e) => {
			const target = e.target;
			//console.log(target); // li

			if (target.classList.contains('list-item')) {
				const elementValue =
					target.innerHTML.charAt(0).toUpperCase() + target.innerHTML.slice(1);
				//console.log(elementValue);
				let dataType = target.closest('.elementsList').dataset.type;

				//console.log('elementsList');
				let tagHtmlList = `
				<li class="elementTag tag-${dataType}">${elementValue} <i class="far fa-times-circle tag"></i></li>`;
				document.getElementById('tagList').innerHTML += tagHtmlList;

				this.searchService.launch();
			}
		});
	}

	/**
	 * Close  tag
	 * fermeture  au click  sur le tag selectionné
	 */

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
