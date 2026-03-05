<script setup lang="ts">
interface CardProps {
    title?: String
}
defineProps<CardProps>()
</script>



<template>
    <div class="w-md shadow-md rounded-2xl flex flex-col gap-2 p-8 border-gray-100 border">
        <div class="w-full">
            <slot name="header">{{ title }}</slot>
        </div>
        <div class="flex-1">
            <slot>
                <p>
                    Это текст по умолчанию
                </p>
            </slot>
        </div>
        <div class="mt-auto" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>