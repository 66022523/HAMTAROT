<script setup>
import data from "~/assets/json/data.json";

const categories = Object.keys(data.category);
</script>

<template>
  <section class="container mx-auto text-center">
    <h2 class="text-portica mb-8">เลือกหมวดหมู่ที่ต้องการ</h2>
    <div class="flex flex-wrap gap-8 justify-center items-center">
      <NuxtLink
        v-for="category in categories.length"
        :key="category"
        :to="{ path: '/' + categories[category - 1] }"
        class="basis-1/4 flex flex-col justify-center items-center transition hover:scale-105 hover:underline"
      >
        <div class="stack">
          <CardTarot
            v-for="stack in 3"
            :key="stack"
            class="mb-8 transition hover:bg-electric-violet"
            i-assets
            assets-class="text-blackcurrant text-5xl p-3 inline-block leading-[0]"
            :icon="data.category[categories[category - 1]].icon"
          />
        </div>
        <h3>{{ data.category[categories[category - 1]].title }}</h3>
      </NuxtLink>
    </div>
  </section>
</template>
