<script setup>
import data from "~/assets/json/data.json";

const viewed = useCookie("viewed", {
  default: () => ({}),
  expires: getNextDays(),
});

const alert = ref([]);
const viewedKey = ref("");
const viewedLink = ref("");

const categories = Object.keys(data.category);

if (process.client) {
  const notify = (  "HAMTAROT", { body: "ตัวอย่างการแจ้งเตือนจากเว็บไซต์ HAMTAROT", icon: "/favicon.ico" })
  if (!("Notification" in window)) {
    alert("เบราว์เซอร์ของคุณไม่รองรับระบบการแจ้งเตือน");
  } else if (Notification.permission === "granted") {
    new Notification(notify);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(notify);
      }
    });
  }
}

const isViewed = (category) => {
  if (
    Object.keys(viewed.value).includes(category) &&
    viewed.value[category].viewed &&
    !viewed.value[category].accept
  ) {
    alert.value.push({
      status: "warning",
      text: "คุณดูดวงในหมวดหมู่นี้ไปแล้ว แน่ใจหรือไม่ที่จะดูต่อ?",
      PBtext: "ดูต่อไป",
      PBclass: "btn-ghost",
      PBonclick: () => {
        if (alert.value.length) alert.value.shift();
        viewed.value[viewedKey.value].accept = true;

        navigateTo(viewedLink.value);
      },
    });
    viewedKey.value = category;
    viewedLink.value = `/predict/${category}`;

    setTimeout(() => {
      if (alert.value.length) alert.value.shift();
    }, 5000);
  } else {
    navigateTo(`/predict/${category}`);
  }
};
</script>

<template>
  <section class="pt-8 md:pt-0">
    <section class="container mx-auto mb-8 p-4 text-center">
      <h1 class="text-portica">เลือกหมวดหมู่ที่ต้องการ</h1>
      <p class="mb-8">เลือกรายการที่คุณต้องการทำนาย</p>
      <div class="mb-8 flex flex-wrap items-center justify-center gap-8">
        <NuxtLink
          v-for="category in categories.length"
          :key="category"
          class="flex basis-1/4 cursor-pointer flex-col items-center justify-center transition hover:link-hover hover:link hover:scale-105"
          @click="isViewed(categories[category - 1])"
        >
          <div class="stack">
            <CardTarot
              v-for="stack in 3"
              :key="stack"
              class="mb-8 transition hover:bg-electric-violet"
              i-assets
              assets-class="text-blackcurrant text-2xl md:text-5xl p-1 md:p-3 inline-block leading-[0] md:leading-[0]"
              :icon="data.category[categories[category - 1]].icon"
              :glass="stack === 1"
            />
          </div>
          <h3>{{ data.category[categories[category - 1]].title }}</h3>
        </NuxtLink>
      </div>
    </section>
    <section class="container mx-auto mb-8 p-4">
      <div class="grid grid-rows-2 gap-8 md:grid-cols-2 md:grid-rows-1">
        <div class="hero rounded-badge bg-base-200 p-5">
          <div class="hero-content flex-col lg:flex-row">
            <div class="select-none p-5 text-9xl">🔮</div>
            <div>
              <h2 class="text-5xl font-bold text-portica">
                ยินดีต้อนรับสู่ Hamtarot!
              </h2>
              <p class="pt-6">
                ที่นี่คือที่ที่คุณสามารถสำรวจและเข้าใจตัวเองและชีวิตของคุณได้ดียิ่งขึ้นผ่านการดูดวงด้วยไพ่ทาโร่.
                ไพ่ทาโร่เป็นเครื่องมือที่ช่วยให้เราสำรวจและเข้าใจตัวเองและสิ่งที่เกิดขึ้นในชีวิตของเรา.
              </p>
            </div>
          </div>
        </div>
        <div class="hero rounded-badge bg-base-200 p-5">
          <div class="hero-content flex-col lg:flex-row">
            <div class="select-none p-5 text-9xl">🌟</div>
            <div>
              <h3 class="text-5xl font-bold text-portica">
                ทำไมต้อง Hamtarot?
              </h3>
              <ul class="list-disc pt-6">
                <li>คุณสามารถดูดวงได้ง่าย ๆ ผ่านเว็บไซต์ Hamtarot</li>
                <li>
                  ทำให้การดูดวงไม่ยุ่งยากอีกต่อไปด้วยการออกแบบที่เรียบง่าย
                </li>
                <li>ไม่ต้องเสียค่าใช้จ่ายใด ๆ ในการดูดวงฟรี</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto p-4">
      <span>
        ข้อมูลภายในการ์ดได้รับการอ้างอิงจาก
        <br />
        <NuxtLink
          class="link"
          href="https://www.shitsuren-tarot.com/tarot/major-arcana/"
          target="_blank"
        >
          Shitsuren Tarot <i class="fi fi-br-arrow-up-right-from-square"></i>
        </NuxtLink>
      </span>
    </section>
    <ToastFeedback class="toast-center z-50">
      <AlertFeedback
        v-for="index in alert.length"
        :key="index"
        :status="alert[index - 1].status"
        :text="alert[index - 1].text"
        :primary-button-text="alert[index - 1].PBtext"
        :primary-button-class="alert[index - 1].PBclass"
        :primary-button-on-click="alert[index - 1].PBonclick"
      />
    </ToastFeedback>
  </section>
</template>
