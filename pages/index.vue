<script setup>
import data from "~/assets/json/data.json";

const categories = Object.keys(data.category);
</script>

<template>
  <section class="container mx-auto px-4 text-center">
    <h2 class="mb-8 text-portica">เลือกหมวดหมู่ที่ต้องการ</h2>
    <div class="flex flex-wrap items-center justify-center gap-8">
      <NuxtLink
        v-for="category in categories.length"
        :key="category"
        :to="`/predict/${categories[category - 1]}`"
        class="flex basis-1/4 flex-col items-center justify-center transition hover:scale-105 hover:underline"
      >
        <div class="stack">
          <CardTarot
            v-for="stack in 3"
            :key="stack"
            class="mb-8 transition hover:bg-electric-violet"
            i-assets
            assets-class="text-blackcurrant text-2xl md:text-5xl p-1 md:p-3 inline-block leading-[0]"
            :icon="data.category[categories[category - 1]].icon"
            :glass="stack === 1"
          />
        </div>
        <h3>{{ data.category[categories[category - 1]].title }}</h3>
      </NuxtLink>
    </div>
  </section>
</template>
