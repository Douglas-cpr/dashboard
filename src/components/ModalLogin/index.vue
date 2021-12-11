<template>
  <div class="flex justify-between">
    <h1 class="text-4xl font-black text-gray-800">Entre na sua conta</h1>

    <button
      @click="close"
      class="text-4xl text-gray-600 focus:outline-none">
      &times;
    </button>
  </div>

  <div class="mt-16">
    <form @submit.prevent="handleSubmit">
      <label for="" class="block">
        <span class="text-lg font-medium text-gray-800">E-mail</span>
        <input
          v-model="email.value"
          type="email"
          :class="{
            'border-brand-danger': !!email.errorMessage
          }"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          placeholder="exemplo@gmail.com"
        />
        <span
          v-if="!!email.errorMessage"
          class="block font-medium text-brand-danger"
        >
          {{ email.errorMessage }}
        </span>
      </label>

      <label for="" class="block mt-9">
        <span class="text-lg font-medium text-gray-800">Senha</span>
        <input
          v-model="password.value"
          type="password"
          :class="{
            'border-brand-danger': !!password.errorMessage
          }"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          placeholder="***"
        />
        <span
          v-if="!!password.errorMessage"
          class="block font-medium text-brand-danger"
        >
          {{ password.errorMessage }}
        </span>
      </label>

      <button
        :disabled="isLoading"
        type="submit"
        :class="{
          'opacity-50': isLoading
        }"
        class="px-8 py-3 mt-10 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { useField } from 'vee-validate'
import useModal from '../../hooks/useModal'
import { validateEmptyAndLength3, validateEmptyAndEmail } from '../../utils/validators'

export default {
  setup () {
    const modal = useModal()

    const {
      value: emailValue,
      errorMessage: emailErrorMessage
    } = useField('email', validateEmptyAndEmail)

    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField('password', validateEmptyAndLength3)

    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      }
    })

    function handleSubmit () {

    }

    return {
      ...toRefs(state),
      close: modal.close,
      handleSubmit
    }
  }

}
</script>
