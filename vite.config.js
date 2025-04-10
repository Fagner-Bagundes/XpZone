import { defineConfig } from "vite";

export default defineConfig({
    root: './src',
    base: '/XpZone',
    server: {
        port: 3000,
    },
    build: {
        outDir: '../dist'
    }
})