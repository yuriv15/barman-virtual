<template>
    <div v-if="!carregandoBebidas" class="page-container">
        <GridItem
            v-for="bebida in catalogoBebidas.drinks"
            :key="bebida.idDrink"
            :bebida="bebida"
            @click="abrirDialogInformacoes(bebida.idDrink)"
        />
    </div>
    <Loading v-else />
    <DialogInformacoesBebida ref="dialogInformacoes" />
</template>

<script setup lang="ts">
import type { DialogInformacoesBebida } from '#components';

defineComponent({
    prerender: false,
});

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

<style scoped lang="scss">
.page-container {
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
}
</style>
