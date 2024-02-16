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

<template>
  <div
    class="card flex justify-between items-center w-[250px] h-[360px] shadow-xl rounded-badge border-[15px] bg-gradient-to-bl from-electric-violet to-minsk border-blue-chalk"
    :class="flip ? 'bg-cover bg-center bg-no-repeat bg-local' : null"
    :style="flip ? 'background-image: url(\'' + image + '\')' : null"
  >
    <div
      v-if="flip"
      class="flex justify-center items-center w-8 h-8 mt-2 rounded-full bg-blue-chalk text-blackcurrant"
    >
      {{ number }}
    </div>
    <div
      v-if="!flip"
      class="flex justify-center items-center m-auto rounded-full bg-blue-chalk border-8 border-blue-chalk"
    >
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
      class="flex justify-center items-center max-w-44 p-2 rounded-tl-xl rounded-tr-xl bg-blue-chalk text-blackcurrant"
    >
      <p class="truncate text-center">{{ title }}</p>
    </div>
  </div>
</template>
