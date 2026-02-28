<script setup>
import { computed, ref } from 'vue';

const colors = ref(['green', 'slate', 'red', 'gray', 'yellow', 'cyan', 'orange', 'sky', 'zinc']);
const selectedColor = ref('');
const tailwindColor = (color) => {
    switch (color) {
        case 'green':
            return `bg-green-500`
        case 'slate':
            return `bg-slate-500`
        case 'red':
            return `bg-red-500`
        case 'gray':
            return `bg-gray-500`
        case 'yellow':
            return `bg-yellow-500`
        case 'cyan':
            return `bg-cyan-500`
        case 'orange':
            return `bg-orange-500`
        case 'sky':
            return `bg-sky-500`
        case 'zinc':
            return `bg-zinc-500`
    }

}
</script>

<template>
    <div class="flex gap-16 shadow-md p-8 rounded-xl">
        <div class="flex flex-col items-start px-4">
            <h2 class="font-bold">Выберите цвет:</h2>
            <div class="mt-8 grid grid-cols-3 gap-2">
                <button v-for="color in colors" :key="color"
                    :class="[tailwindColor(color), selectedColor == color ? 'outline-double' : '']"
                    class="w-12 h-12 rounded-full" @click="selectedColor = color"></button>
            </div>
        </div>
        <div class="flex flex-col items-start px-4">
            <h2 class="font-bold">Предпросмотр:</h2>
            <div :class="selectedColor ? `bg-${selectedColor}-500` : 'bg-transparent'"
                class="w-40 h-40 mt-8 rounded-xl"></div>
            <p class="mt-8 min-w-48">Выбран: {{ selectedColor }}</p>
        </div>
    </div>

</template>
