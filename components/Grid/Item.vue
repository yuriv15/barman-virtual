<template>
    <div class="item-container" :class="{ favoritado: bebida.isFavorita }">
        <div class="imagem-container">
            <IconeFavorito
                class="icone-favorito"
                :class="{ visivel: bebida.isFavorita }"
                :isFavorito="bebida.isFavorita"
                @favoritar="toggleFavorito(bebida.idDrink)"
                :width="200"
            />
            <NuxtImg
                :src="bebida.strDrinkThumb"
                :alt="bebida.strDrink"
                class="thumb-bebida"
                :id="bebida.idDrink"
            />
        </div>
        <div class="info-container">
            <label :for="bebida.idDrink">{{ bebida.strDrink }}</label>
            <span class="categoria">{{ bebida.strCategory }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Drink } from '~/interfaces/bebidas';

defineProps<{
    bebida: Drink;
}>();

const bebidasStore = useBebidasStore();
const { toggleFavorito } = bebidasStore;
</script>

<style scoped lang="scss">
.item-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    background: #1f1f1f;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    width: 90%;
    aspect-ratio: 1/1.4;
    position: relative;
    border: 1px solid #333;
    box-shadow: inset 0 0 20px 10px #333;

    .imagem-container {
        position: relative;
        display: flex;
        justify-content: center;

        .icone-favorito {
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            z-index: 10;
            opacity: 0;

            &.visivel,
            &:hover {
                opacity: 1;
            }
        }

        .thumb-bebida {
            max-width: 90%;
            aspect-ratio: 1/1;
            border-radius: 50%;
            transition: all 0.3s ease-in-out;
        }
    }

    label {
        font-size: 1.1rem;
        font-weight: bold;
        text-align: center;
        color: #fff;
    }

    &:hover {
        cursor: pointer;

        .thumb-bebida {
            transform: scale(1.1);
            border-radius: 10%;
        }
    }

    .info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        .categoria {
            font-size: 0.9rem;
            color: #ccc;
        }
    }
}
</style>
