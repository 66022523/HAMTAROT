<script setup>
import data from "~/assets/json/data.json";

const route = useRouter();
const query = route.currentRoute.value.query;
const categoryQuery = query.category;
const cardQuery = query.card;

useSeoMeta({
  title: `Hamtarot - ${data.tarot[cardQuery].name.split(" ")[0]}`,
});
</script>

<template>
  <section class="container mx-auto text-pink">
    <Rating />
    <div class="text-center mb-8">
      <h2 class="text-yellow">ผลการทำนาย</h2>
      <p>หมวดหมู่ {{ data.category[categoryQuery].title }}</p>
    </div>
    <CardResult
      :number="cardQuery"
      :image="data.tarot[cardQuery].image"
      :title="data.tarot[cardQuery].alias"
      :name="data.tarot[cardQuery].name + ` (${data.tarot[cardQuery].alias})`"
      :info="data.tarot[cardQuery].info"
      :content="data.category[categoryQuery].content[cardQuery]"
    />
    <div class="flex gap-2 justify-center mb-8">
      <Button
        class="btn-warning"
        type="button"
        onclick="saveImageModal.showModal()"
      >
        บันทึกภาพ
      </Button>
      <dialog id="saveImageModal" class="modal">
        <div class="modal-box bg-black">
          <h3 class="font-bold text-lg text-yellow">บันทึกภาพ</h3>
          <p class="py-4">
            คลิกบันทึกภาพที่ด้านล่างหรือปิดหน้าต่างนี้
            <b>(สามารถกดแป้น <u>ESC</u> ออกได้)</b>
          </p>
          <CardResult
            :number="cardQuery"
            :image="data.tarot[cardQuery].image"
            :title="data.tarot[cardQuery].alias"
            :name="
              data.tarot[cardQuery].name + ` (${data.tarot[cardQuery].alias})`
            "
            :info="data.tarot[cardQuery].info"
            :content="data.category[categoryQuery].content[cardQuery]"
          />
          <div class="modal-action">
            <form method="dialog">
              <Button class="btn-primary me-2">บันทึกภาพ</Button>
              <Button class="btn-outline btn-primary">ปิด</Button>
            </form>
          </div>
        </div>
      </dialog>
      <Button
        class="btn-outline btn-warning"
        type="button"
        onclick="navigator.share({ url: '/' })"
      >
        แชร์รูปภาพ
      </Button>
    </div>
    <div class="text-center">
      <span>
        <b>คำแนะนำ:</b> ดูดวงไพ่ยิปซีรายวัน ไม่ควรดูบ่อยเกินวันละครั้ง
      </span>
    </div>
  </section>
</template>
