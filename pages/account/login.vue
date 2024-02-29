<script setup>
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  middleware(to, from) {
    if (to.meta.pageTransition && typeof to.meta.pageTransition !== "boolean")
      to.meta.pageTransition.name = from.path.includes("register")
        ? "slide-right"
        : "slide-left";
  },
});

const route = useRoute();

const emailUsername = ref("");
const password = ref("");
const loading = ref(false);

if (process.client) {
  if (sessionStorage.length) {
    if (sessionStorage.getItem("user")) navigateTo("/");
  }
}

const submit = async (event) => {
  loading.value = true;

  const emailUsername = event.target[0].value;
  const password = event.target[1].value;

  // Injection Protected
  if (!emailUsername) {
    loading.value = false;
    return alert("กรุณากรอกอีเมลหรือชื่อผู้ใช้งาน");
  }
  if (!password) {
    loading.value = false;
    return alert("กรุณากรอกรหัสผ่านสำหรับบัญชีดังกล่าว");
  }

  const usersStorage = localStorage.getItem("users");

  if (!usersStorage) {
    loading.value = false;
    return alert("ไม่พบบัญชีดังกล่าวในระบบ");
  }

  const usersData = JSON.parse(usersStorage);
  const user = usersData.find(
    (user) => user.email === emailUsername || user.username === emailUsername,
  );

  if (!user) {
    loading.value = false;
    return alert("ไม่พบบัญชีดังกล่าวในระบบ");
  }
  if (
    new TextDecoder().decode(new Uint8Array(user.password).buffer) !== password
  ) {
    loading.value = false;
    return alert("รหัสผ่านไม่ถูกต้อง");
  }

  sessionStorage.setItem("user", JSON.stringify(usersData));

  loading.value = false;

  if (route.query.callback) {
    await navigateTo(atob(route.query.callback));
  } else {
    await navigateTo("/account");
  }
  reloadNuxtApp();
};
</script>

<template>
  <section class="container mx-auto flex items-center justify-center md:p-4">
    <AuthDialog
      v-model:email-username="emailUsername"
      v-model:password="password"
      :submit="submit"
      title="เข้าสู่ระบบ"
      :prev-to="
        $route.query.callback
          ? `/account/forget?callback=${$route.query.callback}`
          : '/account/forget'
      "
      prev-text="ลืมรหัสผ่าน"
      :next-to="
        $route.query.callback
          ? `/account/register?callback=${$route.query.callback}`
          : '/account/register'
      "
      next-text="สร้างบัญชี"
    >
      <span v-if="loading" class="loading loading-spinner" /> เข้าสู่ระบบ
    </AuthDialog>
  </section>
</template>
