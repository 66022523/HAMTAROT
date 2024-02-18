<script setup>
defineProps({
  activePath: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div role="tablist" class="tabs-boxed tabs tabs-lg rounded-xl">
    <NuxtLink
      role="tab"
      class="tab"
      :class="{ 'tab-active': activePath === '/dashboard/statistics' }"
      to="/dashboard/statistics"
    >
      สถิติ
    </NuxtLink>
    <NuxtLink
      role="tab"
      class="tab"
      :class="{ 'tab-active': activePath === '/dashboard/notification' }"
      to="/dashboard/notification"
    >
      การแจ้งเตือน
    </NuxtLink>
    <NuxtLink
      role="tab"
      class="tab"
      :class="{ 'tab-active': activePath === '/dashboard/users' }"
      to="/dashboard/users"
    >
      จัดการผู้ใช้งาน
    </NuxtLink>
  </div>
</template>
