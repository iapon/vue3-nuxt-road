<script setup lang="ts">
import { ref } from 'vue';
import MyModal from './MyModal.vue';
const modalOpen = ref(false);

</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-dvh">
        <button
            class="px-4 py-2 border border-gray-200 shadow-sm transition-colors cursor-pointer active:bg-gray-700 hover:bg-gray-500 hover:text-white rounded-md"
            @click="modalOpen = !modalOpen">Открыть
            модальное окно</button>
        <MyModal @close="modalOpen = false" :is-open="modalOpen" title="Модальное окно" />
    </div>
</template>

<style scoped></style>
