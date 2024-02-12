<template>
  <div class="Account-container">
    <div class="Account-box">
      <h1>จัดการบัญชี</h1>
      <div class="hint">เปลี่ยนแปลงหรือจัดการบัญชีของคุณ หากมีปัญหาใด ๆ สามารถติดต่อเราได้ที่ปุ่ม
        “?”<br>ที่ด้านขวาล่างของเว็บไซต์
      </div>
      <br>
      <div class="image-container">
        <img src="/public/ICON/person.png" class="rounded-full" />
      </div>
      <div>
        <label for="nickname" class="block text-sm font-medium text-gray-700" style="text-align: left;">ชื่อเล่น</label>
        <input v-model="user" type="text" placeholder="ชื่อเล่นหรือนามแฝง" required
          style="width: 40px00px; text-align: left; ">


        <br><br>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div class="form-group">
            <label for="email" class="block text-sm font-medium text-gray-700" style="text-align: left;">อีเมล</label>

            <label for="pass" class="block text-sm font-medium text-gray-700" style="text-align: left;">รหัสผ่าน</label>
          </div>

          <div class="form-group">
            <div class="input-container">
              <input v-model="username" type="text" placeholder="example@domain.subdomain" required>
              <i class='bx bxs-user'></i>
            </div>
            <div class="input-container">
              <input v-model="password" type="password" placeholder="********" required>
              <i class='bx bxs-lock-alt'></i>
              <div class="password-hint">
                อย่างน้อย 8 ตัวอักษร พิมพ์เล็ก<br>พิมพ์ใหญ่และตัวอักษรพิเศษ
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="button-container">
        <button1 class="btn">เปลี่ยน</button1>
        <button2 class="btn">ลบบัญชี</button2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      inputWidth: '380px'

    }
  },

  methods: {
    login() {
      // เพิ่มโค้ดการตรวจสอบและดำเนินการเข้าสู่ระบบตรงนี้
      console.log('Logging in with:', this.username, this.password);
    },
  },
};
</script>

<style scoped>
.Account-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.Account-box {
  width: 700px;
  padding: 20px;
  border-radius: 10px;
  background: #3B3486;
}

.Account-box h1 {
  text-align: center;
  color: #F8E559;
  font-weight: bold;
}

.image-container {
  width: 100px;
  height: 100px;
  border-radius: 70%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  float: left;
}

.image-container img {
  width: 90px;
  height: 90px;
}

.form-group {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.form-group .input-container {
  flex: 1;
  margin-right: 20px;
}

.input-container {
  position: relative;
  margin-bottom: 20px;
}

.input-container input {
  width: 100%;
  padding-right: 30px;
}

.input-container i {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.hint {
  text-align: center;
}

.password-hint {
  font-size: 0.8em;
  color: #9e9c9c;
  margin-top: 5px;
}

input {
  padding: 10px;
  background: #F8EDFF;
  border-radius: 10px;
  width: 200px;
}

.button-container{
  text-align: center;
}

button1 {
  background-color: #864AF9;
  color: #ffffff;
  margin-right: 10px;
  width: 100px;
}

button2 {
  background-color: #3B3486;
  color: #864AF9;
  margin-left: 10px;
  width: 100px;
}
</style>