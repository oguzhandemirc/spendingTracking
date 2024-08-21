<script setup lang="ts">
import { getStocks } from '~/services/stockService'

const { isNotificationsSlideoverOpen } = useDashboard()
// const token = localStorage.getItem('token')
// onMounted(() => {
//   if (!token) {
//     router.push('/login')
//   }
// })
const selected = ref([])
const stock = ref([])
onMounted(async () => {
  const stocks = await getStocks()
  stock.value = stocks.map(item => ({
    id: item[0],
    company: item[1],
    open: item[2],
    close: item[3],
    low: item[4],
    change: item[5],
    volume: item[6],
    time: item[8]
  }))
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
