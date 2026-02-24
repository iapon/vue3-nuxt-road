<template>
    <label v-if="!name" for="name">Введите ваше имя
        <input id="name" v-model.lazy="name" />
    </label>
    <p v-else>
        Привет, {{ name }}!
    </p>
</template>

<script setup>
import { ref } from 'vue';
const name = ref("");
</script>