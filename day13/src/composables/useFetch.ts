import { ref } from "vue";
import type { User } from "@/types/user";
// Требования к composables/useFetch.js:

// - Принимает URL как параметр
// - Возвращает: data, loading, error, refetch()
// - Автоматически загружает данные при вызове
// - Обрабатывает ошибки сети

export const useFetch = async (url: string) => {
  const loading = ref(false);
  const error = ref("");
  const data = ref<User[]>([]);
  const refetch = async () => {
    try {
      loading.value = true;
      const fetched = await fetch(url);
      data.value = await fetched.json();
      error.value = "";
    } catch (err: any) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };
  refetch();
  console.log(loading.value);
  return { data, loading, error, refetch };
};
