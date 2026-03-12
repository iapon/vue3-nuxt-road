<script setup lang="ts">
import { Teleport } from 'vue';
interface MyModalProps {
    isOpen: boolean
    title?: string
}
const props = defineProps<MyModalProps>();
const emits = defineEmits(['close'])


</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="isOpen" @click.prevent.self=" $emit('close')" class="
                overflow-hidden
                z-50
                flex
                flex-col
                items-center
                justify-center
                fixed
                right-0
                top-0
                h-full
                w-full
                bg-gray-700/50
            ">
                <div class="overflow-hidden py-10 h-full max-h-160 max-w-xl w-full">
                    <div class="overflow-hidden flex flex-col relative h-full bg-white shadow-sm rounded-md">
                        <div class="
                            absolute
                            right-3
                            top-3
                            px-4
                            py-2
                            border
                            border-gray-200
                            shadow-sm
                            transition-colors
                            cursor-pointer
                            active:bg-gray-700
                            hover:bg-gray-500
                            hover:text-white
                            rounded-md
                        " @click="$emit('close')">
                            X</div>
                        <div class="flex flex-col gap-8 p-8 h-[85%]">
                            <h3 class="self-start text-xl">{{ props.title }}</h3>
                            <div class="overflow-scroll flex flex-col gap-4 mt-16">
                                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nemo nostrum
                                    incidunt.
                                    Similique alias deleniti nisi perferendis temporibus culpa iusto! Sed quasi totam
                                    consequatur distinctio excepturi tenetur voluptates, cupiditate maxime.</p>

                                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nemo nostrum
                                    incidunt.
                                    Similique alias deleniti nisi perferendis temporibus culpa iusto! Sed quasi totam
                                    consequatur distinctio excepturi tenetur voluptates, cupiditate maxime.</p>
                                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nemo nostrum
                                    incidunt.
                                    Similique alias deleniti nisi perferendis temporibus culpa iusto! Sed quasi totam
                                    consequatur distinctio excepturi tenetur voluptates, cupiditate maxime.</p>
                                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nemo nostrum
                                    incidunt.
                                    Similique alias deleniti nisi perferendis temporibus culpa iusto! Sed quasi totam
                                    consequatur distinctio excepturi tenetur voluptates, cupiditate maxime.</p>
                                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nemo nostrum
                                    incidunt.
                                    Similique alias deleniti nisi perferendis temporibus culpa iusto! Sed quasi totam
                                    consequatur distinctio excepturi tenetur voluptates, cupiditate maxime.</p>
                                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nemo nostrum
                                    incidunt.
                                    Similique alias deleniti nisi perferendis temporibus culpa iusto! Sed quasi totam
                                    consequatur distinctio excepturi tenetur voluptates, cupiditate maxime.</p>

                            </div>
                        </div>
                        <div class="flex flex-row-reverse p-4 w-full">
                            <button class="
                                self-end
                                px-4
                                py-2
                                border
                                border-gray-200
                                shadow-sm
                                transition-colors
                                cursor-pointer
                                active:bg-gray-700
                                hover:bg-gray-500
                                hover:text-white
                                rounded-md
                            " @click="$emit('close')">Закрыть</button>
                        </div>
                    </div>
                </div>

            </div>
        </Transition>
    </Teleport>

</template>

<style scoped>
.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>