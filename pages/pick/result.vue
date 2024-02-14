<template>
  <Rating />
  <div class="container mx-auto text-pink">
    <div class="text-center mb-8">
      <h2 class="text-yellow">ผลการทำนาย</h2>
      <p>หมวดหมู่ {{ cards.category[categoryQuery].title }}</p>
    </div>
    <div
      class="bg-watermark card relative bg-black overflow-hidden shadow-xl rounded-badge mb-8"
    >
      <div class="card-body">
        <Cards class="mb-4 mx-auto" />
        <h3>{{ cards.tarot[cardQuery].name }}</h3>
        <span>{{ cards.tarot[cardQuery].info }}</span>
        <p class="mt-4">
          {{ cards.category[categoryQuery].content[cardQuery] }}
        </p>
      </div>
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
            class="bg-watermark card relative bg-black overflow-hidden shadow-xl rounded-badge mb-8"
          >
            <div class="card-body">
              <Cards class="mb-4 mx-auto" />
              <h3>{{ cards.tarot[cardQuery].name }}</h3>
              <span>{{ cards.tarot[cardQuery].info }}</span>
              <p class="mt-4">
                {{ cards.category[categoryQuery].content[cardQuery] }}
              </p>
            </div>
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

<script setup>
import cards from "../../content/cards.json";

const route = useRouter();
const query = route.currentRoute.value.query;
const categoryQuery = query.category;
const cardQuery = query.card;

useSeoMeta({
  title: `Hamtarot - ${cards.tarot[cardQuery].name.split(" ")[0]}`,
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
