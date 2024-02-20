<script setup>
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  middleware(to, from) {
    if (to.meta.pageTransition && typeof to.meta.pageTransition !== "boolean")
      to.meta.pageTransition.name =
        from.path === "/account/forget" ? "slide-right" : "slide-left";
  },
});

const username = ref("");
const newPassword = ref("");
const verifyPassword = ref("");

const submit = async (event) => {
  const username = event.target[0].value;
  const newPassword = event.target[1].value;
  const verifyPassword = event.target[2].value;

  console.log(
    "Created account and logging in with:",
    username,
    newPassword,
    verifyPassword,
  );

  await navigateTo("/account");
};
</script>

<template>
  <section class="container mx-auto flex items-center justify-center md:p-4">
    <AuthDialog
      v-model:username="username"
      v-model:new-password="newPassword"
      v-model:verify-password="verifyPassword"
      :submit="submit"
      title="สร้างบัญชี"
      prev-to="/account/login"
      prev-text="เข้าสู่ระบบ"
      next-to="/account/forget"
      next-text="ลืมรหัสผ่าน"
      :button-disabled="
        !username ||
        !newPassword ||
        !verifyPassword ||
        newPassword !== verifyPassword
      "
    >
      ลงทะเบียน
    </AuthDialog>
  </section>
</template>
