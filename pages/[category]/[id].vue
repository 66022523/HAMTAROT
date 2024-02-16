<script setup>
import data from "~/assets/json/data.json";

const route = useRoute();

const update = () => {
  if (!route.params) {
    if (
      !route.params.category ||
      !Object.keys(data.category).includes(route.params.category)
    )
      return useSeoMeta({
        title: "Hamtarot - หมวดหมู่ไม่ถูกต้อง",
      });
    if (
      !route.params.id &&
      typeof parseInt(route.params.id) !== "number" &&
      parseInt(route.params.id) < 0 &&
      parseInt(route.params.id) >= Object.keys(data.tarot).length
    )
      return useSeoMeta({
        title: "Hamtarot - ไม่พบการ์ดนี้",
      });
  }

  useSeoMeta({
    title: `Hamtarot - ${data.tarot[parseInt(route.params.id) - 1].name.split(" ")[0]}`,
  });
};
update();
</script>

<template>
  <section
    v-if="
      $route.params &&
      $route.params.id &&
      $route.params.category &&
      Object.keys(data.category).includes(route.params.category) &&
      typeof parseInt(route.params.id) === 'number' &&
      parseInt(route.params.id) > 0 &&
      parseInt(route.params.id) <= Object.keys(data.tarot).length
    "
    class="container mx-auto"
  >
    <RatingDialog />
    <div class="text-center mb-8">
      <h2 class="text-portica">ผลการทำนาย</h2>
      <p>หมวดหมู่ {{ data.category[$route.params.category].title }}</p>
    </div>
    <CardResult
      :number="$route.params.id"
      :image="data.tarot[parseInt($route.params.id) - 1].image"
      :title="data.tarot[parseInt($route.params.id) - 1].alias"
      :name="
        data.tarot[parseInt($route.params.id) - 1].name +
        ` (${data.tarot[parseInt($route.params.id) - 1].alias})`
      "
      :info="data.tarot[parseInt($route.params.id) - 1].info"
      :content="
        data.category[$route.params.category].content[
          parseInt($route.params.id) - 1
        ]
      "
    />
    <div class="flex justify-center gap-2 mb-8">
      <Button
        class="btn-warning"
        type="button"
        onclick="saveImageModal.showModal()"
      >
        บันทึกภาพ
      </Button>
      <dialog id="saveImageModal" class="modal">
        <div class="modal-box bg-blackcurrant">
          <h3 class="font-bold text-lg text-portica">บันทึกภาพ</h3>
          <p class="py-4">
            คลิกบันทึกภาพที่ด้านล่างหรือปิดหน้าต่างนี้
            <b>(สามารถกดแป้น <u>ESC</u> ออกได้)</b>
          </p>
          <CardResult
            :number="$route.params.id"
            :image="data.tarot[parseInt($route.params.id) - 1].image"
            :title="data.tarot[parseInt($route.params.id) - 1].alias"
            :name="
              data.tarot[parseInt($route.params.id) - 1].name +
              ` (${data.tarot[parseInt($route.params.id) - 1].alias})`
            "
            :info="data.tarot[parseInt($route.params.id) - 1].info"
            :content="
              data.category[$route.params.category].content[
                parseInt($route.params.id)
              ]
            "
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
  <section v-else class="container mx-auto text-center">
    <i class="fi fi-rr-loading text-6xl text-portica"></i>
    <h2 class="text-portica">ไม่พบการ์ดดังกล่าว</h2>
    <p class="mb-8">
      คุณอาจจะดวงไม่ดีมาเจอการ์ด
      <br />
      <b>'THE EMPTY' (เทพแห่งความว่างเปล่า)!</b>
    </p>
    <NuxtLink class="btn btn-primary" to="/">กลับไปหน้าหลัก</NuxtLink>
  </section>
</template>
