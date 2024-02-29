<script setup>
const username = ref("");
const email = ref("");

if (process.client) {
  if (!sessionStorage.getItem("user")) navigateTo("/account/login");

  const userSession = sessionStorage.getItem("user");
  const userData = JSON.parse(userSession);

  username.value = userData.username;
  email.value = userData.email;
}
</script>

<template>
  <section class="container mx-auto p-4 pt-8 md:pt-0">
    <div class="card rounded-xl bg-minsk shadow-xl">
      <div class="card-body px-12 py-10">
        <h1 class="text-center text-portica">จัดการบัญชี</h1>
        <p class="mb-8 text-center">
          เปลี่ยนแปลงหรือจัดการบัญชีของคุณ หากมีปัญหาใด ๆ
          สามารถติดต่อเราได้ที่ปุ่ม "?"
          <br />
          ที่ด้านขวาล่างของเว็บไซต์
        </p>
        <div
          class="flex flex-row items-center justify-center justify-items-center gap-8"
        >
          <div class="flex-none">
            <div class="avatar">
              <div class="w-24 rounded-full bg-blue-chalk">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  :alt="username + ' Photo'"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div class="flex-1">
            <InputText
              v-model="username"
              placeholder="ชื่อเล่นหรือนามแฝง"
              hint-top-left="ชื่อเล่น"
            />
            <div class="flex justify-stretch gap-2">
              <InputText
                v-model="email"
                class="w-full"
                type="email"
                placeholder="example@domain.subdomain"
                hint-top-left="อีเมล"
              />
              <InputText
                class="w-full"
                type="password"
                placeholder="12345678"
                min-length="8"
                hint-top-left="รหัสผ่าน"
                hint-bottom-left="อย่างน้อย 8 ตัวอักษร พิมพ์เล็ก พิมพ์ใหญ่และตัวอักษรพิเศษ"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <Button class="btn-warning">เปลี่ยน</Button>
          <Button class="btn-outline btn-warning">ลบบัญชี</Button>
        </div>
      </div>
    </div>
  </section>
</template>
