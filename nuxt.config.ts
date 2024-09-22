// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    // Make environment variables accessible here
    public: {
      STUDENT_NAME: process.env.NUXT_STUDENT_NAME,
      STUDENT_NIM: process.env.NUXT_STUDENT_NIM,
      // Add more environment variables as needed
    },
  },
})
