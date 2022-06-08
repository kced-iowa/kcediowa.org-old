import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
    title: 'Sigourney Area Development Corporation',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=0',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'keywords',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'description',
      },
    ],
    link: [],
    script: [],
  },
})
