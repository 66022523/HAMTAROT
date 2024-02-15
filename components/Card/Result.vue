<template>
  <div
    class="bg-watermark card relative bg-black overflow-hidden shadow-xl rounded-badge mb-8"
  >
    <div class="card-body">
      <CardTarot
        class="mb-4 mx-auto"
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

<style scoped>
.bg-watermark::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-image: url("/favicon.ico");
  background-size: 100px 100px;
  background-position: 50px 50px;
  background-repeat: repeat;
  opacity: 0.05;
}
</style>
