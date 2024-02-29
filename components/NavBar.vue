<script setup>
const router = useRouter();

const user = ref();

if (process.client) {
  if (sessionStorage.getItem("user")) {
    const userSession = sessionStorage.getItem("user");
    const userData = JSON.parse(userSession);

    user.value = userData;
  }
}

const goBack = (params) => {
  if (params.category && params.id) return router.replace({ path: "/" });

  router.back();
};
const logout = () => {
  sessionStorage.removeItem("user");
  reloadNuxtApp();
};
</script>

<template>
  <nav class="navbar bg-[#3B348620] p-4 shadow-xl backdrop-blur md:rounded-xl">
    <div class="navbar-start gap-2">
      <Button
        v-if="$route.path !== '/'"
        class="btn-circle btn-ghost"
        @click="goBack($route.params)"
      >
        <i class="fi fi-sr-angle-small-left text-2xl leading-[0]"></i>
      </Button>
      <NuxtLink v-else class="btn btn-circle btn-ghost" to="/">
        <img
          src="/favicon.ico"
          alt="Hamtarot Favicon"
          width="100px"
          height="100px"
        />
      </NuxtLink>
    </div>
    <div class="navbar-center">
      <NuxtLink
        class="btn btn-ghost text-3xl lg:text-4xl"
        style="font-family: &quot;Cherry Bomb One&quot;, system-ui"
        to="/"
      >
        HAMTAROT
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="avatar btn btn-circle btn-primary"
          aria-label="ตัวเลือกของผู้ใช้"
        >
          <div class="w-10 rounded-full">
            <img
              v-if="user"
              alt="Profile"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-10 w-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li class="menu-title">จัดการบัญชี</li>
          <li v-if="!user">
            <NuxtLink to="/account/login">ลงชื่อเข้าใช้</NuxtLink>
          </li>
          <li v-if="!user">
            <NuxtLink to="/account/register">สมัครบัญชีใหม่</NuxtLink>
          </li>
          <li v-if="!user">
            <NuxtLink to="/account/forget">ลืมรหัสผ่าน</NuxtLink>
          </li>
          <li v-if="user">
            <NuxtLink to="/account">แก้ไขโปรไฟล์</NuxtLink>
          </li>
          <li v-if="user">
            <button class="mt-2 justify-center bg-error" @click="logout">
              ลงชื่อออก
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
