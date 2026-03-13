<script setup lang="ts">
useHead({
    title: 'Блог'
})

const { posts } = usePosts();
</script>

<template>
    <div class="flex flex-col h-full min-h-dvh min-w-dvw w-full">
        <AppHeader :items="[{ link: '/', title: 'На главную' }]" />
        <div class="flex justify-center h-full w-full">
            <div class="flex flex-col gap-8 p-4 h-full max-w-7xl">
                <h2 class="font-bold text-2xl">Записи блога</h2>
                <div class="grid grid-cols-3 gap-8">
                    <div v-for="post in posts">
                        <NuxtLink :to="`/blog/${post.id}`">
                            <PostItem :id="post.id" :description="post.description" :title="post.title" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>