
/** 
 //*  CLASSE  APPELLEE et exécutee 1 fois avant chaque TEST
 *  1 fois pour Foreach
 *  1 fois pour let of
 * 
 * 
//! on simule une requete http
//* en rentrant des indication dans l input
*/
//* les criteres de recherche
class SearchParams {  
    constructor() {
        this.ingredients = new Set("jus de citron");
        this.ustensils = new Set("cuillere");
        this.appliances = new Set("saladier");
        this.input = "creme";
    }
    isValid() {
        return (
            this.ingredients.size > 0 ||
            this.ustensils.size > 0 ||
            this.appliances.size > 0 ||
            this.input.trim() != ""
        );
    }
}
