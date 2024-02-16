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
  glass: {
    type: Boolean,
    default: true,
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
    class="card h-[360px] w-[250px] overflow-hidden rounded-badge border-[15px] border-blue-chalk bg-gradient-to-bl from-electric-violet to-minsk shadow-xl"
  >
    <div
      class="flex h-full w-full flex-col items-center justify-between overflow-hidden"
      :class="
        flip
          ? 'bg-cover bg-local bg-center bg-no-repeat'
          : glass
            ? 'glass'
            : null
      "
      :style="flip ? 'background-image: url(\'' + image + '\');' : null"
    >
      <div
        v-if="flip"
        class="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-chalk text-blackcurrant"
      >
        {{ number }}
      </div>
      <div
        v-if="!flip"
        class="m-auto flex items-center justify-center rounded-full border-8 border-blue-chalk bg-blue-chalk"
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
        class="flex max-w-44 items-center justify-center rounded-tl-xl rounded-tr-xl bg-blue-chalk p-2 text-blackcurrant"
      >
        <p class="truncate text-center">{{ title }}</p>
      </div>
    </div>
  </div>
</template>
