<template>
  <button class="btn" type="button">
    {{ name }}
  </button>
</template>

<script setup>
defineProps({
  name: String,
});
</script>
