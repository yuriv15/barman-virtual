<template>
    <select
        name="filtroCategoria"
        id="filtroCategoria"
        :value="filtroCategoria"
        @change="setFiltroCategoria($event.target.value)"
    >
        <option v-for="option of options" :value="option">
            {{ option || 'Todas' }}
        </option>
    </select>
</template>

<script setup lang="ts">
import type { FiltroCategoria } from '~/interfaces/filtros';

const options: FiltroCategoria[] = [
    '',
    'Ordinary Drink',
    'Cocktail',
    'Favoritos',
];

const bebidasStore = useBebidasStore();
const { filtroCategoria } = storeToRefs(bebidasStore);
const { setFiltroCategoria } = bebidasStore;
</script>

<style scoped lang="scss">
select {
    width: 160px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #cecece;
    padding: 0 10px;
    font-size: 1.1rem;
    background-color: #2c2c2c;
}
</style>
