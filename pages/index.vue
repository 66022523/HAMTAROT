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
  <section class="container mx-auto p-4 text-center">
    <h2 class="mb-8 text-portica">เลือกหมวดหมู่ที่ต้องการ</h2>
    <div class="flex flex-wrap items-center justify-center gap-8">
      <NuxtLink
        v-for="category in categories.length"
        :key="category"
        class="flex basis-1/4 cursor-pointer flex-col items-center justify-center transition hover:scale-105 hover:underline"
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
