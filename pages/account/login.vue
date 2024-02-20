<script setup>
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  middleware(to, from) {
    if (to.meta.pageTransition && typeof to.meta.pageTransition !== "boolean")
      to.meta.pageTransition.name =
        from.path === "/account/register" ? "slide-right" : "slide-left";
  },
});

const username = ref("");
const password = ref("");

const submit = async (event) => {
  const username = event.target[0].value;
  const password = event.target[1].value;

  console.log("Logging in with:", username, password);

  if (username === "admin" && password === "1234abcd") {
    await navigateTo("/dashboard/statistics");
  } else {
    await navigateTo("/");
  }
};
</script>

<template>
  <section class="container mx-auto flex items-center justify-center md:p-4">
    <AuthDialog
      v-model:username="username"
      v-model:password="password"
      :submit="submit"
      title="เข้าสู่ระบบ"
      prev-to="/account/forget"
      prev-text="ลืมรหัสผ่าน"
      next-to="/account/register"
      next-text="สร้างบัญชี"
      :button-disabled="!username || !password"
    >
      เข้าสู่ระบบ
    </AuthDialog>
  </section>
</template>
