<script setup lang="ts">
import type { FormError } from '#ui/types'
import { _postUserLogin } from '~/services/authService'
import { userStore } from '~/store/userStore'

const usersStore = userStore()
const route = useRouter()
const isPageVisible = ref(false)
const fields = [{
  name: 'name',
  type: 'text',
  label: 'name',
  placeholder: 'Enter your name'
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password'
}]

const validate = (state: any) => {
  const errors: FormError[] = []
  if (!state.name) errors.push({ path: 'name', message: 'name is required' })
  if (!state.password) errors.push({ path: 'password', message: 'Password is required' })
  return errors
}

async function onSubmit(data: any) {
  await _postUserLogin(data.name, data.password)
  if (import.meta.client) {
    const token = window.localStorage.getItem('token')
    if (token) {
      // const userName = localStorage.getItem('username')
      usersStore.userName = data.name
      // route.push('/' + userName)
      route.push('/')
    }
  }
}

onMounted(() => {
  if (import.meta.client) {
    const token = window.localStorage.getItem('token')
    if (token) {
      // const userName = localStorage.getItem('username')
      // route.push('/' + userName)
      route.push('/')
      isPageVisible.value = false
    } else {
      isPageVisible.value = true
    }
  }
})
</script>

<template>
  <div
    class="flex items-center justify-center "
    style="width: 100vw;"
  >
    <UCard
      v-if="isPageVisible === true"
      class="max-w-sm w-full"
    >
      <UAuthForm

        :fields="fields"
        :validate="validate"
        title="Welcome back!"
        icon="i-heroicons-lock-closed"
        :ui="{ base: 'text-center', footer: 'text-center' }"
        @submit="onSubmit"
      >
        <template #description>
          Don't have an account? <NuxtLink
            to="/"
            class="text-primary font-medium"
          >Sign up</NuxtLink>.
        </template>

        <template #password-hint>
          <NuxtLink
            to="/"
            class="text-primary font-medium"
          >Forgot password?</NuxtLink>
        </template>
        <template #validation>
        <!-- <UAlert
          color="red"
          icon="i-heroicons-information-circle-20-solid"
          title="Error signing in"
        /> -->
        </template>
        <template #footer>
          By signing in, you agree to our <NuxtLink
            to="/"
            class="text-primary font-medium"
          >Terms of Service</NuxtLink>.
        </template>
      </UAuthForm>
    </UCard>
  </div>
</template>
