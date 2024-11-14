<script setup>
import data from "~/assets/json/data.json";

const route = useRoute();
const params = route.params;

if (
  params &&
  params.category &&
  Object.keys(data.category).includes(params.category)
) {
  useSeoMeta({
    title: `Hamtarot - ${data.category[params.category].title}`,
  });
} else {
  useSeoMeta({
    title: "Hamtarot - ไม่พบหมวดหมู่นี้",
  });
}

const predict = async (index) => {
  if (index) {
    const callback = `/predict/${route.params.category}/${Math.floor(Math.random() * index) + 1}`;

    navigateTo(callback);
  }
};
</script>

<template>
  <section
    v-if="
      $route.params &&
      $route.params.category &&
      Object.keys(data.category).includes($route.params.category)
    "
    class="container mx-auto p-4 pt-8 text-center md:pt-0"
  >
    <h1 class="text-portica">
      คลิกเลือกไพ่ 1 ใบ
      <br />
      แล้วคลิกปุ่ม 'ทำนาย'
    </h1>
    <h3 class="mb-8">
      หมวดหมู่ {{ data.category[$route.params.category].title }}
    </h3>
    <div
      class="my-12 ml-[2%] grid grid-cols-[repeat(auto-fill,3%)] lg:ml-[10%]"
    >
      <CardTarot
        v-for="index in data.tarot.length"
        :key="index"
        :class="{ active: active === index }"
        assets-class="p-px w-[40px] md:w-[80px] md:p-2"
        :glass="false"
        :style="{
          transform: active === index ? 'translateY(-40px)' : null,
        }"
        class="cursor-pointer"
        @click="handleCardClick(index)"
      />
    </div>
    <p class="mb-8">
      ตั้งจิตให้สงบเป็นสมาธิ โดยหลับตาหายใจเข้า-ออกลึก ๆ สัก 1-2 นาที
      จนรู้สึกว่าจิตใจสงบ ผ่อนคลายแล้ว <br />
      อธิษฐานระลึกถึงสิ่งศักดิ์สิทธิ์ทั้งหลายหรือที่เคารพบูชา
      ขอบารมีท่านเปิดดวงชะตา บอกเล่าคำทำนายผ่านไพ่ยิปนี้
    </p>
    <Button
      class="btn-primary"
      :disabled="active ? null : 'disabled'"
      @click="predict(active)"
    >
      ทำนาย
    </Button>
  </section>
  <section v-else class="container mx-auto p-4 text-center">
    <i class="fi fi-rr-loading text-6xl text-portica"></i>
    <h1 class="text-portica">ไม่พบหมวดหมู่ '{{ $route.params.category }}'</h1>
    <p class="mb-8">ดูเหมือนว่าคุณจะดวงไม่ดีมาเจอหน้าว่างเปล่านี้นะ</p>
    <NuxtLink class="btn btn-primary" to="/">กลับไปหน้าหลัก</NuxtLink>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: null,
    };
  },
  methods: {
    handleCardClick(index) {
      if (this.active === index) {
        this.active = null;
      } else {
        this.active = index;
      }
    },
  },
};
</script>

<style scoped>
.card {
  transform: translateY(0);
  transition:
    transform 0.1s ease-in-out,
    background-color 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-20px);
}

.card.active {
  background-color: #332941;
}
</style>
