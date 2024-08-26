<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { deleteUser, getUsers, setUserBalance, userDetail } from '~/services/adminService'

// modal1
const open = ref(false)
const loading = ref(false)
const toast = useToast()
const amount = ref(0)
function onDelete(username) {
  loading.value = true
  fetchDelete(username)
  setTimeout(() => {
    loading.value = false
    open.value = false
  }, 1000)
  toast.add({
    title: 'User Deleted',
    description: 'User has been deleted successfully',
    color: 'red'
  })
}

// modal2
const open2 = ref(false)
const loading2 = ref(false)

function onFetchDetail(username) {
  loading2.value = true
  fetchDetail(username)
  setTimeout(() => {
    loading2.value = false
    open2.value = true
  })
  toast.add({
    title: 'User Detail',
    description: 'User detail has been fetched successfully',
    color: 'yellow',
    timeout: 1000
  })
}

function onSetBalance(username, amount) {
  // loading2.value = true
  setBalance(username, amount)
  fetchDetail(username)
  setTimeout(() => {
    loading2.value = false
    open2.value = false
  }, 1000)
  toast.add({
    title: 'Balance Set',
    description: 'User balance has been set successfully',
    color: 'blue'
  })
}

// Users and selection
const people = ref<Array<{ name: string }>>([])
const selected = ref<{ username: string }[]>([])
const userDetails = ref<Record<string, any> | null>(null)
const fetchUsers = async () => {
  const response = await getUsers()
  people.value = response.data
}

onMounted(async () => {
  await fetchUsers()
})

const fetchDelete = async (user: string) => {
  await deleteUser(user)
  await fetchUsers()
  selected.value = []
}

const setBalance = async (user: string, amount: number) => {
  const response = await setUserBalance(user, amount)
  userDetails.value = response.data
}

const fetchDetail = async (user: string) => {
  const response = await userDetail(user)
  userDetails.value = response.data
}
</script>

<template>
  <div class="flex justify-between">
    <p>{{ selected.length > 0 ? selected[0].username + ' selected': 'There is no selected member' }}</p>
    <div class="space-x-2 flex">
      <UButton
        color="yellow"
        :disabled="selected.length === 0"
        @click="onFetchDetail(selected[0].username)"
      >
        User Detail
      </UButton>
      <UButton
        color="red"
        :disabled="selected.length === 0"
        @click="open=true"
      >
        Delete Users
      </UButton>
    </div>
  </div>

  <UTable
    v-model="selected"
    :rows="people"
  />

  <UDashboardModal
    v-model="open"
    title="Delete account"
    description="Are you sure you want to delete this account?"
    icon="i-heroicons-exclamation-circle"
    :ui="{
      icon: { base: 'text-red-500 dark:text-red-400' } as any,
      footer: { base: 'ml-16' } as any
    }"
  >
    <template #footer>
      <UButton
        color="red"
        label="Delete"
        :loading="loading"
        @click="onDelete(selected[0].username)"
      />
      <UButton
        color="white"
        label="Cancel"
        @click="open = false"
      />
    </template>
  </UDashboardModal>

  <UDashboardModal
    v-model="open2"
    title="User Details"
    icon="i-heroicons-information-circle"
    :ui="{
      icon: { base: 'text-yellow-500 dark:text-yellow-400' } as any,
      footer: { base: 'ml-16' } as any
    }"
  >
    <template #footer>
      <ul v-if="userDetails">
        <li
          v-for="(value, key) in userDetails"
          :key="key"
        >
          <template v-if="key === 'stocks'">
            <strong>Stocks</strong>
            <template v-if="Array.isArray(value) && value.length === 0">
              No stocks available
            </template>
            <template v-else>
              <ul>
                <li
                  v-for="(stock, index) in value"
                  :key="index"
                >
                  {{ stock.stockName }} - Quantity: {{ stock.quantity }}
                </li>
              </ul>
            </template>
          </template>

          <template v-else-if="key === 'username'">
            <strong>Username:</strong> {{ value }}
          </template>

          <template v-else-if="key === 'balance'">
            <div class=" mb-2 mt-2">
              <div class="flex space-x-2  items-center">
                <strong>Balance:</strong> {{ value }}
                <UInput v-model="amount" />
                <UButton
                  color="yellow"
                  label="Set Balance"
                  @click="onSetBalance(selected[0].username, amount)"
                />
              </div>
              <div>
                <p class=" font-thin text-sm">
                  Use (-) operator for decrase
                </p>
              </div>
            </div>
          </template>

          <template v-else>
            <strong>{{ key.charAt(0).toUpperCase() + key.slice(1) }}:</strong> {{ value }}
          </template>
        </li>
      </ul>
      <p v-else>
        No details available.
      </p>
    </template>
  </UDashboardModal>
</template>
