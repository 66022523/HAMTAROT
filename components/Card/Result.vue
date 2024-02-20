<script setup>
defineProps({
  number: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  info: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="card mb-8 overflow-hidden rounded-badge bg-blackcurrant shadow-xl before:absolute before:left-0 before:top-0 before:block before:size-full before:bg-[url('/favicon.ico')] before:bg-[length:100px_100px] before:bg-[50px_50px] before:bg-repeat before:opacity-5 before:content-['']"
  >
    <div class="card-body relative">
      <CardTarot
        class="mx-auto mb-4"
        flip
        :number="number"
        :image="image"
        :title="title"
      />
      <h3>{{ name }}</h3>
      <span>{{ info }}</span>
      <p class="mt-2">
        {{ content }}
      </p>
    </div>
  </div>
</template>
