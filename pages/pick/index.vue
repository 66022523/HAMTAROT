<template>
  <section class="container mx-auto text-pink text-center">
    <h2 class="text-yellow">คลิกเลือกไพ่ 1 ใบ แล้วคลิกปุ่ม 'ทำนาย'</h2>
    <h3>หมวดหมู่ รายวัน</h3>
    <br />
    <div class="relative">
      <Cards
        v-for="index in 22"
        :key="index"
        class="absolute cursor-pointer"
        :class="{ active: active === index }"
        @click="handleCardClick(index)"
        :style="{
          left: index * 40 + 'px',
          transform: active === index ? 'translateY(-40px)' : 'translateY(0)',
        }"
      />
      <br />
      <p>
        ตั้งจิตให้สงบเป็นสมาธิ โดยหลับตาหายใจเข้า-ออกลึก ๆ สัก 1-2 นาที
        จนรู้สึกว่าจิตใจสงบ ผ่อนคลายแล้ว <br />
        อธิษฐานระลึกถึงสิ่งศักดิ์สิทธิ์ทั้งหลายหรือที่เคารพบูชา
        ขอบารมีท่านเปิดดวงชะตา บอกเล่าคำทำนายผ่านไพ่ยิปนี้
      </p>
      <br />
      <router-link to="/result">
        <button class="btn btn-primary">ทำนาย</button>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.card {
  transition: transform 0.1s ease-in-out, background-color 0.3s ease;
}

.card:hover {
  background-color: #332941;
}

.card.active {
  background-color: #332941;
}
</style>

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
