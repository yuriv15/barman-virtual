<template>
    <div class="loading">
        <div class="spinner"></div>
    </div>
</template>

<style scoped lang="scss">
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

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
