<script setup lang="ts">
import { sub } from 'date-fns'
import CreditCard from '~/components/dashboard/creditCard.vue'
import GroupParty from '~/components/dashboard/group-party.vue'
import QuickTransfer from '~/components/dashboard/quickTransfer.vue'
import RecentContacts from '~/components/dashboard/recent-contacts.vue'
import RecentTransactions from '~/components/dashboard/recent-transactions.vue'
import SendMoney from '~/components/dashboard/sendMoney.vue'
import type { Period, Range } from '~/types'

const range = ref<Range>({ start: sub(new Date(), { days: 14 }), end: new Date() })
const period = ref<Period>('daily')
const { isNotificationsSlideoverOpen } = useDashboard()
const items = [[{
  label: 'New mail',
  icon: 'i-heroicons-paper-airplane',
  to: '/inbox'
}, {
  label: 'New user',
  icon: 'i-heroicons-user-plus',
  to: '/users'
}]]
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

          <UDropdown :items="items">
            <UButton
              icon="i-heroicons-plus"
              size="md"
              class="ml-1.5 rounded-full"
            />
          </UDropdown>
        </template>
      </UDashboardNavbar>

      <UDashboardPanelContent>
        <!-- Flex Container -->
        <div class="flex flex-col lg:flex-row gap-6 mt-8 ">
          <!-- Sol Sütun (Sidebar) -->
          <div class="flex flex-col gap-4 w-full lg:w-1/4 lg:mr-5 ">
            <CreditCard
              card-number="4234567812345678"
              card-holder="Oğuzhan Demirci"
              expiration-date="12/25"
              cvv="123"
            />
            <SendMoney />
            <QuickTransfer />
          </div>

          <!-- Sağ Sütun (Main Content) -->
          <div class="flex flex-col gap-4 w-full lg:w-3/4 px-10 pr-10">
            <!-- İlk Satır -->
            <div
              class="flex flex-col lg:flex-row gap-4 "
            >
              <div class="w-full lg:w-8/12 pr-10">
                <HomeChart
                  :period="period"
                  :range="range"
                />
              </div>
              <div class="w-full lg:w-4/12">
                <RecentContacts />
                <GroupParty />
              </div>
            </div>

            <!-- İkinci Satır -->
            <div class="w-full">
              <!-- Tam genişlikte içerik -->
              <RecentTransactions />
            </div>
          </div>
        </div>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>

<style scoped>

</style>
