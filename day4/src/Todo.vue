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
    <h2>Список задач</h2>
    <div class="filters">
        <button @click="setFilter('all')" :class="currentFilter == 'all' ? 'active' : ''">Все</button>
        <button @click="setFilter('active')" :class="currentFilter == 'active' ? 'active' : ''">Активные</button>
        <button @click="setFilter('done')" :class="currentFilter == 'done' ? 'active' : ''">Выполненные</button>
    </div>
    <div class="action">
        <input @keypress="handleKeyEnter" type="text" name="todotext" v-model="newTodoText">
        <button @click="addTodo">Добавить</button>
    </div>
    <div class="list">
        <div v-for="t in filteredList" :key="t.id" class="item">
            <input type="checkbox" v-model="t.isDone" />
            <span :class="t.isDone ? 'done' : ''">{{ t.text }}</span>
            <button @click=" removeTodo(t.id)">x</button>
        </div>
    </div>
    <div class="result">
        <span>Всего: {{ total }}</span>
        <span> | </span>
        <span>Выполнено: {{ totalDone }}</span>
    </div>

</template>

<style scoped>
.filters {
    display: flex;
    gap: 1rem;
    max-width: 15rem;

    & .active {
        background-color: green;
    }
}

.action {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    max-width: 15rem;

    & input {
        flex: 1;
    }
}

.list {
    display: flex;
    flex-direction: column;
    max-height: 50rem;
    overflow-y: auto;
    min-width: 15rem;
    gap: 0.5rem;
    padding: 0.5rem;

    & .item {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
        align-items: center;

        & input {
            width: 1.25rem;
            height: 1.25rem;
        }

        & span {
            width: 100%;

            &.done {
                text-decoration: line-through;
            }
        }

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
