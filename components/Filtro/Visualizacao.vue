<template>
    <div class="icones-container">
        <ListIcone />
        <div class="linha-vertical" />
        <GridIcone />
    </div>
</template>

<script setup lang="ts"></script>

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
}
</style>
