<template>
    <div class="botao-container">
        <svg
            :width="width"
            :height="width"
            xmlns="http://www.w3.org/2000/svg"
            @click="$emit('fechar')"
        >
            <line
                :x1="0.3 * width"
                :y1="0.3 * width"
                :x2="0.7 * width"
                :y2="0.7 * width"
                stroke="white"
                stroke-width="2"
            />
            <line
                :x1="0.7 * width"
                :y1="0.3 * width"
                :x2="0.3 * width"
                :y2="0.7 * width"
                stroke="white"
                stroke-width="2"
            />
        </svg>
    </div>
</template>

<script setup lang="ts">
defineEmits<{
    (e: 'fechar'): void;
}>();

withDefaults(
    defineProps<{
        width: number;
    }>(),
    {
        width: 50,
    }
);
</script>

<style scoped lang="scss">
.botao-container {
    display: flex;
    justify-content: flex-end;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #eeeeee66;
    }
}
</style>
