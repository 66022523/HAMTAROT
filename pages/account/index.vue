<template>
  <section class="container mx-auto flex justify-center items-center">
    <div class="card w-fit text-pink bg-navy rounded-badge shadow-xl">
      <div class="card-body px-12 py-10">
        <h2 class="text-yellow text-center">จัดการบัญชี</h2>
        <p class="mb-8 text-center">
          เปลี่ยนแปลงหรือจัดการบัญชีของคุณ หากมีปัญหาใด ๆ
          สามารถติดต่อเราได้ที่ปุ่ม "?"
          <br />
          ที่ด้านขวาล่างของเว็บไซต์
        </p>
        <div
          class="flex flex-row gap-8 justify-center justify-items-center items-center"
        >
          <div class="avatar">
            <div class="w-24 p-2 bg-pink rounded-full">
              <img src="/assets/icons/person.png" />
            </div>
          </div>
          <div>
            <TextInput
              placeholder="ชื่อเล่นหรือนามแฝง"
              hint-top-left="ชื่อเล่น"
            />
            <div class="flex flex-row gap-2 justify-center items-baseline">
              <TextInput
                type="email"
                placeholder="example@domain.subdomain"
                hint-top-left="อีเมล"
              />
              <TextInput
                type="password"
                placeholder="12345678"
                hint-top-left="รหัสผ่าน"
                hint-bottom-left="อย่างน้อย 8 ตัวอักษร พิมพ์เล็ก พิมพ์ใหญ่และตัวอักษรพิเศษ"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <Button class="btn btn-primary">เปลี่ยน</Button>
          <Button class="btn btn-outline btn-primary">ลบบัญชี</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: "",
    };
  },

  methods: {
    login() {
      // เพิ่มโค้ดการตรวจสอบและดำเนินการเข้าสู่ระบบตรงนี้
      console.log("Logging in with:", this.username, this.password);
    },
  },
};
</script>
