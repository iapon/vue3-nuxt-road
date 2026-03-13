import type { PostItem } from "~/types/post";
import { ref } from "vue";
export const usePosts = () => {
  const posts = ref<PostItem[]>([
    {
      id: 5,
      title: "Day 5: Цветовая палитра на Vue 3",
      body: "Создавал компонент ColorPicker — палитру из 9 цветов. При клике цвет выделяется двойной рамкой, квадрат 160x160px плавно меняет цвет. Использовал динамические классы Tailwind и transition для анимации. Сделал даже больше, чем требовалось — добавил предпросмотр с плавным переходом.",
      description:
        "Компонент ColorPicker с выбором цвета и анимированным предпросмотром",
    },
    {
      id: 7,
      title: "Day 7: Недельный проект — сетка виджетов",
      body: "Итог первой недели — страница с 4 виджетами: Counter, TodoList, ColorPicker, Timer. Каждый в отдельном компоненте, всё собрано в CSS Grid. Импортировал все созданные компоненты за неделю в один App.vue. Самый сложный момент — продумать стилизацию, чтобы всё выглядело аккуратно.",
      description: "Собираем все компоненты недели в единую сетку виджетов 2x2",
    },
    {
      id: 12,
      title: "Day 12: Composables — переиспользуемая логика",
      body: "Изучал composables — ключевую фичу Vue 3. Создал useCounter.ts с функциями increment, decrement, reset и опциональными параметрами min/max. Логика полностью переиспользуемая — можно создавать сколько угодно независимых счётчиков с разными настройками. Counter.vue получает параметры через props.",
      description:
        "Пишем composable useCounter для переиспользуемой логики счётчика",
    },
  ]);
  const getById = (id: number) => {
    return posts.value.find((val: PostItem) => val.id == id) || null;
  };
  return { posts, getById };
};
