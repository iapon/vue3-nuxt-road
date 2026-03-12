<script setup lang="ts">
interface HeaderLinks {
    title: string,
    link: string

}
const props = defineProps<HeaderLinks[]>()

</script>

<template>
    <div class="flex flex-end gap-2 p-4 h-10 w-full bg-white shadow-sm">
        <!-- <div> there will be logo</div> -->
        <div class="p-2" v-for="link in props">
            <NuxtLink :to="link.link">
                {{ link.title }}
            </NuxtLink>
        </div>
    </div>

</template>