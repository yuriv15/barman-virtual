<template>
    <div v-if="open" class="dialog-container" @click.self="fecharDialog">
        <div v-if="bebida && !pending" class="dialog">
            <div class="dialog-header">
                <span class="dialog-titulo-container">
                    <IconeFavorito
                        :isFavorito="bebida.isFavorita"
                        @favoritar="toggleFavorito(bebida.idDrink)"
                    />
                    <span class="dialog-titulo">{{ bebida.strDrink }}</span>
                </span>
                <IconeFechar @fechar="fecharDialog" />
            </div>
            <div class="dialog-body">
                <div class="dialog-body-imagem">
                    <NuxtImg
                        :src="bebida.strDrinkThumb"
                        :alt="bebida.strDrink"
                        class="thumb-bebida"
                        :id="bebida.idDrink"
                    />
                </div>
                <div class="dialog-body-informacoes">
                    <div class="dialog-body-informacoes-item">
                        <span class="dialog-body-informacoes-item-titulo">
                            Categoria:
                        </span>
                        <span class="dialog-body-informacoes-item-valor">
                            {{ bebida.strCategory || 'Não informado' }}
                        </span>
                    </div>
                    <div class="dialog-body-informacoes-item">
                        <span class="dialog-body-informacoes-item-titulo">
                            Tipo de vidro:
                        </span>
                        <span class="dialog-body-informacoes-item-valor">
                            {{ bebida.strGlass || 'Não informado' }}
                        </span>
                    </div>
                    <div class="dialog-body-informacoes-item">
                        <span class="dialog-body-informacoes-item-titulo">
                            Ingredientes:
                        </span>
                        <span class="dialog-body-informacoes-item-valor">
                            {{ ingredientesString || 'Não informado' }}
                        </span>
                    </div>
                    <div class="dialog-body-modo-preparo-item">
                        <span class="dialog-body-informacoes-item-titulo">
                            Modo de preparo:
                        </span>
                        <span class="dialog-body-informacoes-item-valor">
                            {{ bebida.strInstructions || 'Não informado' }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="dialog-footer">
                <button class="dialog-footer-botao" @click="fecharDialog">
                    Fechar
                </button>
            </div>
        </div>
        <Loading ocupa-toda-altura v-else />
    </div>
</template>

<script setup lang="ts">
import type CatalogoBebidas from '~/interfaces/bebidas';
import type { Drink } from '~/interfaces/bebidas';

const open = ref(false);
const idDrink = ref<string | null>(null);

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php';
const {
    pending,
    data: catalogo,
    error,
} = await useLazyFetch<CatalogoBebidas>(url, {
    query: {
        i: idDrink,
    },
    immediate: false,
});

if (error.value) {
    throw createError({
        message: error.value.message,
        statusCode: error.value.statusCode,
        fatal: true,
    });
}

const bebida = computed<Drink | undefined>(() => {
    const resultado = catalogo.value?.drinks?.[0];
    if (resultado) {
        return {
            ...resultado,
            isFavorita: bebidasFavoritas.value.some(
                (bebida) => bebida.idDrink === resultado.idDrink
            ),
        };
    }
});

const chavesIngredientes = computed<string[]>(() => {
    const chaves = Object.keys(bebida.value ?? {});
    return chaves.filter((chave) => chave.startsWith('strIngredient'));
});

const ingredientesString = computed<string>(() => {
    const ingredientes = chavesIngredientes.value
        .map((chave) => bebida.value?.[chave])
        .filter((ingrediente) => ingrediente !== null && ingrediente !== '');
    return ingredientes.join(', ');
});

let keydownHandler: (event: KeyboardEvent) => void;

function abrirDialog(id: string) {
    idDrink.value = id;
    open.value = true;

    keydownHandler = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            fecharDialog();
        }
    };

    window.addEventListener('keydown', keydownHandler);
}

function fecharDialog() {
    open.value = false;

    if (keydownHandler) {
        window.removeEventListener('keydown', keydownHandler);
    }
}

const bebidasStore = useBebidasStore();
const { bebidasFavoritas } = storeToRefs(bebidasStore);
const { toggleFavorito } = bebidasStore;

defineExpose({
    abrirDialog,
});
</script>

<style scoped lang="scss">
.dialog-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: #00000066;
    display: flex;
    justify-content: center;
    align-items: center;

    .dialog {
        width: 600px;
        max-width: 100%;
        background-color: #212121;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        box-shadow: 0 0 4px 2px rgba(157, 157, 157, 0.41);

        .dialog-header {
            padding: 24px;
            border-bottom: 1px solid #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .dialog-titulo-container {
                display: flex;
                align-items: center;
                gap: 12px;

                .dialog-titulo {
                    font-size: 1.3rem;
                }
            }
        }

        .dialog-body {
            display: flex;
            flex-direction: column;
            max-height: 800px;
            overflow: auto;
        }

        .dialog-body-imagem {
            width: 100%;
            box-sizing: border-box;
            padding: 24px;
            display: flex;
            justify-content: center;

            .thumb-bebida {
                width: 50%;
                aspect-ratio: 1/1;
                object-fit: cover;
            }
        }

        .dialog-body-informacoes {
            padding: 24px;
            display: flex;
            flex-direction: column;

            .dialog-body-informacoes-item {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin: 12px 0;

                .dialog-body-informacoes-item-titulo {
                    font-weight: bold;
                }

                .dialog-body-informacoes-item-valor {
                    text-align: end;
                }
            }

            .dialog-body-modo-preparo-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 12px;
                margin: 20px 0;

                .dialog-body-informacoes-item-titulo {
                    font-weight: bold;
                    font-size: 1.2rem;
                }
            }
        }

        .dialog-footer {
            padding: 24px;
            border-top: 1px solid #ccc;
            display: flex;
            justify-content: flex-end;

            .dialog-footer-botao {
                padding: 8px 12px;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                font-size: 1.2rem;
                background-color: #666;
                border-radius: 5px;
                border: 1px solid #cecece;

                &:hover {
                    background-color: #555;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .dialog {
            width: 95%;
            height: 95%;

            .dialog-header {
                padding: 12px 24px;
            }

            .dialog-body {
                padding: 12px 24px;
            }

            .dialog-body-imagem {
                padding: 0;
            }

            .dialog-body-informacoes {
                padding: 0;
            }

            .dialog-footer {
                padding: 12px 24px;
            }
        }
    }
}
</style>
