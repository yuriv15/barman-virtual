<template>
    <div class="header">
        <Logo class="logo" />
        <div class="filtros-container">
            <FiltroCategoria class="filtro-categoria" />
            <FiltroBusca class="filtro-busca" />
            <FiltroVisualizacao class="filtro-visualizacao" />
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

        @media (max-width: 768px) {
            display: grid;
            grid-template-areas:
                'filtro-categoria filtro-categoria filtro-categoria filtro-visualizacao'
                'filtro-busca filtro-busca filtro-busca filtro-busca';
            gap: 8px;

            .filtro-categoria {
                grid-area: filtro-categoria;
            }

            .filtro-busca {
                flex-grow: 0;
                grid-area: filtro-busca;
                display: flex;
                gap: 0;
            }

            .filtro-visualizacao {
                grid-area: filtro-visualizacao;
                justify-self: end;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;

        .logo {
            height: 80px;
        }
    }
}
</style>
