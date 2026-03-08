<script setup lang="ts">
import UserList from './UserList.vue';

</script>

<template>
  <div class="flex flex-col items-center min-h-dvh min-w-dvw bg-gray-100">
    <div class="gap-12 items-center justify-center mt-4">
      <Suspense>
        <UserList />
      </Suspense>
    </div>

  </div>
</template>

<style scoped></style>
