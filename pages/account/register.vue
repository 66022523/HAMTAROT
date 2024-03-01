<script setup>
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  middleware(to, from) {
    if (to.meta.pageTransition && typeof to.meta.pageTransition !== "boolean")
      to.meta.pageTransition.name = from.path.includes("forget")
        ? "slide-right"
        : "slide-left";
  },
});

const route = useRoute();

const username = ref("");
const email = ref("");
const newPassword = ref("");
const verifyPassword = ref("");
const loading = ref(false);

if (process.client) {
  if (sessionStorage.length) {
    if (sessionStorage.getItem("user")) navigateTo("/");
  }
}

const submit = async (event) => {
  loading.value = true;

  const username = event.target[0].value;
  const email = event.target[1].value;
  const newPassword = event.target[2].value;
  const verifyPassword = event.target[3].value;
  const user = {
    username,
    email,
    password: Object.values(new TextEncoder().encode(newPassword)),
  };

  // Injection Protected
  if (!username) {
    loading.value = false;
    return alert("กรุณากรอกชื่อผู้ใช้");
  }
  if (!email) {
    loading.value = false;
    return alert("กรุณากรอกอีเมล");
  }
  if (!newPassword) {
    loading.value = false;
    return alert("กรุณากรอกรหัสผ่าน");
  }
  if (!verifyPassword) {
    loading.value = false;
    return alert("กรุณากรอกรหัสผ่านยืนยัน");
  }
  if (newPassword !== verifyPassword) {
    loading.value = false;
    return alert("รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง");
  }
  if (!passwordRegex.test(newPassword)) {
    loading.value = false;
    return alert(
      "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร ประกอบไปด้วยตัวอักษรพิมพ์เล็ก พิมพ์ใหญ่และตัวอักษรพิเศษ",
    );
  }

  const usersStorage = localStorage.getItem("users");

  if (usersStorage) {
    const usersData = JSON.parse(usersStorage);

    if (usersData.includes(email)) {
      loading.value = false;
      return alert("มีบัญชีนี้อยู่ในระบบอยู่แล้ว ไม่จำเป็นต้องสร้างบัญชีใหม่");
    }

    usersData.push(user);

    localStorage.setItem("users", JSON.stringify(usersData));
  } else {
    localStorage.setItem("users", JSON.stringify([user]));
  }

  sessionStorage.setItem("user", JSON.stringify({ username, email }));

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
      v-model:username="username"
      v-model:email="email"
      v-model:new-password="newPassword"
      v-model:verify-password="verifyPassword"
      :submit="submit"
      title="สร้างบัญชี"
      :prev-to="
        $route.query.callback
          ? `/account/login?callback=${$route.query.callback}`
          : '/account/login'
      "
      prev-text="เข้าสู่ระบบ"
      :next-to="
        $route.query.callback
          ? `/account/forget?callback=${$route.query.callback}`
          : '/account/forget'
      "
      next-text="ลืมรหัสผ่าน"
    >
      <span v-if="loading" class="loading loading-spinner" /> ลงทะเบียน
    </AuthDialog>
  </section>
</template>
