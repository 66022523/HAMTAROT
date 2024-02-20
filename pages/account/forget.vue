<script setup>
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  middleware(to, from) {
    if (to.meta.pageTransition && typeof to.meta.pageTransition !== "boolean")
      to.meta.pageTransition.name =
        from.path === "/account/login" ? "slide-right" : "slide-left";
  },
});

const username = ref("");

const submit = async (event) => {
  const username = event.target[0].value;

  console.log("Sended reset password email to:", username);

  await navigateTo("/account");
};
</script>

<template>
  <section class="container mx-auto flex items-center justify-center md:p-4">
    <AuthDialog
      v-model:username="username"
      :submit="submit"
      title="ลืมรหัสผ่าน"
      prev-to="/account/register"
      prev-text="สร้างบัญชี"
      next-to="/account/login"
      next-text="เข้าสู่ระบบ"
      :button-disabled="!username"
    >
      ส่งอีเมลยืนยัน
    </AuthDialog>
  </section>
</template>
