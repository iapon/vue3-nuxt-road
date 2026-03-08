<script setup async lang="ts">
import { useFetch } from './composables/useFetch';

const { data, loading, error, refetch } = await useFetch("https://jsonplaceholder.typicode.com/users") 
</script>


<template>
    <Transition name="fade">
        <ul v-if="!loading" class="flex flex-col gap-4 justify-center">
            <li v-for="user in data" class="flex gap-1 p-4 border border-gray-200 shadow-md rounded-md">
                <div class="min-w-12 text-xl">ID: {{ user.id }}</div>
                <div class="mx-4 my-1 max-h-screen min-h-full bg-slate-200 border-l"></div>
                <div class="flex-1">{{ user.name }}</div>
            </li>
        </ul>
        <div v-else class="text-2xl text-green">
            Загрузка..
        </div>
    </Transition>
    <div v-if="error" class="text-2xl text-red">{{ error }}</div>


</template>
<style scoped>
.v-enter,
.v-leave-to {
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: 0.5s;
}
</style>