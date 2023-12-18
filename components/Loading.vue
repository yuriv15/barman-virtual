<template>
    <div class="loading" :style="style">
        <div class="spinner"></div>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        ocupaTodaAltura?: boolean;
    }>(),
    {
        ocupaTodaAltura: false,
    }
);

const style = computed(() => {
    return props.ocupaTodaAltura
        ? 'height: 100vh;'
        : 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);';
});
</script>

<style scoped lang="scss">
.loading {
    display: flex;
    justify-content: center;
    align-items: center;

    .spinner {
        border: 12px solid #3c3c3c00;
        border-top: 12px solid #3498db;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>
