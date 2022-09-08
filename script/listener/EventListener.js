import { recipes } from '../../data/recipes.js';
import CardRecipeBuilder from '../builder/CardRecipeBuilder.js';
import AlertMessage from '../message/AlertMessage.js';

class EventListener {
	constructor(searchService) {
		this.searchService = searchService;
	}

	addClickEventList() {
		document.querySelector('#searchBtn').addEventListener('click', (e) => {
			const target = e.target;
			// si on clique sur un des 3 boutons
			if (target.classList.contains('toggleList')) {
				let isActive = target.closest('.elementsList').classList.contains('active');

				//On ferme toutes les listes ouvertes sauf celle qu'on click
				document.querySelectorAll('.elementsList').forEach((element) => {
					if (!isActive) {
						element.classList.remove('active');
					}
				});
				// ouvre ou ferme la liste concernée
				// on depose la classe sur la div parente toggleList
				target.closest('.elementsList').classList.toggle('active');
				const itemsList = document.querySelectorAll('.elementsList.active .list-item');
				this.addClickTag(itemsList)
			}
		});
	}

	addEventFilteredSearchList() {
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

	addFilterEventList() {
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
					const elementValueList = element.innerHTML.toLowerCase();
					// if (
					// 	element.addEventListener('click', () => {
					// 		// renvoi l element de la liste  cliké
					// 		document.getElementById('tagList').append(element);
					// 		document.getElementById('tagList').classList.add('showTag');
					// 	})
					// );
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

	addClickTag(listElement) {
		listElement.forEach(element => {
			if (element.addEventListener('click', () => {
				// renvoi l element de la liste  cliké
				const elementvalue = element.innerHTML.toLowerCase();

				const choice = document.createElement('li');
				console.log(choice);
				choice.classList.add('tagElement');
				choice.innerHTML = elementvalue;

				const icon = document.querySelector('.fa-times-circle');
				choice.append(icon)
				// icon.addEventListener('click', this.closeTagChoice(element))
				
				document.getElementById('tagList').append(element);
				document.getElementById('tagList').classList.add('showTag');	
				
			}));
		})
	
	}
	closeTagChoice(element) {
		const closeTag = document.getElementById('tagList');
		if (
			closeTag.addEventListener('click', () => {
				document.getElementById('tagList').classList.remove('showTag');
			})
		);
	}

	addTag() {
		console.log(addTag);
		document.getElementById('tagList').insertAdjacentHTML('afterend', tagList);

	}
}

export default EventListener;
