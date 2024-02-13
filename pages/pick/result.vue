<template>
  <Rating />
  <div class="container mx-auto">
    <div class="text-center mb-8">
      <h2 class="text-yellow">ผลการทำนาย</h2>
      <p>หมวดหมู่ รายวัน</p>
    </div>
    <div
      class="bg-watermark relative bg-black overflow-hidden shadow-xl rounded-xl p-6 mb-8"
    >
      <Cards class="mb-4 mx-auto" />
      <h3>{{ name }}</h3>
      <span>{{ info }}</span>
      <p class="mt-4">
        {{ description }}
      </p>
    </div>
    <div class="flex gap-2 justify-center mb-8">
      <Button
        class="btn-warning"
        type="button"
        name="บันทึกภาพ"
        onclick="saveImageModal.showModal()"
      />
      <dialog id="saveImageModal" class="modal">
        <div class="modal-box bg-black">
          <h3 class="font-bold text-lg text-yellow">บันทึกภาพ</h3>
          <p class="py-4">
            คลิกบันทึกภาพที่ด้านล่างหรือปิดหน้าต่างนี้
            <b>(สามารถกดแป้น <u>ESC</u> ออกได้)</b>
          </p>
          <div
            class="bg-ham-watermark relative bg-black overflow-hidden shadow-xl rounded-xl p-6"
          >
            <Cards class="mb-4 mx-auto" />
            <h3>{{ name }}</h3>
            <span>{{ info }}</span>
            <p class="mt-4">
              {{ description }}
            </p>
          </div>
          <div class="modal-action">
            <form method="dialog">
              <Button class="btn-primary me-2" name="บันทึกภาพ" />
              <Button class="btn-outline btn-primary" name="ปิด" />
            </form>
          </div>
        </div>
      </dialog>
      <Button
        class="btn-outline btn-warning"
        type="button"
        name="แชร์รูปภาพ"
        onclick="navigator.share({ url: '/' })"
      />
    </div>
    <div class="text-center">
      <span
        ><b>คำแนะนำ:</b> ดูดวงไพ่ยิปซีรายวัน ไม่ควรดูบ่อยเกินวันละครั้ง</span
      >
    </div>
  </div>
</template>

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

<script setup>
import cards from "../content/cards.json";

const name = ref(cards.tarot[0].name);
const info = ref(cards.tarot[0].info);
const description = ref(cards.category.daily[0]);

useSeoMeta({
  title: `Hamtarot - ${name.value.split(" ")[0]}`,
});
</script>
