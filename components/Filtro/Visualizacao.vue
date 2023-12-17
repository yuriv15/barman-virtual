<template>
    <div class="icones-container">
        <ListIcone :class="{ iconeAtivo: modoLista }" />
        <div class="linha-vertical" />
        <GridIcone :class="{ iconeAtivo: !modoLista }" />
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const rotaAtual = computed(() => router.currentRoute.value.name);
const modoLista = computed(() => rotaAtual.value === 'index');
</script>

<style scoped lang="scss">
.icones-container {
    display: flex;
    gap: 8px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #cecece;
    background-color: #2c2c2c;
    padding: 8px;

    .linha-vertical {
        width: 1px;
        height: 100%;
        border: 1px solid #cecece;
    }

    .iconeAtivo {
        background-color: #795548aa;
    }
}
</style>
