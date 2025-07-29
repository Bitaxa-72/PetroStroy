import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
    root: './src',
    base: '/PetroStroy/',
    server: {
        port: 3001,
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './src/index.html',
            },
        },
    },
    plugins: [
        injectHTML(),
    ],
});