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

  modules: ["shadcn-nuxt", "@nuxtjs/tailwindcss"]
})