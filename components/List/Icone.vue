<template>
    <NuxtLink to="/" class="icone-container">
        <div class="line" v-for="n in 3" />
    </NuxtLink>
</template>

<style lang="scss" scoped>
.icone-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 30px;
    padding: 8px 4px;

    &:hover {
        cursor: pointer;
        background-color: #555;
    }

    .line {
        width: 100%;
        height: 1px;
        border: 1px solid #cecece;
    }
}
</style>
