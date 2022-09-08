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
		this.clickList();
		this.filterInputTagList();
		this.toggleTagList();
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
		const closePopup = document.querySelector('.fa-times-circle');

		//fermeture de  l'alerte
		closePopup.addEventListener('click', () => {
			document.getElementById('resultSort').classList.remove('showInput');
		});

		searchInput.oninput = () => {
			const input = searchInput.value;
			// Si plus grand  que 1 caractere
			if (input.length >= 1) {
				const resultat = recipes.filter((recipe) =>
					recipe.name.toLowerCase().includes(input.toLowerCase())
				);
				new CardRecipeBuilder().refreshCardSection(resultat);
				new AlertMessage().refresh(resultat);
				// alerte s 'affiche
				document.getElementById('resultSort').classList.add('showInput');
			} else {
				// alerte se ferme
				document.getElementById('resultSort').classList.remove('showInput');
			}
		};
	}

	/**
	 * ouverture de l'une des 3 listes click
	 * fermeture de l'une des 3 listes click
	 */
	clickList() {
		document.querySelector('#searchBtn').addEventListener('click', (e) => {
			const target = e.target;
			//console.log(target);
			// si on clique sur un des 3 boutons
			if (target.classList.contains('toggleList')) {
				let isActive = target
					.closest('.elementsList')
					.classList.contains('active');
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
	 * affichage des elements selon recehrche de l input
	 */
	filterInputTagList() {
		// On ecoute sur la saisi au clavier
		document.querySelector('#searchBtn').onkeyup = (e) => {
			//ce qu'on inscrit dans l input
			let inputHtml = e.target;
			// si ce qu'on ecoute est contenu dans la class
			if (inputHtml.classList.contains('filterInputList')) {
				// on recupere  les valeurs inscrites dans l input
				let inputValue = inputHtml.value;
				// on affiche et on check les elements deja trouvé dans la liste et
				document.querySelectorAll('.elementsList.active .list-item').forEach((element) => {
					//console.log(element);
					const elementValueList = element.innerHTML.toLowerCase();
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
	 */
	toggleTagList() {
		document.querySelector('#searchBtn').addEventListener('click', (e) => {
			const target = e.target;
			//console.log(target); // li

			if (target.classList.contains('list-item')) {
				const elementValue = target.innerHTML.toLowerCase();
				//console.log(elementValue);
				let dataType = target.closest('.elementsList').dataset.type;
				console.log('elementsList');
				let tagHtmlList = `
				<li class="elementTag tag-${dataType}">${elementValue} <i class="far fa-times-circle tag"></i></li>`;
				document.getElementById('tagList').innerHTML += tagHtmlList;
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
			console.log(target);
			if (target.classList.contains('tag')) {
				target.closest('.elementTag').remove();
			}
		});
	}
}
export default EventListener;
