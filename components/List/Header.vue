<template>
    <div class="header-container">
        <span class="header">Bebida</span>
        <span class="header">Categoria</span>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    height: 90px;
    max-height: 20%;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.09);
    border-bottom: 1px solid #ccc;

    .header {
        width: 50%;
        font-size: 1.5rem;
        font-weight: bold;
    }
}
</style>
