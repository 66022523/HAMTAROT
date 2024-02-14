<template>
  <section class="container mx-auto text-pink text-center">
    <h2 class="text-yellow mb-8">เลือกหมวดหมู่ที่ต้องการ</h2>
    <div
      class="grid grid-cols-3 gap-8 justify-center items-center content-center"
    >
      <NuxtLink
        v-for="index in categories.length"
        :key="index"
        :to="{ name: 'pick', query: { category: categories[index - 1] } }"
        class="justify-self-center transition hover:scale-105 hover:underline"
      >
        <Cards
          class="mb-4 transition hover:bg-purple"
          img-class="p-4 h-[80px]"
          :icon="cards.category[categories[index - 1]].image"
        />
        <h3>{{ cards.category[categories[index - 1]].title }}</h3>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import cards from "../content/cards.json";

const categories = Object.keys(cards.category);
</script>
