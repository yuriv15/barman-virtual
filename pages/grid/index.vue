<template>
    <div v-if="!carregandoBebidas" class="page-container">
        <GridItem
            v-for="bebida in catalogoBebidas.drinks"
            :key="bebida.idDrink"
            :bebida="bebida"
        />
    </div>
    <div v-else />
</template>

<script setup lang="ts">
const bebidasStore = useBebidasStore();
const { carregandoBebidas, catalogoBebidas } = storeToRefs(bebidasStore);
const { carregarCatalogoBebidas } = useBebidasStore();

onMounted(async () => {
    await carregarCatalogoBebidas();
});
</script>

<style scoped lang="scss">
.page-container {
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
}
</style>
