<template>
    <div class="logo-container" @click="$router.push('/')">
        <img
            src="~/assets/barman-virtual.png"
            alt="logo barman virtual"
            class="imagem-logo"
        />

        <h1>Barman Virtual</h1>
    </div>
</template>

<style scoped lang="scss">
.logo-container {
    display: flex;
    align-items: center;
    color: #fff;

    &:hover {
        cursor: pointer;
    }

    .imagem-logo {
        height: 80px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        padding: 8px;
        margin-right: 8px;
        mix-blend-mode: lighten;
    }
}
</style>
