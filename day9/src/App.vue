<script setup lang="ts">
import { ref } from 'vue'
import Rating from './Rating.vue';
const rating = ref(0);
</script>

<template>
  <div class="flex flex-col items-center gap-10">
    <Rating v-model="rating" />
    <p>Ваша оценка: {{ rating }} из 5</p>
  </div>
</template>

<style scoped></style>
