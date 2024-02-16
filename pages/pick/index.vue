<script setup>
import data from "~/assets/json/data.json";

const route = useRouter();
const query = route.currentRoute.value.query;
const categoryQuery = query.category;
</script>

<template>
  <section class="container mx-auto text-pink text-center">
    <h2 class="text-yellow">คลิกเลือกไพ่ 1 ใบ แล้วคลิกปุ่ม 'ทำนาย'</h2>
    <h3 class="mb-8">หมวดหมู่ {{ data.category[categoryQuery].title }}</h3>
    <div class="grid grid-cols-[repeat(auto-fill,3%)] my-12 ml-[10%]">
      <CardTarot
        v-for="index in data.tarot.length"
        :key="index"
        :class="{ active: active === index }"
        assets-class="p-2"
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
    <NuxtLink
      class="btn btn-primary"
      :disabled="active ? null : 'disabled'"
      :to="
        active
          ? {
              path: '/pick/result',
              query: {
                category: categoryQuery,
                card: Math.floor(Math.random() * active),
              },
            }
          : null
      "
    >
      ทำนาย
    </NuxtLink>
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
