<template>
  <div class="mt-5 flex justify-center">
    <div class="w-full bg-indigo-800 rounded-xl p-4 max-w-sm">
      <div>
        <h1 class="text-md font-semibold text-white">
          Quick transfer
        </h1>
      </div>
      <div class="flex justify-between items-center h-10 mt-2">
        <div class="flex items-center">
          <img
            class="w-14 h-full"
            src="https://i.ibb.co/Dr4tfDX/visa-logo.webp"
            alt=""
          >
          <p class="pl-4 font-medium text-white">
            Debit
          </p>
        </div>
        <div>
          <UDropdown :items="items">
            <UButton
              color="violet"
              icon="i-heroicons-chevron-down"
              size="xs"
              class="rounded-full"
            />
          </UDropdown>
        </div>
      </div>
      <div class="border rounded-lg mt-4">
        <div>
          <p class="text-sm font-light p-2 text-white">
            Enter Amount
          </p>
        </div>
        <div>
          <UInput
            color=""
            size="lg"
          >
            <template #trailing>
              <span class="text-gray-500 dark:text-gray-400 text-xs">$</span>
            </template>
          </UInput>
        </div>
      </div>

      <!-- Bu kısımda güncellemeler yapıldı -->
      <div class="flex justify-between items-center w-full mt-4 space-x-2">
        <div class="flex flex-col items-center w-1/4">
          <div class="border border-gray-500 rounded-lg p-2 h-16 w-full flex justify-center items-center">
            <button class="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-violet-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
          <h2 class="text-white mt-2">
            Send
          </h2>
        </div>

        <div class="flex flex-col items-center w-1/4">
          <div class="border border-gray-500 rounded-lg p-2 h-16 w-full flex justify-center items-center">
            <button class="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-green-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
          <h2 class="text-white mt-2">
            Receive
          </h2>
        </div>

        <div class="flex flex-col items-center w-1/4">
          <div class="border border-gray-500 rounded-lg p-2 h-16 w-full flex justify-center items-center">
            <button class="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-yellow-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
            </button>
          </div>
          <h2 class="text-white mt-2">
            Invoicing
          </h2>
        </div>

        <div class="flex flex-col items-center w-1/4">
          <div class="border border-gray-500 rounded-lg p-2 h-16 w-full flex justify-center items-center">
            <button class="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-blue-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
          <h2 class="text-white mt-2">
            More
          </h2>
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
.custom-icon .i-heroicons-paper-airplane {
  color: white;/* veya istediğiniz herhangi bir renk */
  fill: currentColor; /* SVG'lerdeki fill rengi için */
}
</style>
