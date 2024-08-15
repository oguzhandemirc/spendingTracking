<script setup lang="ts">
import axios from 'axios'

interface TableColumn {
  label: string
}

const data = ref()
const fetchData = async () => {
  try {
    const response = await axios.get('https://10.16.17.69:7203/api/scraping/scrape')
    data.value = response.data
    console.log(response)
  } catch (error) {
    console.error('İstek sırasında hata oluştu:', error)
  }
}
const columns: TableColumn[] = [{

  label: 'ID'
}, {

  label: 'User name'
}, {

  label: 'Job position'
}, {

  label: 'Email'
}]
onMounted(() => {
  fetchData()
  console.log(Response)
})
</script>

<template>
  <UTable

    :rows="data"
  />
</template>
