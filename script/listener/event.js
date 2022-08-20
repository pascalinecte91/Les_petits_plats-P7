
import { recipes } from "../../data/recipes.js";
import CardRecipeBuilder from "../builder/CardRecipeBuilder.js";

class EventListener {
	addClickEventList() {
		document.querySelector("#searchBtn").addEventListener("click", (e) => {
			const target = e.target;
			// si on clique sur un des 3 boutons
			if (target.classList.contains("toggleList")) {
				let isActive = target
					.closest(".elementsList")
					.classList.contains("active");

				//On ferme toutes les listes ouvertes sauf celle qu'on click
				document.querySelectorAll(".elementsList").forEach((element) => {
					if (!isActive) {
						element.classList.remove("active");
					}
				});
				// ouvre ou ferme la liste concernée
				// on depose la classe sur la div parente toggleList
				target.closest(".elementsList").classList.toggle("active");
			}
		});
	}

	addEventListFiltered() {
		const searchInput = document.getElementById("inputSearch");
		//const recipes = searchResult;
		searchInput.oninput = () => {
			const input = searchInput.value;
			// je filtre  les elements de mon array
			const resultat = recipes.filter((recipe) =>
				recipe.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
			);
			console.log(resultat);
			new CardRecipeBuilder().refreshCardSection(resultat);

			//reponse de la recherche
			//let response = "";

			//si mon input n'est pas vide  alors:
			// 	if (input != "") {
			// 		resultat.forEach(
			// 			(resultatRecipe) =>
			// 				(response += `
			//         <div class="response">${resultatRecipe.name}</div>`)
			// 		);
			// 	}
			// 	document.getElementById("response").innerHTML = response;
			// };
		};
	}
}
export default EventListener;
