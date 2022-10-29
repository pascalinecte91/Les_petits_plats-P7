
/**
 * CLASSE  APPELLEE UNE FOIS POUR CHAQUE TEST
 * 1 fois pour Foreach
 * 1 fois pour let of
 * 
 */
class SearchParams {   //! SIMULER  UNE REQUETE HTTP  Example:
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
