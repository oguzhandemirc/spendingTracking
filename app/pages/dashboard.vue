<script setup lang="ts">
import CreditCard from '~/components/dashboard/creditCard.vue'
import QuickTransfer from '~/components/dashboard/quickTransfer.vue'
import SendMoney from '~/components/dashboard/sendMoney.vue'

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
        <CreditCard
          card-number="4234567812345678"
          card-holder="Oğuzhan Demirci"
          expiration-date="12/25"
          cvv="123"
        />
        <SendMoney />
        <QuickTransfer />
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
