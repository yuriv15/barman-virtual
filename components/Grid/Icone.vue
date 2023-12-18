<template>
    <NuxtLink to="/grid" class="icone-container">
        <div class="item" v-for="n in 9" />
    </NuxtLink>
</template>

<style lang="scss" scoped>
.icone-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 30px;
    padding: 2px;

    &:hover {
        cursor: pointer;
        background-color: #555;
    }

    .item {
        width: 100%;
        height: 100%;
        border: 1px solid #cecece;
    }
}
</style>
<script setup lang="ts"></script>
