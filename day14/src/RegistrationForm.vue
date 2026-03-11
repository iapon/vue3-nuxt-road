<!-- - Поля: email, password, confirmPassword
- Валидация email: обязателен, содержит @
- Валидация password: обязателен, минимум 6 символов
- Валидация confirmPassword: должен совпадать с password
- Ошибки показываются ПОСЛЕ первой отправки формы
- Кнопка отправки активна только если форма валидна
- При успешной отправке — alert('Регистрация успешна!') -->

<script setup lang="ts">
import { ref } from 'vue';


interface FormValues {
    email: FormValue
    password: FormValue
    confirmPassword: FormValue
}
interface FormValue {
    value: string
    isValid: boolean
    error?: string
}
const form = ref<FormValues>({
    email: {
        value: '',
        isValid: false,
    },
    password: {
        value: '',
        isValid: false,
    },
    confirmPassword: {
        value: '',
        isValid: false,
    },
})
const validate = () => {
    if (!form.value) {
        return
    }
    if (!form.value.email.value || !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form.value.email.value)) {
        form.value.email.isValid = false;
        form.value.email.error = "Пожалуйста введите корректный емейл";
    } else {
        form.value.email.isValid = true;
    }
    if (!form.value.password.value || form.value.password.value.length < 6) {
        form.value.password.isValid = false;
        form.value.password.error = "Пароль должен содержать не менее 6 символов";
    } else {
        form.value.password.isValid = true;
        if (!form.value.confirmPassword.value || form.value.confirmPassword.value != form.value.password.value) {
            form.value.confirmPassword.isValid = false;
            form.value.confirmPassword.error = "Пароли не совпадают";
        } else {
            form.value.confirmPassword.isValid = true;
        }
    }
    return form.value.email.isValid && form.value.password.isValid && form.value.confirmPassword.isValid
}
const handleSubmit = async () => {
    const valid = validate()
    if (!valid) return
    try {
        await fetch("http://localhost:5173/", {
            method: "post",
            body: JSON.stringify({
                email: form.value.email.value,
                password: form.value.password.value,
                confirmPassword: form.value.confirmPassword.value
            }),
        })

    } catch (err: any) {
        alert(`error while submitting form ${err}`,)
        return
    } finally {
        form.value.email.error = undefined
        form.value.password.error = undefined
        form.value.confirmPassword.error = undefined
    }
    alert("form submitted")

}
</script>

<template>
    <div class="
        flex
        flex-col
        p-4
        h-full
        max-w-100
        min-w-100
        bg-white
        border
        border-gray-100
        shadow-sm
    ">
        <h2 class="p-2 w-fulltext-xl">Форма регистрации</h2>
        <form class="flex flex-col gap-2 p-2">
            <div class="flex flex-col gap-2 p-2">
                <label for="email">Введите Email:</label>
                <input class="px-2 py-1 border rounded-md" type="email" name="email" v-model="form.email.value"
                    id="email">
                <p v-if="form.email.error" class="p-2 text-red-500 text-xs">
                    {{ form.email.error }}
                </p>
            </div>
            <div class="flex flex-col gap-2 p-2">
                <label for="password">Введите пароль:</label>
                <input class="px-2 py-1 border rounded-md" type="password" name="password" v-model="form.password.value"
                    id="password">
                <p v-if="form.email.error" class="p-2 text-red-500 text-xs">
                    {{ form.password.error }}
                </p>
            </div>
            <div class="flex flex-col gap-2 p-2">
                <label for="password">Повторите пароль:</label>
                <input class="px-2 py-1 border rounded-md" type="password" name="password"
                    v-model="form.confirmPassword.value" id="confirmPassword">
                <p v-if="form.confirmPassword.error" class="p-2 text-red-500 text-xs">
                    {{ form.confirmPassword.error }}
                </p>
            </div>
            <button @click.prevent="handleSubmit" class="
                px-2
                py-1
                border
                transition-colors
                cursor-pointer
                active:bg-gray-600
                active:text-white
                hover:bg-gray-400
                hover:text-white
                rounded-md
            ">Отправить</button>
        </form>

    </div>


</template>