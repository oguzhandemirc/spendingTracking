<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { createUser } from '~/services/adminService'

const state = reactive({
  username: undefined,
  password: undefined,
  role: undefined
})

const options = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' }
]

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.username) errors.push({ path: 'username', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  await createUser(event.data.username, event.data.password, event.data.role)
  console.log(event.data.username, event.data.password, event.data.role)
}
</script>

<template>
  <UForm
    :validate="validate"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormGroup
      label="Username"
      name="useranme"
    >
      <UInput v-model="state.username" />
    </UFormGroup>

    <UFormGroup
      name="select"
      label="Select"
    >
      <USelect
        v-model="state.role"
        placeholder="Select..."
        :options="options"
      />
    </UFormGroup>
    <UFormGroup
      label="Password"
      name="password"
    >
      <UInput
        v-model="state.password"
        type="password"
      />
    </UFormGroup>

    <UButton
      type="submit"
      color="green"
    >
      Submit
    </UButton>
  </UForm>
</template>
