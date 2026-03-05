<script setup lang="ts">
import Card from './Card.vue';

</script>

<template>
  <div class="flex flex-col items-center min-h-dvh gap-12 mt-10">
    <Card title="Первая карточка">
      <template #default>
        <p class="text-xl font-bold">
          Это не текст по умолчанию
        </p>
      </template>
    </Card>
    <Card>
      <template #header>
        <h1 class="font-bold">ЭТО ТАЙТЛ!</h1>
      </template>
    </Card>
    <Card>
      <template #header>
        <h1 class="font-bold">ЭТО НОВЫЙ ТАЙТЛ!</h1>
      </template>
      <template #default>
        <p>
          Это всё еще не текст по умолчанию
        </p>
      </template>
      <template #footer>
        <p class="text-sm">
          Это футер
        </p>
      </template>
    </Card>
  </div>
</template>
