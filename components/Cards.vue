<template>
  <div class="card flex items-center justify-center">
    <div class="card-icon">
      <img :src="icon" alt="" width="80px" />
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 225px;
  height: 355px;
  border-radius: 20px;
  border: 15px solid white;
  background-color: #3b3486;
}

.card-icon {
  border-radius: 100%;
  background-color: #f8edff;
  border: 8px solid white;
}
</style>

<script setup>
defineProps({
  icon: {
    type: String,
    default: "/favicon.ico",
  },
});
</script>
