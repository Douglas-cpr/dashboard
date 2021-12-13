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
        <Icon v-if="isLoading" name="loading" class="animate-spin" />
        <span v-else>Entrar</span>
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { useField } from 'vee-validate'
import useModal from '../../hooks/useModal'
import { validateEmptyAndLength3, validateEmptyAndEmail } from '../../utils/validators'
import { useToast } from 'vue-toastification'
import services from '../../services'
import { useRouter } from 'vue-router'
import Icon from '../Icon'

export default {
  components: {
    Icon
  },
  setup () {
    const modal = useModal()
    const router = useRouter()
    const toast = useToast()

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

    async function handleSubmit () {
      try {
        toast.clear()
        state.isLoading = true
        const { data, errors } = await services.auth.login({
          email: state.email.value,
          password: state.password.value
        })

        if (!errors) {
          window.localStorage.setItem('token', data.token)
          router.push({ name: 'Feedbacks' })
          state.isLoading = false
          modal.close()
          return
        }

        if (errors.status === 404) {
          toast.error('E-mail não encontrado')
        }

        if (errors.status === 401) {
          toast.error('E-mail/senha inválidos')
        }

        if (errors.status === 400) {
          toast.error('Ocorreu um erro ao fazer o login')
        }

        state.isLoading = false
      } catch (err) {
        state.isLoading = false
        state.hasErrors = !!err
        toast.error('Ocorreu um erro ao fazer o login')
      }
    }

    return {
      ...toRefs(state),
      close: modal.close,
      handleSubmit
    }
  }

}
</script>
