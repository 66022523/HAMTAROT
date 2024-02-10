<template>
  <header class="container mx-auto fixed top-10 left-0 right-0 z-10">
    <nav
      class="navbar bg-[#3B348620] py-3 px-5 rounded-xl shadow-xl backdrop-blur"
    >
      <div class="navbar-start">
        <a href="/">
          <img
            class="rounded-full"
            src="/favicon.ico"
            alt="Hamtarot Favicon"
            width="50px"
          />
        </a>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl text-pink" href="/">Hamtarot</a>
      </div>
      <div class="navbar-end">
        <!-- ? If the user has already logged in -->
        <!-- <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="Profile"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between"> Profile </a>
            </li>
            <li><a>Logout</a></li>
          </ul>
        </div> -->

        <!-- ? If the user has not logged in yet -->
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-circle avatar">
            <div class="w-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li class="menu-title">ยืนยันตัวตน</li>
            <li><a href="/login">ลงชื่อเข้าใช้</a></li>
            <li><a href="/register">สมัครบัญชีใหม่</a></li>
            <li><a href="/forgot">ลืมรหัสผ่าน</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
