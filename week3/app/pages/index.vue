<script setup lang="ts">
useHead({
    title: 'Мой блог',
})
</script>
<template>
    <div>
        <AppHeader :items="[{ link: '/about', title: 'Обо мне' }, { link: '/blog', title: 'Блог' }]" />
    </div>
</template>