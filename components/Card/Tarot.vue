<template>
  <div
    class="card flex flex-col justify-between items-center w-[250px] h-[360px] shadow-xl rounded-badge border-[15px] bg-gradient-to-bl from-purple to-navy border-pink"
    :class="flip ? 'bg-cover' : null"
    :style="flip ? 'background-image: url(\'' + image + '\')' : null"
  >
    <div
      v-if="flip"
      class="flex justify-center items-center w-8 h-8 mt-2 rounded-full bg-pink text-black"
    >
      {{ number }}
    </div>
    <div v-if="!flip" class="m-auto rounded-full bg-pink border-8 border-pink">
      <img
        v-if="!iAssets"
        :class="assetsClass"
        :src="icon"
        :alt="alt"
        :width="width"
        :height="height"
      />
      <i v-if="iAssets" :class="[assetsClass, icon]"></i>
    </div>
    <div
      v-if="flip"
      class="flex justify-center items-center w-42 p-2 rounded-tl-xl rounded-tr-xl bg-pink text-black"
    >
      {{ title }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  iAssets: {
    type: Boolean,
    default: false,
  },
  assetsClass: {
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
  flip: {
    type: Boolean,
    default: false,
  },
  number: {
    type: String,
    default: "0",
  },
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>
