// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    github_api_key: "",

    public: {
      github_username: "martinpugdal"
    }
  },

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true, // viewer is for the Tailwind Visualizer plugin
  },

  modules: ["shadcn-nuxt", "@nuxtjs/tailwindcss"]
})