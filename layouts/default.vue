<template>
  <div>
    <header class="container sticky left-0 right-0 top-0 z-50 mx-auto py-10">
      <NavBar />
    </header>
    <main class="relative">
      <slot />
    </main>
    <footer>
      <ButtonContact />
    </footer>
  </div>
</template>
