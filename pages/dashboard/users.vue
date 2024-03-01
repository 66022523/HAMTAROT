<script setup>
const users = [
  {
    image: "https://daisyui.com/tailwind-css-component-profile-1@56w.png",
    username: "Cy Ganderton",
    email: "cy_ganderton@hamtarot.com",
    status: true,
  },
  {
    image: "https://daisyui.com/tailwind-css-component-profile-2@56w.png",
    username: "Hart Hagerty",
    email: "hart_hagerty@hamtarot.com",
    status: true,
  },
  {
    image: "https://daisyui.com/tailwind-css-component-profile-3@56w.png",
    username: "Brice Swyre",
    email: "brice_swyre@hamtarot.com",
    status: true,
  },
  {
    image: "https://daisyui.com/tailwind-css-component-profile-4@56w.png",
    username: "Marjy Ferencz",
    email: "marjy_ferencz@hamtarot.com",
    status: true,
  },
  {
    image: "https://daisyui.com/tailwind-css-component-profile-5@56w.png",
    username: "Yancy Tear",
    email: "yancy_tear@hamtarot.com",
    status: true,
  },
];
</script>

<template>
  <section class="container mx-auto p-4 pt-8 md:pt-0">
    <DashboardNavBar class="mb-8" :active-path="$route.path" />
    <div class="card rounded-xl bg-minsk shadow-xl">
      <div class="card-body">
        <h1 class="text-center text-portica">จัดการผู้ใช้งาน</h1>
        <p class="mb-8 text-center">จัดการผู้ใช้งานที่มีบัญชีจากที่นี่</p>
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>ชื่อ</th>
                <th>สถานะ</th>
                <th></th>
              </tr>
            </thead>
            <!-- body -->
            <tbody>
              <tr v-for="user in users" :key="user">
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="mask mask-squircle h-12 w-12">
                        <img
                          :src="user.image"
                          :alt="user.username"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{{ user.username }}</div>
                      <div class="text-sm opacity-50">{{ user.email }}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p
                    :class="{
                      'text-green-500': user.status,
                      'text-red-500': !user.status,
                    }"
                  >
                    {{
                      user.status ? "ยืนยันอีเมลแล้ว" : "ยังไม่ได้ยืนยันอีเมล"
                    }}
                  </p>
                </td>
                <th>
                  <div class="dropdown dropdown-end">
                    <div
                      tabindex="0"
                      role="button"
                      class="btn btn-ghost btn-xs m-1"
                    >
                      จัดการ
                    </div>
                    <ul
                      tabindex="0"
                      class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
                    >
                      <li><a>รีเซ็ตรหัสผ่าน</a></li>
                      <li><a>ลบบัญชี</a></li>
                    </ul>
                  </div>
                </th>
              </tr>
            </tbody>
            <!-- foot -->
            <tfoot>
              <tr>
                <th></th>
                <th>ชื่อ</th>
                <th>สถานะ</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
