<template>
    <div class="header">
        <Logo />
    </div>
</template>

<script setup lang="ts">
import Logo from '~/components/Logo.vue';
</script>

<style scoped lang="scss">
.header {
    box-sizing: border-box;
    height: 100px;
    padding: 0 8px;
    max-height: 20%;
}
</style>
