<template>
    <div v-if="!carregandoBebidas" class="page-container">
        <ListHeader />
        <ListItem
            v-for="bebida of catalogoBebidas.drinks"
            :key="bebida.idDrink"
            :bebida="bebida"
            @click="abrirDialogInformacoes(bebida.idDrink)"
        />
    </div>
    <div v-else />
    <DialogInformacoesBebida ref="dialogInformacoes" />
</template>

<script setup lang="ts">
import type { DialogInformacoesBebida } from '#components';

const bebidasStore = useBebidasStore();
const { carregandoBebidas, catalogoBebidas } = storeToRefs(bebidasStore);
const { carregarCatalogoBebidas } = useBebidasStore();

const dialogInformacoes = ref<InstanceType<typeof DialogInformacoesBebida>>();

const abrirDialogInformacoes = (idBebida: string) => {
    dialogInformacoes.value?.abrirDialog?.(idBebida);
};

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
