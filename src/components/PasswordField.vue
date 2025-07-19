<template>
    <div class="form__field">
        <label class="form__field__label" :for="name">{{ label }}</label>
        <div class="w-full">
            <input class="form__field__input w-full" :name="name" :placeholder="placeholder" :type="isShowPassword ? 'text' : type"
                v-model="modelValue" @blur="onBlur">
            <button type="button" @click="toggleShowPassword" class="absolute -ml-8 mt-3 cursor-pointer">
                <template v-if="isShowPassword">
                    <img src="/eye-slash.svg" alt="hide" class="w-5" />
                </template>
                <template v-else>
                    <img src="/eye.svg" alt="show" class="w-5" />
                </template>
            </button>
        </div>
        <div class="form__field__errors">
            <template v-for="error in errors">
                <div class="form__field__errors__item">{{ error }}</div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref, toRefs, watch } from 'vue';

const props = defineProps<{
    name: string
    label: string
    placeholder?: string
    modelValue: any
    type: string
    errors: Ref<string[]>
    pristine: Ref<boolean>
}>()

const { modelValue, type, errors, pristine } = toRefs(props)
const emit = defineEmits(['update:modelValue'])

const isShowPassword = ref(false)

function toggleShowPassword() {
    isShowPassword.value = !isShowPassword.value
}

function onBlur() {
    pristine.value = false
    emit('update:modelValue', modelValue.value)
}

watch(modelValue, (value) => {
    emit('update:modelValue', value)
})
</script>

<style scoped></style>