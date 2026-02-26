<script setup>
import { ref } from 'vue';

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
    const index = todoList.value.findIndex((i) => i.id == id);
    todoList.value.splice(index, 1);
}
const setTodoDone = (id) => {
    todoList.value.find(id).done = true;
}
const handleKeyEnter = (e) => {
    if (e.key == 'Enter') {
        addTodo();
    }
}
</script>
<template>
    <h2>Список задач</h2>
    <div class="action">
        <input @keypress="handleKeyEnter" type="text" name="todotext" v-model="newTodoText">
        <button @click="addTodo">Добавить</button>
    </div>
    <div class="list">
        <div v-for="t in todoList" :key="t.id" class="item">
            <input type="checkbox" v-model="t.done" @change="setTodoDone(t.id)" />
            <span :class="t.done ? 'done' : ''">{{ t.text }}</span>
            <button @click=" removeTodo(t.id)">x</button>
        </div>
    </div>


</template>

<style scoped>
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
