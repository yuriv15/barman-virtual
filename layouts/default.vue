<template>
    <div>
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<script setup lang="ts">
const { setFiltroBusca, setFiltroCategoria } = useBebidasStore();
</script>
