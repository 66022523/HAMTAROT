<script setup>
import { toPng, toJpeg, toSvg } from "html-to-image";
import data from "~/assets/json/data.json";

const route = useRoute();
const params = route.params;

const update = () => {
  if (!params) {
    if (
      !params.category ||
      !Object.keys(data.category).includes(params.category)
    )
      return useSeoMeta({
        title: "Hamtarot - หมวดหมู่ไม่ถูกต้อง",
      });
    if (
      !params.id &&
      typeof parseInt(params.id) !== "number" &&
      parseInt(params.id) < 0 &&
      parseInt(params.id) >= Object.keys(data.tarot).length
    )
      return useSeoMeta({
        title: "Hamtarot - ไม่พบการ์ดนี้",
      });
  }

  useSeoMeta({
    title: `Hamtarot - ${data.tarot[parseInt(params.id) - 1].name.split(" ")[0]}`,
  });
};
update();

const selected = ref("png");
const options = ref([
  { text: "PNG", value: "png" },
  { text: "SVG", value: "svg" },
  { text: "JPEG", value: "jpeg" },
]);
const ranged = ref("100");
const isDownloading = ref(false);

const saveAsImage = async (extensions = "png", quality = 1) => {
  isDownloading.value = true;
  let dataURL = "";
  const name = data.tarot[parseInt(params.id) - 1].alias
    .toLowerCase()
    .replaceAll(" ", "-");
  const link = document.createElement("a");
  const element = document.getElementById("card-image");

  if (extensions === "png") dataURL = await toPng(element);
  if (extensions === "svg")
    dataURL = await toSvg(element, { filter: () => element.tagName !== "i" });
  if (extensions === "jpeg")
    dataURL = await toJpeg(element, { quality: parseInt(quality) });
  if (dataURL) {
    link.download = `${name}.${extensions}`;
    link.href = dataURL;
    link.click();
    isDownloading.value = false;
  }
};
</script>

<template>
  <section
    v-if="
      $route.params &&
      $route.params.id &&
      $route.params.category &&
      Object.keys(data.category).includes($route.params.category) &&
      typeof parseInt($route.params.id) === 'number' &&
      parseInt($route.params.id) > 0 &&
      parseInt($route.params.id) <= Object.keys(data.tarot).length
    "
    class="container mx-auto"
  >
    <RatingDialog />
    <div class="mb-8 text-center">
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
    <div class="mb-8 flex justify-center gap-2">
      <Button
        class="btn-primary"
        type="button"
        onclick="saveImageModal.showModal()"
      >
        บันทึกภาพ
      </Button>
      <dialog id="saveImageModal" class="modal">
        <div class="modal-box">
          <h3 class="text-lg font-bold text-portica">บันทึกภาพ</h3>
          <p class="py-4">
            คลิกบันทึกภาพที่ด้านล่างหรือปิดหน้าต่างนี้
            <b>(สามารถกดแป้น <u>ESC</u> ออกได้)</b>
          </p>
          <CardResult
            id="card-image"
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
          <div class="grid grid-cols-2 items-center justify-stretch gap-2">
            <InputSelect v-model="selected" hint-top-left="รูปแบบของไฟล์ภาพ">
              <option
                v-for="option in options"
                :key="option"
                :value="option.value"
              >
                {{ option.text }}
              </option>
            </InputSelect>
            <div>
              <InputRange
                v-model="ranged"
                min="0"
                max="100"
                step="25"
                hint-top-left="คุณภาพ"
              >
                <span>0</span>
                <span>0.25</span>
                <span>0.5</span>
                <span>0.75</span>
                <span>1</span>
              </InputRange>
            </div>
          </div>
          <div
            class="modal-action grid grid-cols-2 items-center justify-stretch gap-2"
          >
            <Button
              class="btn-warning"
              :disabled="selected.value"
              @click="saveAsImage(selected, ranged)"
            >
              <span
                v-if="isDownloading"
                class="loading loading-spinner loading-md"
              ></span>
              บันทึกภาพ
            </Button>
            <form method="dialog">
              <Button class="btn-outline btn-warning w-full">ปิด</Button>
            </form>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <Button
        class="btn-outline btn-primary"
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
