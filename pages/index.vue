<template>
    <div v-if="!carregandoBebidas" class="page-container">
        <ListHeader />
        <ListItem
            v-for="bebida of catalogoBebidas.drinks"
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

<style lang="scss" scoped>
.page-container {
    display: flex;
    flex-direction: column;
}
</style>
