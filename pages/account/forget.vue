<script setup>
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  middleware(to, from) {
    if (to.meta.pageTransition && typeof to.meta.pageTransition !== "boolean")
      to.meta.pageTransition.name = from.path.includes("login")
        ? "slide-right"
        : "slide-left";
  },
});

const email = ref("");
const loading = ref(false);

if (process.client) {
  if (sessionStorage.length) {
    if (sessionStorage.getItem("user")) navigateTo("/");
  }
}

const submit = async (event) => {
  loading.value = true;

  const email = event.target[0].value;

  setTimeout(() => {
    alert(
      `ส่งอีเมลรีเซ็ตรหัสผ่านไปยัง ${email} เรียบร้อยแล้ว กรุณาตรวจสอบอีเมลหรืออีเมลขยะของคุณ`,
    );
    loading.value = false;
  }, 5000);
};
</script>

<template>
  <section class="container mx-auto flex items-center justify-center md:p-4">
    <AuthDialog
      v-model:email="email"
      :submit="submit"
      title="ลืมรหัสผ่าน"
      :prev-to="
        $route.query.callback
          ? `/account/register?callback=${$route.query.callback}`
          : '/account/register'
      "
      prev-text="สร้างบัญชี"
      :next-to="
        $route.query.callback
          ? `/account/login?callback=${$route.query.callback}`
          : '/account/login'
      "
      next-text="เข้าสู่ระบบ"
    >
      ส่งอีเมลยืนยัน
    </AuthDialog>
  </section>
</template>
