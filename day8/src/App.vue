<script setup>
import UserCard from './UserCard.vue';

const users = [{
  id: 1,
  name: "John Doe",
},
{
  id: 2,
  name: "John Doe",
  email: "john@email.com",
  role: "user",
  avatar: "https://i.pravatar.cc/300"
},
{
  id: 3,
  name: "Super Admin",
  email: "admin@email.com",
  role: "admin",
  avatar: "https://i.pravatar.cc/300",
}
]
</script>

<template>
  <div class="flex flex-col items-center bg-gray-200 min-h-dvh min-w-dvw">
    <UserCard v-for="user in users" :key="user.id" :name="user.name" :email="user.email" :role="user.role"
      :avatar="user.avatar" />
  </div>
</template>

<style scoped></style>
