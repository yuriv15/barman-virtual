export interface Drink {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strDrinkThumb: string;
    isFavorita?: boolean;
    [key: string]: string | boolean | undefined | null;
}

export default interface CatalogoBebidas {
    drinks: Drink[];
}
