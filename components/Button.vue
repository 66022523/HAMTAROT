<template>
  <button class="btn">
    {{ name }}
  </button>
</template>

<script setup>
defineProps({
  name: String,
});
</script>
