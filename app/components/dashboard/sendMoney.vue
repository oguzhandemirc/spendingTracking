sendmoney.vue<template>
  <div class="box-container">
    <!-- send money -->
    <div class="flex justify-start text-2xl pb-5 pt-5">
      <h1>Send Money</h1>
    </div>
    <!-- debit -->
    <div>
      <div class="flex items-center justify-between px-8 h-12 bg-indigo-800 mb-5 rounded-xl">
        <div class="flex items-center space-x-5">
          <!-- <img
            class="w-10 "
            src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1587-tygju446.png"
          > -->
          <p class="font-semibold text-lg">
            {{ accName }}
          </p>
        </div>
        <div class="flex items-center justify-end h-full ">
          <p class="pr-3 text-xl font-semibold">
            ${{ balance }}
          </p>
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
    </div>
    <!-- enter the amount -->
    <div>
      <div class="flex items-center justify-start pl-7 space-x-2 h-12 bg-indigo-800 rounded-xl">
        <div>
          <img
            class="w-5"
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
          >
        </div>
        <div>Enter the amount</div>
        <div>$800</div>
      </div>
      <div>
        <div>$800.00</div>
        <div>TR US</div>
      </div>
    </div>
    <!-- send money button -->
    <div class="flex">
      <UButton
        label="Send Money"
        class="w-full h-12 text-md rounded-xl text-center flex justify-center"
      />
    </div>
  </div>
</template>

<script setup>
const accName = ref()
const balance = ref()
const debit = ref(
  [
    { id: 1, label: 'Balance', value: 800 },
    { id: 2, label: 'Debit', value: 900 }
  ]
)
const changeAcc = (e) => {
  const acc = ref(e)
  console.log(acc.value)

  switch (acc.value) {
    case 'Balance':
      accName.value = debit.value[0].label
      balance.value = debit.value[0].value
      break
    case 'Debit':
      accName.value = debit.value[1].label
      balance.value = debit.value[1].value
      break
  }
}

const items = [[{
  label: 'Balance',
  click: () => changeAcc('Balance')
}, {
  label: 'Debit',
  click: () => changeAcc('Debit')
}]]
</script>

  <style>
  .box-container {
   width: 320px;
  }
  </style>
