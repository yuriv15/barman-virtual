import type CatalogoBebidas from '~/interfaces/bebidas';
import type { FiltroCategoria } from '~/interfaces/filtros';

export const useBebidasStore = defineStore('filtros', () => {
    const carregandoBebidas = ref<boolean>(true);

    const catalogoBebidas = ref<CatalogoBebidas>({
        drinks: [],
    });

    async function carregarCatalogoBebidas() {
        carregandoBebidas.value = true;

        await nextTick(async () => {
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
                        catalogoOrdinary.value.drinks.forEach((drink) => {
                            drink.strCategory = 'Ordinary Drink';
                        });

                        catalogoBebidas.value.drinks.push(
                            ...catalogoOrdinary.value.drinks
                        );
                    }

                    if (catalogoCocktail.value) {
                        catalogoCocktail.value.drinks.forEach((drink) => {
                            drink.strCategory = 'Cocktail';
                        });

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
                carregarBebidasFavoritas();
            }
        });

        carregandoBebidas.value = false;
    }

    const bebidasFavoritas = computed(() => {
        return catalogoBebidas.value.drinks.filter(
            (bebida) => bebida.isFavorita
        );
    });

    watch(
        bebidasFavoritas,
        (bebidas) => {
            localStorage.setItem('bebidasFavoritas', JSON.stringify(bebidas));
        },
        { deep: true }
    );

    function carregarBebidasFavoritas() {
        const bebidasFavoritas = localStorage.getItem('bebidasFavoritas');

        if (bebidasFavoritas) {
            const bebidasFavoritasJSON = JSON.parse(bebidasFavoritas);

            catalogoBebidas.value.drinks.forEach((bebida) => {
                bebida.isFavorita = bebidasFavoritasJSON.some(
                    (bebidaFavorita: any) =>
                        bebidaFavorita.idDrink === bebida.idDrink
                );
            });
        }
    }

    const filtroBusca = ref<string>('');
    const filtroCategoria = ref<FiltroCategoria>('');

    const catalogoBebidasFiltradas = computed(() => {
        const catalogoFiltrado: CatalogoBebidas = {
            drinks: [],
        };

        if (filtroCategoria.value === 'Favoritos') {
            catalogoFiltrado.drinks.push(
                ...catalogoBebidas.value.drinks.filter(
                    (bebida) => bebida.isFavorita
                )
            );
        } else if (filtroCategoria.value) {
            catalogoFiltrado.drinks.push(
                ...catalogoBebidas.value.drinks.filter(
                    (bebida) => bebida.strCategory === filtroCategoria.value
                )
            );
        } else {
            catalogoFiltrado.drinks.push(...catalogoBebidas.value.drinks);
        }

        if (filtroBusca.value) {
            catalogoFiltrado.drinks = catalogoFiltrado.drinks.filter((bebida) =>
                bebida.strDrink.toLowerCase().includes(filtroBusca.value)
            );
        }

        return catalogoFiltrado;
    });

    function setFiltroBusca(value: string) {
        filtroBusca.value = value;
    }

    function setFiltroCategoria(value: FiltroCategoria) {
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
        catalogoBebidas: catalogoBebidasFiltradas,
        bebidasFavoritas,
    };
});
