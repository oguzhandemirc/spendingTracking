<script setup lang="ts">
import type { FormError } from '#ui/types'
import { _postUserRegister } from '~/services/authService'
import { userStore } from '~/store/userStore'
import { isUserLoggedIn } from '~/utils/member'

definePageMeta({
  layout: 'withoutlayout'
})

const usersStore = userStore()
const route = useRouter()
const fields = [{
  name: 'name',
  type: 'text',
  label: 'Name',
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
  await _postUserRegister(data.name, data.password, 'user')
}

onBeforeMount(() => {
  if (isUserLoggedIn()) {
    route.push('/')
  }
})
</script>

<template>
  <div
    class="flex items-center justify-center "
    style="width: 100vw; height: 100vh;"
  >
    <UCard
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
          Do you have an account? <NuxtLink
            to="/login"
            class="text-primary font-medium"
          >Sign in</NuxtLink>.
        </template>
        <!--
        <template #password-hint>
          <NuxtLink
            to="/"
            class="text-primary font-medium"
          >Forgot password?</NuxtLink>
        </template> -->
        <template #validation>
        <!-- <UAlert
          color="red"
          icon="i-heroicons-information-circle-20-solid"
          title="Error signing in"
        /> -->
        </template>
        <template #footer>
          By signup in, you agree to our <NuxtLink
            to="/"
            class="text-primary font-medium"
          >Terms of Service</NuxtLink>.
        </template>
      </UAuthForm>
    </UCard>
  </div>
</template>
