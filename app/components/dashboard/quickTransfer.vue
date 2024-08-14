<template>
  <div
    class="mt-5 flex "
    style="width: 320px;"
  >
    <div class="w-full bg-indigo-800 rounded-xl p-2 ">
      <div>
        <h1 class="text-md font-semibold ">
          Quick transfer
        </h1>
      </div>
      <div class="flex justify-between items-center h-10">
        <div class="flex items-center">
          <img
            class="w-14 h-full"
            src="https://i.ibb.co/Dr4tfDX/visa-logo.webp"
            alt=""
          >
          <p class="pl-4 font-medium">
            Debit
          </p>
        </div>
        <div>
          <UDropdown
            :items="items"
          >
            <UButton
              color="violet"
              icon="i-heroicons-chevron-down"
              size="xs"
              class="rounded-full"
            />
          </UDropdown>
        </div>
      </div>
      <div class="border rounded-lg">
        <div>
          <p class=" text-sm font-light p-2">
            Enter Amount
          </p>
        </div>
        <div>
          <UInput

            color=""
            size="lg"
          >
            <template #trailing>
              <span class="text-gray-500 dark:text-gray-400 text-xs ">$</span>
            </template>
          </UInput>
        </div>
      </div>
      <div class="flex w-full space-x-10 justify-center items-center">
        <div class="pt-2">
          <div class="border border-gray-500 rounded-lg px-3 py-3">
            />
          </div>
          <h2 class="text-center">
            Send
          </h2>
        </div>
        <div>
          <div>İcon</div>
          <h2>Send</h2>
        </div>
        <div>
          <div>İcon</div>
          <h2>Send</h2>
        </div>
        <div>
          <div>İcon</div>
          <h2>Send</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = ref([
  [
    {
      label: 'Debit',
      icon: 'i-heroicons-paper-airplane'

    },
    {
      label: 'Balance',
      icon: 'i-heroicons-user-plus'

    }
  ]
])
</script>

<style>

</style>
