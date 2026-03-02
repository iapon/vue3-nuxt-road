<script setup>
import { ref, computed } from 'vue';

const todoList = ref([]);
const newTodoText = ref('');

const addTodo = () => {
    if (newTodoText.value == '') {
        alert("Введите текст");
        return;
    }
    todoList.value.push({ id: 'item-' + new Date(), text: newTodoText.value, isDone: false });
    newTodoText.value = '';
}
const removeTodo = (id) => {
    todoList.value.splice(todoList.value.findIndex((i) => i.id == id), 1);
}
const handleKeyEnter = (e) => {
    if (e.key == 'Enter') addTodo();
}
const total = computed(() => { return todoList.value.length });
const totalDone = computed(() => { return todoList.value.filter((i) => i.isDone === true).length });

const currentFilter = ref('all');
const setFilter = (filter) => {
    currentFilter.value = filter
}
const filteredList = computed(() => {
    switch (currentFilter.value) {
        case 'active':
            return todoList.value.filter((i) => !i.isDone);
        case 'done':
            return todoList.value.filter((i) => i.isDone);
        default:
            return todoList.value
    }


})



</script>
<template>
    <div
        class="flex flex-col items-center shadow-xl rounded-xl p-8 mt-4 w-full h-full sm:min-w-sm  sm:max-w-3xl bg-white mx-2">
        <h2 class="font-bold text-4xl">Список задач</h2>
        <div class="flex gap-4 mt-4">
            <button class="cursor-pointer shadow-sm rounded-sm p-1 px-2 hover:bg-emerald-200 transition-all"
                @click="setFilter('all')" :class="currentFilter == 'all' ? 'bg-emerald-500' : ''">Все</button>
            <button class="cursor-pointer shadow-sm rounded-sm p-1 px-2 hover:bg-red-200 transition-all"
                @click="setFilter('active')" :class="currentFilter == 'active' ? 'bg-red-500' : ''">Активные</button>
            <button class="cursor-pointer shadow-sm rounded-sm p-1 px-2 hover:bg-gray-200 transition-all"
                @click="setFilter('done')" :class="currentFilter == 'done' ? 'bg-gray-500' : ''">Выполненные</button>
        </div>
        <div class="flex gap-2 mt-4 w-full">
            <input class="border rounded-sm flex-1" @keypress="handleKeyEnter" type="text" name="todotext"
                v-model="newTodoText">
            <button class="cursor-pointer shadow-sm rounded-sm p-1 px-2 hover:bg-emerald-200 transition-all"
                @click="addTodo">Добавить</button>
        </div>
        <div class="flex flex-col max-h-40 overflow-y-auto w-full gap-2 p-2">
            <div v-for="t in filteredList" :key="t.id" class="flex  gap-4 justify-center items-center">
                <input class="w-5 h-5" type="checkbox" v-model="t.isDone" />
                <span class="w-full flex-1" :class="t.isDone ? 'line-through' : ''">{{ t.text }}</span>
                <button
                    class="cursor-pointer shadow-sm rounded-sm p-1 px-2 hover:bg-red-500 active:bg-red-800 transition-all"
                    @click=" removeTodo(t.id)">x</button>
            </div>
        </div>
        <div class="flex gap-4">
            <span>Всего: {{ total }}</span>
            <span> | </span>
            <span>Выполнено: {{ totalDone }}</span>
        </div>
    </div>
</template>

<style scoped>
.list {

    & .item {

        & button {
            text-align: center;
            vertical-align: center;
            transition: all 0.5s ease;
            border: 0;
            border-radius: 20%;
            width: 1.25rem;
            height: 1.25rem;

            &:hover {
                background-color: gray;
            }
        }
    }
}
</style>
