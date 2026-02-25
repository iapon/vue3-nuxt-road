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
    <div class="container">
        <div class="counter">
            {{ counter }}
        </div>
        <div class="buttons">
            <button @click="minus" :disabled="counter <= 0">-</button>
            <button @click="reset" :disabled="counter <= 0">Сброс</button>
            <button @click="plus">+</button>
        </div>
    </div>

</template>
