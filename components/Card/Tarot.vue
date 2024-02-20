<script setup>
defineProps({
  iAssets: {
    type: Boolean,
    default: false,
  },
  assetsClass: {
    type: String,
    default: null,
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
    default: "80px",
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
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div
    class="card h-[180px] w-[125px] overflow-hidden rounded-2xl border-[8px] border-blue-chalk bg-gradient-to-bl from-electric-violet to-minsk shadow-xl md:h-[360px] md:w-[250px] md:rounded-badge md:border-[15px]"
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
      :style="
        flip && image ? 'background-image: url(\'' + image + '\');' : null
      "
    >
      <div
        v-if="flip"
        class="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-chalk text-xs text-blackcurrant md:mt-2 md:h-8 md:w-8 md:text-base"
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
        <i v-else :class="[assetsClass, icon]"></i>
      </div>
      <div
        v-if="flip"
        class="max-w-22 flex items-center justify-center rounded-tl-xl rounded-tr-xl bg-blue-chalk p-1 text-blackcurrant md:max-w-44 md:p-2"
      >
        <span class="truncate text-center">{{ title }}</span>
      </div>
    </div>
  </div>
</template>
