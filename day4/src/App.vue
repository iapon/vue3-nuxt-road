<script setup>
import Todo from './Todo.vue';
</script>


<template>
  <div class="container">
    <Todo />
  </div>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  gap: 1rem;
}
</style>