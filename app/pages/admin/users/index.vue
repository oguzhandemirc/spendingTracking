<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Admin Page">
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
      <UDashboardPanelContent>
        <AdminGetUsers />
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>

<script lang="ts" setup>
const { isNotificationsSlideoverOpen } = useDashboard()
</script>

  <style>

  </style>
