<template>
    <div class="layout-container">
        <Header />
        <slot class="body" />
        <Footer />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout-container {
    display: flex;
    flex-direction: column;

    .body {
        flex: 1;
    }
}
</style>
