<script setup>
import Counter from '../../day2/src/Counter.vue'
import ToDo from '../../day4/src/Todo.vue'
import ColorPicker from '../../day5/src/ColorPicker.vue'
import Timer from '../../day6/src/Timer.vue'
</script>

<template>
  <div class="flex flex-col items-center bg-gray-100 min-h-dvh min-w-dvw">
    <h1 class="font-bold text-5xl">Первая неделя!</h1>
    <div class="grid grid-cols-2 items-center justify-center gap-12 mt-4">
      <Counter />
      <ToDo />
      <ColorPicker />
      <Timer />
    </div>

  </div>


</template>
