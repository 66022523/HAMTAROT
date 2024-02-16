<template>
  <div>
    <header class="sticky top-0 left-0 right-0 z-50 container mx-auto py-10">
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
