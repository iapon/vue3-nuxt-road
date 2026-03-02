<script setup>
import { ref } from 'vue';
const counter = ref(0);

const minus = () => {
    if (counter.value > 0) {
        counter.value--;
    }
};
const plus = () => {
    counter.value++;
};
const reset = () => {
    counter.value = 0;
};

</script>


<template>
    <div
        class="flex justify-center items-center flex-col gap-16 shadow-xl p-2 sm:p-8 rounded-xl  h-full sm:min-w-sm  sm:max-w-3xl bg-white mt-4 mx-2">
        <h2 class="font-bold text-4xl">Счётчик</h2>
        <div class="text-9xl font-bold">
            {{ counter }}
        </div>
        <div class="flex gap-4 mt-4">
            <button
                class="cursor-pointer shadow-sm rounded-sm p-2 px-4 hover:bg-red-200 transition-all active:bg-red-400"
                @click="minus" :disabled="counter <= 0">-</button>
            <button class="cursor-pointer shadow-sm rounded-sm p-2 hover:bg-gray-400 transition-all active:bg-gray-600"
                @click="reset" :disabled="counter <= 0">Сброс</button>
            <button
                class="cursor-pointer shadow-sm rounded-sm p-2 px-4 hover:bg-emerald-200 transition-all active:bg-emerald-400"
                @click="plus">+</button>
        </div>
    </div>

</template>
