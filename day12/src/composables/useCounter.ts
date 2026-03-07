import { ref } from "vue";

export const useCounter = (initialValue: number = 0, min?: number, max?: number) => {
  const count = ref<number>(initialValue);
  const increment = () => {
    if (!max && max != 0) {
      count.value++;
      return;
    }
    if (count.value < max) count.value++;
  };
  const decrement = () => {
    if (!min && min != 0) {
      count.value--;
      return;
    }
    if (count.value > min) count.value--;
  };
  const reset = () => {
    count.value = initialValue;
  };
  return { count, increment, decrement, reset };
};
