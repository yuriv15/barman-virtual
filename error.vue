<template>
    <div class="error-container">
        <h1>{{ error.statusCode }}</h1>
        <h2>Ooops. {{ error.message }}</h2>
        <img src="assets/error.png" alt="Barman triste" />
        <NuxtLink to="/" class="link">Ir para onde tenho acesso</NuxtLink>
    </div>
</template>

<script setup lang="ts">
defineProps(['error']);
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.error-container {
    min-height: 100vh;
    min-height: 100dvh;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    img {
        width: 500px;
        max-width: 100%;
        aspect-ratio: 1/1;
    }

    .link {
        background: #333333;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 1.2rem;

        &:hover {
            background: #444444;
        }
    }
}
</style>
