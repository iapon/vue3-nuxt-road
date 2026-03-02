import { onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export const useTimer = () => {
    const timer = useLocalStorage("timer", { hours: 0, minutes: 0, seconds: 0, isRunnig: false })
    let ticker = 0;
    const tick = () => {
        if (timer.value.seconds < 60) {
            timer.value.seconds++;
        }
        if (timer.value.seconds == 60) {
            timer.value.seconds = 0;
            if (timer.value.minutes < 60) {
                timer.value.minutes++;
            }
            if (timer.value.minutes == 60) {
                timer.value.minutes = 0;
                timer.value.hours++;
            }
        }
    }
    const start = (init) => {
        if (!init && timer.value.isRunnig) return
        timer.value.isRunnig = true;
        ticker = setInterval(tick, 1000)
    }
    const stop = (init) => {
        if (init && !timer.value.isRunnig) return
        timer.value.isRunnig = false;
        clearInterval(ticker)
    }
    const clear = () => {
        clearInterval(ticker)
        timer.value = { hours: 0, minutes: 0, seconds: 0, isRunnig: false };

    }
    onMounted(() => {
        if (timer.value.isRunnig) start(true)
    })
    return { timer, start, stop, clear }
}