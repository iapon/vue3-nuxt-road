<script setup lang="ts">
interface CardProps {
    title?: string
}
defineProps<CardProps>()
</script>



<template>
    <div class="flex flex-col gap-2 p-8 w-md border border-gray-100 shadow-md rounded-2xl">
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