<template>
    <div class="header">
        <Logo class="logo" />
        <div class="filtros-container">
            <FiltroCategoria />
            <FiltroBusca class="filtro-busca" />
            <FiltroVisualizacao />
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from '~/components/Logo.vue';
</script>

<style scoped lang="scss">
.header {
    box-sizing: border-box;
    padding: 0 8px;
    max-height: 20%;

    .logo {
        height: 100px;
    }

    .filtros-container {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        gap: 12px;

        .filtro-busca {
            flex-grow: 1;
        }
    }
}
</style>
