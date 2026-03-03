<!-- - Props: name (обязательный), email (по умолчанию 'email@example.com'), role (по умолчанию 'user')
- Если avatar не передан — показать круг с первой буквой имени
- Роль отображается в цветном бейдже
- Карточка имеет рамку и отступы -->

<script setup>

defineProps({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        default: 'email@example.com',
    },
    role: {
        type: String,
        default: 'user',
    },
    avatar: {
        type: String
    }
})

</script>

<template>
    <div class="flex flex-col w-full h-full max-h-sm max-w-md rounded-2xl shadow-2xl p-4 mt-8 bg-white">
        <div class="flex gap-1 relative">
            <img class="w-16 h-16 rounded-full" v-if="avatar" :src="avatar" alt="avatar">
            <div v-else class="rounded-full bg-gray-600 w-16 h-16 p-2 flex justify-center items-center">
                <span class="text-2xl text-white">{{ name[0].toUpperCase() }}</span>
            </div>
            <div class="flex ml-4 flex-col justify-between items-start">
                <span class="text-md ml-4 truncate">{{ name }}</span>
                <span class="text-xl  ml-4 truncate">{{ email }}</span>

            </div>
            <span class="absolute -top-1 rounded-xl -right-1 px-3 py-1 bg-slate-600 text-white">{{ role }}</span>

        </div>
    </div>
</template>