<script setup lang="ts">
import type { PostItem } from '../types/post'
const props = defineProps<PostItem>();
</script>
<template>
    <div class="flex flex-col gap-4 relative px-8 py-4 h-full w-full shadow-md rounded-md">
        <span class="absolute right-1 top-1 p-1 h-6 w-6 text-center text-xs bg-green-200 rounded-full">
            {{ props.id }}
        </span>
        <span class="font-bold">{{ props.title }}</span>
        <p>{{ props.description }}</p>
    </div>
</template>
