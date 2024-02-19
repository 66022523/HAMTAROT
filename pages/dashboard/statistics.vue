<template>
  <section class="container mx-auto px-4">
    <DashboardNavBar class="mb-8" :active-path="$route.path" />
    <div class="card rounded-xl bg-minsk shadow-xl">
      <div class="card-body">
        <h2 class="text-center text-portica">สถิติ</h2>
        <p class="mb-4 text-center">ข้อมูลสถิติเกี่ยวกับเว็บไซต์ทั้งหมด</p>
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-figure text-secondary">
              <i class="fi fi-rr-user align-middle text-3xl leading-[0]"></i>
            </div>
            <div class="stat-title">จำนวนผู้เข้าชม</div>
            <div class="stat-value">31,000 คน</div>
            <div class="stat-desc">1 ม.ค. - 1 ก.พ</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <i class="fi fi-rr-stars align-middle text-3xl leading-[0]"></i>
            </div>
            <div class="stat-title">อัตราการให้คะแนน</div>
            <div class="stat-value">100%</div>
            <div class="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <i
                class="fi fi-rs-bell-ring align-middle text-3xl leading-[0]"
              ></i>
            </div>
            <div class="stat-title">สมัครรับการแจ้งเตือน</div>
            <div class="stat-value">1,200</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
