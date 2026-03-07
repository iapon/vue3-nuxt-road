<script setup lang="ts">
interface CounterProps {
    initial?: number,
    min?: number,
    max?: number,
}
import { useCounter } from './composables/useCounter'
const props = defineProps<CounterProps>()
const { count, increment, decrement, reset } = useCounter(props.initial, props.min, props.max);


</script>


<template>

    <div class="
        flex
        flex-col
        gap-16
        items-center
        justify-center
        mt-4
        mx-2
        p-2
        h-full
        bg-white
        shadow-xl
        rounded-xl
        sm:max-w-3xl
        sm:min-w-sm
        sm:p-8
    ">
        <h2 class="font-bold text-4xl">Счётчик</h2>
        <div class="font-bold text-9xl">
            {{ count }}
        </div>
        <div class="flex gap-4 mt-4">
            <button class="
                p-2
                px-4
                shadow-sm
                transition-all
                cursor-pointer
                active:bg-red-400
                hover:bg-red-200
                rounded-sm
            " @click="decrement">-</button>
            <button class="
                p-2
                shadow-sm
                transition-all
                cursor-pointer
                active:bg-gray-600
                hover:bg-gray-400
                rounded-sm
            " @click="reset">Сброс</button>
            <button class="
                p-2
                px-4
                shadow-sm
                transition-all
                cursor-pointer
                active:bg-emerald-400
                hover:bg-emerald-200
                rounded-sm
            " @click="increment">+</button>
        </div>
    </div>
</template>