<template>
    <div class="filtro-container">
        <div class="input-container">
            <input
                type="text"
                placeholder="Pesquisar por nome..."
                aria-label="Pesquisar por nome"
                aria-describedby="botao-pesquisar"
                v-model="filtro"
                @keyup.enter="setFiltroBusca(filtro)"
            />
            <IconeFechar
                v-if="filtro"
                class="icone-fechar"
                @click="limparFiltro"
                :width="30"
            />
        </div>
        <button
            type="button"
            id="botao-pesquisar"
            @click="setFiltroBusca(filtro)"
        >
            Pesquisar
        </button>
    </div>
</template>

<script setup lang="ts">
const filtro = ref('');

const bebidasStore = useBebidasStore();
const { setFiltroBusca } = bebidasStore;

function limparFiltro() {
    setFiltroBusca('');
    filtro.value = '';
}
</script>

<style scoped lang="scss">
.filtro-container {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 50px;

    .input-container {
        position: relative;
        flex-grow: 1;
        height: 100%;
        display: flex;
        align-items: center;

        input {
            flex-grow: 1;
            height: 100%;
            font-size: 1.1rem;
            border-radius: 5px;
            border: 1px solid #cecece;
            background-color: #2c2c2c;
            padding: 0 45px 0 12px;
        }

        .icone-fechar {
            position: absolute;
            right: 10px;
        }
    }

    button {
        font-size: 1.1rem;
        height: 100%;
        width: 100px;
        background-color: #666;
        border-radius: 5px;
        border: 1px solid #cecece;

        &:hover {
            background-color: #555;
            cursor: pointer;
        }
    }
}
</style>
