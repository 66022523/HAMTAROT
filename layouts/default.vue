<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <div>
    <header
      class="container sticky left-0 right-0 top-0 z-50 mx-auto pb-10 lg:py-10"
    >
      <NavBar />
    </header>
    <main class="relative">
      <slot />
    </main>
    <footer>
      <ButtonContact />
    </footer>
    <SpeedInsights />
  </div>
</template>
