<template>
  <div class="text-primary-content">
    <header class="sticky top-0 left-0 right-0 z-50 container mx-auto py-10">
      <Navbar />
    </header>
    <main class="relative">
      <slot />
      <Contact />
    </main>
  </div>
</template>
