<template>
  <div class=" flex">
    <UButton label="Button" />
    <UInput
      color="white"
      variant="outline"
      placeholder="Search..."
    />
    <div class="relative">
      <UColorModeSelect class="relative z-50" />
    </div>
    <USelect
      v-model="country"
      :options="countries"
    />
    <UButton label="Button" />
    <UButton label="Button" />
    <UButton label="Button" />
  </div>
</template>

<script lang="ts" setup>
const countries = ['United States', 'Canada', 'Mexico']

const country = ref(countries[0])
</script>

  <style>
  /* Eğer UColorModeSelect açılır penceresini özelleştirmek isterseniz */
  </style>
