<script setup>
const filename = ref("");

const uploadFile = (event) => {
  const file = event.target.files[0];
  const blob = URL.createObjectURL(file);
  filename.value = blob;
};
const sendNotification = (event) => {
  const title = event.target[0].value;
  const description = event.target[1].value;
  const imageLink = event.target[2].value;
  const imageTitle = event.target[3].value;

  console.log(
    `Notification has been sended with:\n- Title:${title}\n- Messages:${description}\n- Image Link:${imageLink}\n- Image Title:${imageTitle}`,
  );
};
</script>

<template>
  <section class="container mx-auto p-4 pt-8 md:pt-0">
    <DashboardNavBar class="mb-8" :active-path="$route.path" />
    <div class="card rounded-xl bg-minsk shadow-xl">
      <div class="card-body">
        <h1 class="text-center text-portica">การแจ้งเตือน</h1>
        <p class="mb-4 text-center">
          ส่งการแจ้งเตือนไปยังเบราว์เซอร์ของแต่ละเครื่อง
        </p>
        <form class="flex flex-col gap-2" @submit.prevent="sendNotification">
          <InputText
            placeholder="พิมพ์ชื่อเรื่องเพิ่มเติม"
            hint-top-left="ชื่อเรื่อง"
            required
          >
            <i class="fi fi-rr-envelope leading-[0]"></i>
          </InputText>
          <InputTextarea
            input-class="min-h-24"
            placeholder="พิมพ์เนื้อหาเพิ่มเติม"
            hint-top-left="เนื้อหาข้อความ"
            required
          />
          <div class="grid grid-flow-row items-end gap-2 md:grid-flow-col">
            <InputText
              v-model="filename"
              class="w-full"
              placeholder="https://hamtarot.com/favicon.ico"
              hint-top-left="ลิงค์รูปภาพ (ไม่จำเป็น)"
            >
              <i class="fi fi-rr-add-image leading-[0]"></i>
            </InputText>
            <label class="btn btn-warning">
              อัพโหลด
              <InputFile class="hidden" hidden :on-change="uploadFile" />
            </label>
          </div>
          <InputText
            class="mb-4"
            placeholder="ไอคอนแฮมทารอท"
            hint-top-left="ชื่อ (ไม่จำเป็น)"
          >
            <i class="fi fi-br-comment-image leading-[0]"></i>
          </InputText>
          <div class="card-actions justify-center">
            <Button class="btn-warning w-fit" type="submit">
              ส่งการแจ้งเตือน
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
