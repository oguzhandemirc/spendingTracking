<template>
  <UDashboardPage
    v-if="isPageVisible"
  >
    <UDashboardPanel style="width: 80vw;">
      <UDashboardNavbar
        :title=" 'Hoşgeldin ' + userName.toUpperCase()"
      />
      <UDashboardSection
        v-if="selected.length > 0"
        :description="selected.length + ' Tane hisse seçildi'"
        class="px-4"
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

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getStocks } from '~/services/stockService'

const route = useRoute()
const router = useRouter()
const name = ref(route.params.id)
const userName = ref<string | null>(null)
const isPageVisible = ref(false)

const selected = ref([])
const stock = ref([])

watch(selected, (newVal) => {
  console.log('selected = ', newVal)
})

onMounted(async () => {
  userName.value = localStorage.getItem('username')
  if (userName.value !== name.value) {
    router.push('/')
  } else {
    isPageVisible.value = true
    const stocks = await getStocks()
    // stock.value = [...stocks]
    // selected.value = [stock.value[0]]
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
  }
})
</script>

<style>

</style>
