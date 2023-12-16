import type CatalogoBebidas from '~/interfaces/bebidas';

export const useBebidasStore = defineStore('filtros', () => {
    const carregandoBebidas = ref<boolean>(true);

    const catalogoBebidas = ref<CatalogoBebidas>({
        drinks: [],
    });

    async function carregarCatalogoBebidas() {
        carregandoBebidas.value = true;

        if (!catalogoBebidas.value.drinks.length) {
            const { pending: ordinaryPendente, data: catalogoOrdinary } =
                await useFetch<CatalogoBebidas>(
                    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
                );

            const { pending: cocktailPendente, data: catalogoCocktail } =
                await useFetch<CatalogoBebidas>(
                    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
                );

            if (!(ordinaryPendente.value && cocktailPendente.value)) {
                if (catalogoOrdinary.value) {
                    catalogoBebidas.value.drinks.push(
                        ...catalogoOrdinary.value.drinks
                    );
                }
                if (catalogoCocktail.value) {
                    catalogoBebidas.value.drinks.push(
                        ...catalogoCocktail.value.drinks
                    );
                }

                catalogoBebidas.value.drinks =
                    catalogoBebidas.value.drinks.sort((a, b) => {
                        if (a.strDrink < b.strDrink) {
                            return -1;
                        }
                        if (a.strDrink > b.strDrink) {
                            return 1;
                        }
                        return 0;
                    });
            }
        }

        carregandoBebidas.value = false;
    }

    const bebidasFavoritas = computed(() => {
        return catalogoBebidas.value.drinks.filter(
            (bebida) => bebida.isFavorita
        );
    });

    const filtroBusca = ref<string>('');
    const filtroCategoria = ref<string>('');

    function setFiltroBusca(value: string) {
        filtroBusca.value = value;
    }

    function setFiltroCategoria(value: string) {
        filtroCategoria.value = value;
    }

    function toggleFavorito(id: string) {
        catalogoBebidas.value.drinks.forEach((bebida) => {
            if (bebida.idDrink === id) {
                bebida.isFavorita = !bebida.isFavorita;
            }
        });
    }

    return {
        filtroBusca,
        filtroCategoria,
        setFiltroBusca,
        setFiltroCategoria,
        toggleFavorito,
        carregarCatalogoBebidas,
        carregandoBebidas,
        catalogoBebidas,
        bebidasFavoritas,
    };
});
