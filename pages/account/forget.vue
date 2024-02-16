<script setup>
const username = ref();

const submit = (event) => {
  const router = useRouter();

  const username = event.target[0].value;

  console.log("Sended reset password email to:", username);

  router.push({ path: "/account" });
};
</script>

<template>
  <section class="container mx-auto flex justify-center items-center">
    <div
      class="card w-fit text-pink bg-navy border-pink border-[15px] rounded-badge shadow-xl"
    >
      <div class="card-body text-center">
        <h2 class="text-yellow mb-8">ลืมรหัสผ่าน</h2>
        <form @submit.prevent="submit">
          <TextInput
            v-model="username"
            class="mb-2"
            type="email"
            placeholder="อีเมล/ชื่อผู้ใช้"
            :value="username"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
              />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
              />
            </svg>
          </TextInput>
          <div class="flex justify-between mb-4">
            <NuxtLink to="/account/login">เข้าสู่ระบบ</NuxtLink>
            <NuxtLink to="/account/register">ลงทะเบียน</NuxtLink>
          </div>
          <Button
            type="submit"
            class="btn btn-warning w-full"
            :disabled="!username"
          >
            รีเซ็ทรหัสผ่าน
          </Button>
        </form>
        <div class="divider before:bg-pink after:bg-pink">หรือ</div>
        <div class="flex justify-between items-center">
          <NuxtLink
            class="btn btn-circle btn-link"
            href="https://accounts.google.com/"
            target="_blank"
          >
            <img
              class="rounded-full"
              src="/assets/icons/google.png"
              alt=""
              width="40px"
            />
          </NuxtLink>
          <NuxtLink
            class="btn btn-circle btn-link"
            href="https://www.facebook.com/login.php/"
            target="_blank"
          >
            <img
              class="rounded-full"
              src="/assets/icons/facebook.png"
              alt=""
              width="40px"
            />
          </NuxtLink>
          <NuxtLink
            class="btn btn-circle btn-link"
            href="https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent&   loginChannelId=1521958360&loginState=CLn4LYQoulJIgLFHIw15nw#/"
            target="_blank"
          >
            <img
              class="rounded-full"
              src="/assets/icons/line.png"
              alt=""
              width="40px"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
