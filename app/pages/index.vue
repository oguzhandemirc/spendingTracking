<script setup lang="js">
import { getStocks } from '~/services/stockService'
import { isUserLoggedIn, removeTimeInterval, stockTimeInterval } from '~/utils/member'

const { isNotificationsSlideoverOpen } = useDashboard()
const selected = ref([])
const stock = ref([])
const router = useRouter()
const fetchStocks = async () => {
  const stocks = await getStocks()
  stock.value = stocks
}

onBeforeMount(() => {
  if (!isUserLoggedIn()) {
    router.push('/login')
  }
})

onMounted(() => {
  fetchStocks()
  stockTimeInterval(60000, fetchStocks)
})

onUnmounted(() => {
  removeTimeInterval()
})
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Home">
        <template #right>
          <UTooltip
            text="Notifications"
            :shortcuts="['N']"
          >
            <UButton
              color="gray"
              variant="ghost"
              square
              @click="isNotificationsSlideoverOpen = true"
            >
              <UChip
                color="red"
                inset
              >
                <UIcon
                  name="i-heroicons-bell"
                  class="w-5 h-5"
                />
              </UChip>
            </UButton>
          </UTooltip>
        </template>
      </UDashboardNavbar>
      <!-- {{ intervalCounter }} -->
      <UDashboardSection
        class="px-4"
        :description=" selected.length + ' Stocks Selected ' "
        :links="[{ label: 'Save changes', color: 'black' }]"
      />
      <UDashboardPanelContent>
        <UTable
          v-model="selected"
          :rows="stock"
        />
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
