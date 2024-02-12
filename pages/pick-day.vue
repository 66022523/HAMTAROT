<template>
  <section class="min-h-screen ">
    <h2 class="text-yellow text-center">
      คลิกเลือกไพ่ 1 ใบ แล้วคลิกปุ่ม 'ทำนาย'
    </h2>
    <h3 class="text-pink text-center">
      หมวดหมู่ รายวัน
    </h3>
    <br>
    <selections />
    <section class="min-h-screen flex flex-col items-center justify-center">
      <br><br><br><br><br><br><br><br><br>
      <h3 class="text-pink text-center" style="line-height: ;">
      ตั้งจิตให้สงบเป็นสมาธิ โดยหลับตาหายใจเข้า-ออกลึก ๆ สัก 1-2 นาที จนรู้สึกว่าจิตใจสงบ ผ่อนคลายแล้ว <br> อธิษฐานระลึกถึงสิ่งศักดิ์สิทธิ์ทั้งหลายหรือที่เคารพบูชา ขอบารมีท่านเปิดดวงชะตา บอกเล่าคำทำนายผ่านไพ่ยิปนี้ 
    </h3>
    <br>
    <router-link to="/result">
    <button class="button" @click="performPrediction"><h2> ทำนาย </h2></button>
    </router-link>
  </section>
  </section>
</template>

<script>
export default {
  methods: {
    performPrediction() {
      console.log("ทำนาย");
    }
  }
};
</script>

<style scoped>
.button {
  background-color: #864AF9;
  color: #F8EDFF;
  padding: 12px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #3B3486;
}
</style>

