<script setup>
const username = defineModel("username", { required: true, type: String });
const password = defineModel("password", { type: String });
const newPassword = defineModel("newPassword", { type: String });
const verifyPassword = defineModel("verifyPassword", { type: String });

defineProps({
  submit: {
    type: Function,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  prevTo: {
    type: String,
    default: null,
  },
  prevText: {
    type: String,
    default: null,
  },
  nextTo: {
    type: String,
    default: null,
  },
  nextText: {
    type: String,
    default: null,
  },
  buttonDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="card h-screen w-full rounded-none border-blue-chalk bg-[#3b348650] shadow-xl backdrop-blur md:h-fit md:w-fit md:rounded-badge md:border-[15px] md:bg-minsk md:backdrop-blur-none"
  >
    <div class="card-body text-center">
      <h2 class="mb-8 text-portica">
        {{ title }}
      </h2>
      <form @submit.prevent="submit">
        <InputText
          v-model="username"
          class="mb-2"
          placeholder="อีเมล/ชื่อผู้ใช้"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
            />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
            />
          </svg>
        </InputText>
        <InputText
          v-if="password !== undefined"
          v-model="password"
          class="mb-2"
          type="password"
          placeholder="รหัสผ่าน"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            />
          </svg>
        </InputText>
        <InputText
          v-if="newPassword !== undefined"
          v-model="newPassword"
          class="mb-2"
          type="password"
          placeholder="รหัสผ่าน"
          min-length="8"
          hint-bottom-left="อย่างน้อย 8 ตัวอักษร พิมพ์เล็ก พิมพ์ใหญ่และตัวอักษรพิเศษ"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            />
          </svg>
        </InputText>
        <InputText
          v-if="verifyPassword !== undefined"
          v-model="verifyPassword"
          class="mb-2"
          type="password"
          placeholder="ยืนยันรหัสผ่าน"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            />
          </svg>
        </InputText>
        <div class="mb-4 flex justify-between">
          <NuxtLink :to="prevTo">{{ prevText }}</NuxtLink>
          <NuxtLink :to="nextTo">{{ nextText }}</NuxtLink>
        </div>
        <Button
          type="submit"
          class="btn-warning w-full"
          :disabled="buttonDisabled"
        >
          <slot />
        </Button>
      </form>
      <div class="divider">หรือ</div>
      <div class="flex items-center justify-between">
        <NuxtLink
          class="btn btn-circle btn-link"
          href="https://accounts.google.com/"
          target="_blank"
        >
          <img
            class="rounded-full"
            src="/assets/icons/google.webp"
            alt="เข้าสู่ระบบด้วย Google"
            width="40px"
            height="40px"
          />
        </NuxtLink>
        <NuxtLink
          class="btn btn-circle btn-link"
          href="https://www.facebook.com/login.php/"
          target="_blank"
        >
          <img
            class="rounded-full"
            src="/assets/icons/facebook.webp"
            alt="เข้าสู่ระบบด้วย Facebook"
            width="40px"
            height="40px"
          />
        </NuxtLink>
        <NuxtLink
          class="btn btn-circle btn-link"
          href="https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent&   loginChannelId=1521958360&loginState=CLn4LYQoulJIgLFHIw15nw#/"
          target="_blank"
        >
          <img
            class="rounded-full"
            src="/assets/icons/line.webp"
            alt="เข้าสู่ระบบด้วย Line"
            width="40px"
            height="40px"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
