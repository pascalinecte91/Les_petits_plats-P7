/*
{
    "id": 1,
    "name" : "Limonade de Coco",
    "servings" : 1,
    "ingredients": [
        {
            "ingredient" : "Lait de coco",
            "quantity" : 400,
            "unit" : "ml"
        },
        {
            "ingredient" : "Jus de citron",
            "quantity" : 2
        },
        {
            "ingredient" : "Crème de coco",
            "quantity" : 2,
            "unit" : "cuillères à soupe"
        },
        {
            "ingredient" : "Sucre",
            "quantite" : 30,
            "unit" : "grammes"
        },
        {
            "ingredient": "Glaçons"
        }
    ],
    "time": 10,
    "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
    "appliance": "Blender",
    "ustensils": ["cuillère à Soupe", "verres", "presse citron" ]
},
*/
class RecipeDto {
  constructor(recipeData) {
    //this.recipeData = recipeData;
    //[ name, servings, time, description, appliance ] = recipeData;
    this.name = recipeData.name;
    this.servings = recipeData.servings;
    this.time = recipeData.time;
    this.description = recipeData.description;
    this.ustensils = new Set();
    this.appliances = new Set();
    this.ingredients = new Set();
    this.appliances.add(recipeData.appliance);
    recipeData.ustensils.map((ustensil) => {
      this.ustensils.add(ustensil);
    });
    recipeData.ingredients.map((ingredient) => {
      this.ingredients.add(ingredient);
    });
  }
}

export default RecipeDto;