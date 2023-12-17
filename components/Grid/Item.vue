<template>
    <div class="item-container" :class="{ favoritado: bebida.isFavorita }">
        <IconeCoracao
            class="icone-favorito"
            :isFavorito="bebida.isFavorita"
            @favoritar="toggleFavorito(bebida.idDrink)"
        />
        <NuxtImg
            :src="bebida.strDrinkThumb"
            :alt="bebida.strDrink"
            class="thumb-bebida"
            :id="bebida.idDrink"
        />
        <label :for="bebida.idDrink">{{ bebida.strDrink }}</label>
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
    aspect-ratio: 1/1.5;
    position: relative;
    border: 1px solid #333;
    box-shadow: inset 0 0 20px 10px #333;

    .icone-favorito {
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 10;
    }

    .thumb-bebida {
        max-width: 90%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
    }

    label {
        font-size: 1.3rem;
        font-weight: bold;
        text-align: center;
        color: #fff;
    }

    &:hover {
        .thumb-bebida {
            transform: scale(1.1);
            border-radius: 20%;
        }

        label {
            cursor: pointer;
        }
    }
}
</style>
