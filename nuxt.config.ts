// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
import {definePreset} from "@primeuix/styled";
import tailwindcss from "@tailwindcss/vite";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{red.50}',
      100: '{red.100}',
      200: '{red.200}',
      300: '{red.300}',
      400: '{red.400}',
      500: '{red.500}',
      600: '{red.600}',
      700: '{red.700}',
      800: '{red.800}',
      900: '{red.900}',
      950: '{red.950}'
    }
  }
});

export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  modules: ['@nuxt/icon', '@nuxt/image', '@primevue/nuxt-module', 'motion-v/nuxt'],
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        darkModeSelector: '.dark-mode'
      },
    },
    directives: {
      include: ['Tooltip'] // Include the Tooltip directive
    }
  }
})