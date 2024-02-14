<template>
  <div
    class="card w-[250px] h-[360px] shadow-xl rounded-badge bg-navy border-[15px] border-pink"
  >
    <div class="m-auto rounded-full bg-pink border-8 border-pink">
      <img
        class="p-2"
        :class="imgClass"
        :src="icon"
        :alt="alt"
        :width="width"
        :height="height"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgClass: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "/favicon.ico",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "80px",
  },
  height: {
    type: String,
    default: "",
  },
});
</script>
