<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <div>
    <header
      class="container sticky left-0 right-0 top-0 z-50 mx-auto pb-8 lg:py-8"
    >
      <NavBar />
    </header>
    <main class="relative">
      <slot />
    </main>
    <footer class="fixed bottom-5 right-5 z-50">
      <ButtonContact />
    </footer>
    <SpeedInsights />
  </div>
</template>
