<script setup lang="ts">
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>


<template>
    <div class="flex flex-row-reverse  justify-end text-2xl text-gray-300 ">
        <span v-for="i in [5, 4, 3, 2, 1]" class="w-10 h-10 text-center relative inline-block text-5xl cursor-pointer 
              hover:text-yellow-400 
              [&:hover~span]:text-yellow-400" :class="props.modelValue > i - 1 ? 'text-yellow-400 ' : ''"
            @click="emit('update:modelValue', i == props.modelValue ? 0 : i)">☆</span>
    </div>
</template>
