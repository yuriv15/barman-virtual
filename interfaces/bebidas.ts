export interface Drink {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strDrinkThumb: string;
    isFavorita?: boolean;
}

export default interface CatalogoBebidas {
    drinks: Drink[];
}
