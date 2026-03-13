<script setup lang="ts">
interface HeaderLinks {
    title: string,
    link: string

}
const props = defineProps<{ items: HeaderLinks[] }>()

</script>

<template>
    <div class="flex gap-2 justify-end px-4 h-10 w-full bg-white shadow-sm">
        <!-- <div> there will be logo</div> -->
        <div class="flex p-2" v-for="item in props.items">
            <NuxtLink :to="item.link">
                {{ item.title }}
            </NuxtLink>
        </div>
    </div>

</template>