import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt'],
      manifest: {
        name: 'PWA-Elegant Wear',
        short_name: 'Elegant',
        description: 'Elegant Wear',
        theme_color: '#0099ff',
        icons: [
          {
            src: '/crwn-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            "purpose": "maskable"
          },
          {
            src: '/crwn-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            "purpose": "maskable"
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'], 
      },

    }),
  ],
});
