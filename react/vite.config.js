import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
      proxy:{
          '/api':'http://localhost:8000'
      },
      port: process.env.VITE_PORT || 3000,
        css:{
          postcss:{
              plugins:[
                  tailwindcss(),
                  autoprefixer(),
              ]
          }
        }
    }
})
