<template>
    <div class="item-container" :class="{ favoritado: bebida.isFavorita }">
        <span class="item">
            <IconeFavorito
                class="icone-favorito"
                :isFavorito="bebida.isFavorita"
                @favoritar="toggleFavorito(bebida.idDrink)"
            />
            <span class="item-titulo">{{ bebida.strDrink }}</span>
        </span>

        <span class="item">
            {{ bebida.strCategory }}
        </span>
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
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    height: 80px;
    max-height: 20%;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #eeeeee66;
    }

    .item {
        .icone-favorito {
            width: 40px;
        }

        width: 50%;
        font-size: 1.1rem;
        display: flex;
        align-items: center;

        .item-titulo {
            margin-left: 12px;
        }
    }
}
</style>
