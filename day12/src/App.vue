<script setup lang="ts">
import Counter from './Counter.vue';

</script>

<template>
    <div class="flex flex-col items-center min-h-dvh min-w-dvw bg-gray-100">
        <div class="grid grid-cols-2 gap-12 items-center justify-center mt-4">
            <Counter :min="0" :max="100" />
            <Counter :initial="10" :min="5" :max="15" />
        </div>

    </div>
</template>

<style scoped></style>
