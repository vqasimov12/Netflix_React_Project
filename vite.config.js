import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      common: "/src/common",
      icons: "/src/assets/icons",
      images: "/src/assets/images",
      locales: "/src/locales",
      pages: "/src/pages",
      landingComponents:"/src/pages/landingpage/components",
      homeComponents:"/src/pages/homepage/components",
      landing:"/src/pages/landingpage",
      details:"/src/pages/detailspage"
    },
  },
})
