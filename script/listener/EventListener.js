import { recipes } from '../../data/recipes.js';
import CardRecipeBuilder from '../builder/CardRecipeBuilder.js';
import ListBuilder from '../builder/ListBuilder.js';
import RecipeDto from '../dto/RecipeDto.js';
import AlertMessage from './../builder/AlertMessage.js';
import SearchService from './../service/SearchService.js';
import { replaceSpecialChars } from './../service/utils.js';

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
		this.closedPopup();
	}

	//* recherche  recette input loupe
	searchGlassList() {
		document.querySelector('#inputSearch').addEventListener('keyup', (e) => {
			let searchInput = e.target;
			let searchValue = searchInput.value;

			this.searchService.launch();
			
		});
	}

	closedPopup() {
		const closedPopup = document.querySelector('#resultSort');
		closedPopup.addEventListener('click', () => {
			document.getElementById('resultSort').classList.remove('showInput');
			//location.reload();
		});
	}

	//* click button OPEN  - CLOSED (toogle) de l'une des 3 listes click
	toggleList() {
		document.querySelector('#searchBtn').addEventListener('click', (e) => {
			const target = e.target;
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
				target.closest('.elementsList').classList.toggle('active');
			}
		});
	}

	//* recherche dans les listes
	filterTag() {
		document.querySelector('#searchBtn').onkeyup = (e) => {
			//ce qu'on inscrit dans l input
			let inputHtml = e.target;
			
			if (inputHtml.classList.contains('filterInputList')) {
				// on recupere  les valeurs inscrites dans l input
				let inputValue = inputHtml.value;
		
				console.log(inputValue);
				// on affiche et on check les elements deja trouvé dans la liste et
				document.querySelectorAll('.elementsList.active .list-item').forEach((element) => {
					const elementValueList = replaceSpecialChars(element.innerHTML);
					//* console.log('elements du toggle :', elementValueList);
					//* indexOf  renverra sa valeur
					let isNotEmpty = elementValueList.indexOf(inputValue) >= 0; 
					if (isNotEmpty) {
						element.classList.remove('hidden');
					} else {
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
			//*console.log('recettes trouvées avec TAG choisi:',target); 
			if (target.classList.contains('list-item')) {
				const elementValue = target.innerHTML;
				let dataType = target.closest('.elementsList').dataset.type;
				let tagHtmlList = `
				<li class="elementTag tag-${dataType}">${elementValue} 
				<i class="far fa-times-circle tag"></i></li>`;
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
