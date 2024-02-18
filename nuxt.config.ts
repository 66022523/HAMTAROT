// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: "/_hamtarot/",
    head: {
      title: "Hamtarot",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [
        { rel: "preload", href: "/assets/images/background.jpg", as: "image" },
      ],
      style: [],
      script: [],
      noscript: [],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "page", mode: "out-in" },
    rootId: "__hamtarot",
    rootTag: "body",
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss"],
  googleFonts: {
    families: {
      Kanit: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      "Cherry Bomb One": true,
    },
  },
});
