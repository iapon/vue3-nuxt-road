<script setup lang="ts">
const route = useRoute()
const id = route.params.id
useHead({
    title: `Пост №${id}`,
})
const { getById } = usePosts();
const post = getById(Number(id));
</script>
<template>
    <div class="flex flex-col h-full min-h-dvh min-w-dvw w-full">
        <AppHeader :items="[{ link: '/', title: 'На главную' }, { link: '/blog', title: 'К списку' }]" />
        <div v-if="post" class="flex justify-center h-full w-full">
            <div class="flex flex-col gap-8 p-4 h-full max-w-lg">
                <h2 class="font-bold text-2xl">{{ post.title }}</h2>
                <p>{{ post.body }}
                </p>
            </div>
        </div>
    </div>

</template>