<script setup>
const tabs = ref([
  { title: "สถิติ", to: "/dashboard/statistics" },
  { title: "การแจ้งเตือน", to: "/dashboard/notification" },
  { title: "จัดการผู้ใช้งาน", to: "/dashboard/users" },
]);

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
      v-for="index in tabs.length"
      :key="index"
      role="tab"
      class="tab truncate text-wrap"
      :class="{ 'tab-active': activePath === tabs[index - 1].to }"
      :to="tabs[index - 1].to"
    >
      {{ tabs[index - 1].title }}
    </NuxtLink>
  </div>
</template>
