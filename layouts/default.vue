<template>
    <div class="layout-container">
        <Header />
        <div class="body">
            <slot />
        </div>
        <Footer class="footer" />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    min-height: 100vh;

    .body {
        margin: 24px 0;
        flex: 1;
    }

    .footer {
        margin-top: auto;
    }
}
</style>
