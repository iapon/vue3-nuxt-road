<script setup>
import { useTimer } from './composables/timer';
const { timer, start, stop, clear } = useTimer()

</script>

<template>
    <div
        class="flex flex-col gap-6 items-center p-8 rounded-2xl shadow-xl h-full sm:min-w-sm  sm:max-w-3xl bg-white mt-4">
        <h2 class="font-bold text-4xl">Timer</h2>
        <div class="flex gap-2 py-8 text-6xl">
            <div class="flex gap-1">
                {{ `${timer.hours > 9 ? timer.hours : '0' + timer.hours}` }}
            </div>
            <div :class="timer.isRunnig ? 'dots' : ''">:</div>
            <div class="flex gap-1">
                {{ `${timer.minutes > 9 ? timer.minutes : '0' + timer.minutes}` }}
            </div>
            <div :class="timer.isRunnig ? 'dots' : ''">:</div>
            <div class="flex gap-1">
                {{ `${timer.seconds > 9 ? timer.seconds : '0' + timer.seconds}` }}
            </div>
        </div>
        <div class="flex gap-4 mt-4">
            <button
                class="cursor-pointer shadow-sm rounded-sm p-2 hover:bg-emerald-200 transition-all active:bg-emerald-400"
                @click="start">Старт</button>
            <button class="cursor-pointer shadow-sm rounded-sm p-2 hover:bg-red-200 transition-all active:bg-red-400"
                @click="stop">Стоп</button>
            <button class="cursor-pointer shadow-sm rounded-sm p-2 hover:bg-gray-400 transition-all active:bg-gray-600"
                @click="clear">Сброс</button>
        </div>
    </div>
</template>

<style>
.dots {
    animation: ticker 0.5s infinite alternate;
}

@keyframes ticker {

    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>